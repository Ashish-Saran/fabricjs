import React, { useState } from "react";
import TextInput from "./TextInput";
import Canvas from "./Canvas";

function App() {
  const [texts, setTexts] = useState([]);

  const handleAddText = (text) => {
    setTexts([...texts, text]);
  };

  const handleReset = () => {
    setTexts([]);
  };

  return (
    <div>
      <TextInput onAddText={handleAddText} />
      <button onClick={handleReset}>Reset</button>
      <Canvas texts={texts} />
    </div>
  );
}

export default App;
