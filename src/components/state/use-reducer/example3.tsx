import React, { useReducer } from "react";

interface IUser {
  name: string;
  age: number;
}

interface IState {
  count: number;
  user: IUser;
}

type IAction =
  | { type: "INCREMENT" }
  | { type: "DECREMENT" }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_AGE"; payload: number }
  | { type: "RESET" };

const initialState: IState = { count: 0, user: { name: "", age: 0 } };

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "SET_NAME":
      return { ...state, user: { ...state.user, name: action.payload } };
    case "SET_AGE":
      return { ...state, user: { ...state.user, age: action.payload } };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

const ComplexStateManagement: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>

      <h2>User Info</h2>
      <p>Name: {state.user.name}</p>
      <p>Age: {state.user.age}</p>
      <input
        type="text"
        value={state.user.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
        placeholder="Enter name"
      />
      <input
        type="number"
        value={state.user.age}
        onChange={(e) =>
          dispatch({ type: "SET_AGE", payload: Number(e.target.value) })
        }
        placeholder="Enter age"
      />
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default ComplexStateManagement;
