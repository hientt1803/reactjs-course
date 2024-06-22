import { useState } from "react";

const ChangeBackgroundColor = () => {
  const [color, setColor] = useState("white");

  const changeColor = () => {
    const newColor = color === "white" ? "blue" : "white";
    setColor(newColor);
  };

  return (
    <div
      style={{ backgroundColor: color, height: "100vh", textAlign: "center" }}
    >
      <button onClick={changeColor}>Change Background Color</button>
    </div>
  );
};

export default ChangeBackgroundColor;
