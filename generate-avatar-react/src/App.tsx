import { useState } from "react";
import "./App.css";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [name, setName] = useState("");

  const nameDebounce = useDebounce(name);

  return (
    <main>
      <div className="container">
        <input
          type="text"
          placeholder="Ketik nama anda"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="img-wrapper">
          {nameDebounce.length !== 0 ? (
            <img
              src={`https://robohash.org/${nameDebounce}`}
              alt="generated robot image"
            />
          ) : (
            <div>Robot Image</div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
