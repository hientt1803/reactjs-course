/**
 * Tạo một ứng dụng tính toán với các chức năng cộng, trừ, nhân, chia.
 * Sử dụng useCallback để tối ưu hóa việc truyền hàm callback thực hiện phép tính.
 * Sử dụng React.memo để tối ưu hóa render của kết quả phép tính.
 * Sử dụng useMemo để tính toán kết quả phép tính.
 */

import React, { useCallback, useMemo, useState } from "react";

export const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [operation, setOperation] = useState("+");

  const calculate = useCallback(() => {
    switch (operation) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return 0;
    }
  }, [a, b, operation]);

  const result = useMemo(() => calculate(), [calculate]);

  return (
    <div>
      <h1>Calculator</h1>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(Number(e.target.value))}
      />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input
        type="number"
        value={b}
        onChange={(e) => setB(Number(e.target.value))}
      />
      <Result result={result} />
    </div>
  );
};

const Result = React.memo(({ result }: { result: number }) => {
  console.log(`Rendering result: ${result}`);
  return <div>Result: {result}</div>;
});
