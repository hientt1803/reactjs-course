import { ChangeEvent, useState } from "react";

const SimpleForm = () => {
  const [inputValue, setInputValue] = useState("");
  
  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(inputValue);
    
    // Thực hiện các hành động khác như gửi dữ liệu đến server
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={inputValue} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default SimpleForm;

