import { useState } from "react";

type IPerson = {
  firstName: string;
  lastName: string;
  age: number;
};

const ExampleUseState = () => {
  // Dùng state với các kiểu primitive datatype
  const [value, setValue] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(0);

  // Dùng state với kiểu phức tạp
  const [person, setPerson] = useState<IPerson>({
    firstName: "",
    lastName: "",
    age: 0,
  });

  const [myArray, setMyArray] = useState<IPerson[]>([
    {
      firstName: "John",
      lastName: "nana",
      age: 35,
    },
    {
      firstName: "Anna",
      lastName: "bell",
      age: 25,
    },
  ]);

  const handleSetValue = () => {
    // Cách phổ biến hay dùng
    // setValue(value + 1);
    // setValue(value + 1);
    // callBack function để setState
    // setValue((prev) => prev + 1);
    // setValue((prev) => prev + 1);
    // setObjectState
    // spread
    // setPerson({
    //   ...person,
    //   firstName: "Anna",
    // });

    // Kiểu Array
    setMyArray([
      ...myArray,
      {
        firstName: "abc",
        lastName: "356",
        age: 35,
      },
    ]);
  };

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {/* Usestate with primitive datatype */}
      {/* <div>{value}</div>
      <button onClick={handleSetValue}>Click me</button> */}

      {/* Object */}
      <div>
        {myArray.map((array) => (
          <li>{array.firstName}</li>
        ))}
        <div>FirstName: {person.firstName}</div>
        <div>LastName: {person.lastName}</div>
        <div>Age: {person.age}</div>
        <button onClick={() => handleSetValue()}>Set Object</button>
      </div>
    </div>
  );
};

export default ExampleUseState;
