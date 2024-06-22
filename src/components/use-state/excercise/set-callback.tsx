import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementTwice = () => {
    setCount(count + 1); // Dùng giá trị hiện tại của count
    setCount(count + 1); // Vẫn dùng giá trị ban đầu của count
  };

  const incrementTwiceWithCallback = () => {
    setCount(prevCount => prevCount + 1); // Dùng giá trị cập nhật của count
    setCount(prevCount => prevCount + 1); // Dùng giá trị mới nhất của count sau lần cập nhật đầu tiên
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementTwice}>Increment Twice</button>
      <button onClick={incrementTwiceWithCallback}>Increment Twice with Callback</button>
    </div>
  );
};

export default Counter;
