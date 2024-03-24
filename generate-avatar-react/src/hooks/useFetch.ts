import axios from "axios";
import { useEffect, useRef, useState } from "react";

export interface IPost {
  id: number;
  title: string;
}

const BASE_URL = "https://robohash.org/";
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export const useFetchRobot = <T>(url: string) => {
  const [data, setData] = useState<T | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const abortController = useRef<AbortController | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchApi = async () => {
      //to avoid race fetching
      abortController.current = new AbortController();

      setErrorMsg(null);
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(url, {
          signal: abortController.current.signal,
        });

        const results = response.data as T;

        setErrorMsg(null);

        setData(results);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        if (axios.isAxiosError(error)) {
          // access to config, request, and response
          setErrorMsg(error.message);
        } else if (error instanceof Error) {
          // just a stock error

          setErrorMsg("stock error");
        } else {
          // unknown
          setErrorMsg("Error Unknown");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
    return () => abortController.current?.abort();
  }, [url]);

  return { data, isLoading, errorMsg };
};
