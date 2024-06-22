import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const calculate = () => {
    setResult(Number(num1) + Number(num2));
  };

  return (
    <div>
      <h1>Simple Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="First number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Second number"
      />
      <button onClick={calculate}>Calculate</button>
      <p>Result: {result}</p>
    </div>
  );
};

export default Calculator;
