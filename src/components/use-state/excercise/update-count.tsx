import { useState } from "react";

const UpdateCount = () => {
  // tạo một state và initial value, gán datatype
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={handleIncrement}>CLick me</button>
    </div>
  );
};

export default UpdateCount;
