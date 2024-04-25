import React, { useRef, useEffect } from "react";
import { fabric } from "fabric";

const Canvas = ({ texts }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current);

    const newText = texts.map((text, index) => {
      return new fabric.Text(text, {
        left: 50 + index * 20,
        top: 50 + index * 20,
      });
    });
    canvas.add(...newText);

    return () => {
      canvas.dispose();
    };
  }, [texts]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Canvas;
