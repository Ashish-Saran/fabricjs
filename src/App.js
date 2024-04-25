import React, { useState, useEffect } from "react";
// import { fabric } from "fabric";

// function App() {
//   const [textInput, setTextInput] = useState("");
//   const [canvas, setCanvas] = useState(null);

//   useEffect(() => {
//     const newCanvas = new fabric.Canvas("canvas");
//     setCanvas(newCanvas);
//   }, []);

//   const handleAddText = () => {
//     if (canvas && textInput.trim() !== "") {
//       const newText = new fabric.Text(textInput, {
//         // left: Math.random() * canvas.width,
//         // top: Math.random() * canvas.height,
//         fill: "black", // Default fill color
//         fontSize: 24, // Default font size
//         selectable: true, // Enable selection and dragging
//         hasControls: true, // Enable resizing handles
//       });
//       canvas.add(newText);
//       canvas.setActiveObject(newText);
//       canvas.renderAll();
//       setTextInput("");
//     }
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={textInput}
//           onChange={(e) => setTextInput(e.target.value)}
//           placeholder="Enter text..."
//         />
//         <button onClick={handleAddText}>Add Text</button>
//       </div>
//       <canvas id="canvas" width="800" height="600"></canvas>
//     </div>
//   );
// }

import "./App.css";
import { fabric } from "fabric";

function App() {
  useEffect(() => {
    var canvas = new fabric.Canvas("canvas", {});
    var text = new fabric.Text("hello world", { left: 100, top: 100 });
    canvas.add(text);
  }, []);

  return (
    <div>
      <input type="text" name="" id="" />
      <canvas id="canvas"></canvas>
    </div>
  );
}

export default App;
