import { useEffect, useState } from "react";
import "./App.css";
import MyDropdown from "./components/MyDropdown";

const jenjangList = [
  "Pendidikan Pra Sekolah",
  "Pendidikan Dasar",
  "Pendidikan Menengah",
  "Pendidikan Tinggi",
];

const tingkatanList = [
  [
    "PAUD (Pendidikan Anak Usia Dini)",
    "TK (Taman Kanak-kanak)",
    "RA (Raudhatul Athfal)",
  ],
  [
    "SD (Sekolah Dasar)",
    "MI (Madrasah Ibtidaiyah)",
    "SMP (Sekolah Menengah Pertama)",
    "MTs (Madrasah Tsanawiyah)",
  ],
  [
    "SMA (Sekolah Menengah Atas)",
    "MA (Madrasah Aliyah)",
    "SMK (Sekolah Menengah Kejuruan)",
  ],
  ["D3 Diploma", "S1/D4 Sarjana", "S2 Magister", "S3 Doktoral"],
];

function App() {
  const [isJenjangDropdownOpen, setIsJenjangDropdownOpen] = useState(false);
  const [jenjangValue, setJenjangValue] = useState<number | null>(null);
  const [isTingkatanDropdownOpen, setIsTingkatanDropdownOpen] = useState(false);
  const [tingkatanValue, setTingkatanValue] = useState<number | null>(null);

  useEffect(() => {
    setTingkatanValue(null);
  }, [jenjangValue]);

  const listValue = jenjangValue != null ? tingkatanList[jenjangValue] : null;

  const closeAllDropdown = () => {
    setIsTingkatanDropdownOpen(false);
    setIsJenjangDropdownOpen(false);
  };

  return (
    <main className="container">
      <MyDropdown
        closeAllDropdown={closeAllDropdown}
        className="color-green"
        isDropdownOpen={isJenjangDropdownOpen}
        setIsDropdownOpen={setIsJenjangDropdownOpen}
        value={jenjangValue}
        setValue={setJenjangValue}
        listValue={jenjangList}
      />
      <MyDropdown
        closeAllDropdown={closeAllDropdown}
        className="color-red"
        isDropdownOpen={isTingkatanDropdownOpen}
        setIsDropdownOpen={setIsTingkatanDropdownOpen}
        value={tingkatanValue}
        setValue={setTingkatanValue}
        listValue={listValue}
      />
    </main>
  );
}

export default App;
