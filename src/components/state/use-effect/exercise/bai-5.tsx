import React, { useEffect, useState } from "react";

const RandomColor: React.FC = () => {
  const [color, setColor] = useState<string>("#FFFFFF");

  useEffect(() => {
    const changeColor = () => {
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(
        16
      )}`;
      setColor(randomColor);
    };

    const interval = setInterval(changeColor, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <h1 style={{ color: "#000" }}>Random Color</h1>
    </div>
  );
};

export default RandomColor;
