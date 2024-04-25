import React, { useState } from "react";

const TextInput = ({ onAddText }) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleAddText = () => {
    onAddText(text);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAddText}>Add Text</button>
    </div>
  );
};

export default TextInput;
