import { useMemo, useState } from "react";

const Example2 = () => {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const calculateSquare = (num: number) => {
    console.log("Calculating square...");
    return num * num;
  };

  const squaredNumber = useMemo(() => calculateSquare(number), [number]);

  return (
    <div>
      <h1>Square Calculator</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        The square of {number} is {squaredNumber}
      </p>
      <p>Text: {text}</p>
    </div>
  );
};

export default Example2;
