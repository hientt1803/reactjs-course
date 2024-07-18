import { ChangeEvent, useState } from "react";

const SimpleForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validateName = () => {
    if (name.length < 3) {
      setError("Name must be at least 3 characters long");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={validateName}
        />
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
};

export default SimpleForm;
