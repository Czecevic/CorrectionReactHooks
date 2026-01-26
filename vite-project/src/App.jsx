import { useState } from "react";
import "./App.css";
import { SeeName } from "./components/SeeName";

function App() {
  const [name, setName] = useState(["Thomas", "Tristan", "Lionnel"]);
  const [inputValue, setInputValue] = useState("");

  const handleAddName = () => {
    const input = [inputValue];
    setName(name.concat(input));
  };
  return (
    <>
      <div>
        <input onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => handleAddName()}>Add name</button>
      </div>
      <SeeName name={name} setName={setName} />
    </>
  );
}

export default App;
