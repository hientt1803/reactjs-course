import { useState } from "react";

const ExampleUseState = () => {
  const [first, setFirst] = useState("value");

  const handleSetvalue = () => {
    setFirst("New value");
  };

  return (
    <div>
      <div>{first}</div>
      <button onClick={handleSetvalue}>Click me</button>
    </div>
  );
};

export default ExampleUseState;
