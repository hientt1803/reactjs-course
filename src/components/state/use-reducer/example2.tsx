import { useReducer } from "react";

type State = {
  name: string;
  age: number;
};

// Định nghĩa kiểu Action
type Action =
  | { type: "incremented_age" }
  | { type: "changed_name"; nextName: string };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
    default:
      return state;
  }
  //   throw Error("Unknown action: " + action.type);
}

const initialState = { name: "Taylor", age: 42 };

export default function ExampleReducer2() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incremented_age" });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  }

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
}
