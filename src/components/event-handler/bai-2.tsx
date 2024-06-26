import { useState } from "react";

const EventExample = () => {
  // VD dùng
  //   controlled form là form được quản lí bởi state
  const [value, setValue] = useState("");

  //    uncontrlled form là fomr không được quản lý bởi  state

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    alert(value);
  };

  return (
    <>
      <form action="">
        <input type="text" onChange={handleOnChange} />
        <button onClick={handleClick}>Click me</button>
      </form>
    </>
  );
};

export default EventExample;
