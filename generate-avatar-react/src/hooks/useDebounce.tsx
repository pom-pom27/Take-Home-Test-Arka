import { useEffect, useState } from "react";

export const useDebounce = <T,>(value: T, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      //after the delay we set the value
      setDebouncedValue(value);
    }, delay);

    //if value change before the delay is finish we clear the timeout and start again
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debouncedValue;
};
