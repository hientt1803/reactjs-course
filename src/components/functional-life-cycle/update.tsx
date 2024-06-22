import React, { useState } from "react";

export function SimpleUpdatingExample() {
  const [count, setCount] = useState<number>(0);
// Hooks
  const handleClick = () => {
    setCount(count + 1);
    // alert("clicked");
  };

  return (
    <div>
      <h1>Simple Updating Example</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
