import { useReducer } from "react";

interface IState {
  result: number;
}

interface IAction {
  type: "ADD" | "SUBTRACT" | "MULTIPLY" | "DIVIDE";
  payload: number;
}

const initialState: IState = { result: 0 };

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "ADD":
      return { result: state.result + action.payload };
    case "SUBTRACT":
      return { result: state.result - action.payload };
    case "MULTIPLY":
      return { result: state.result * action.payload };
    case "DIVIDE":
      return { result: state.result / action.payload };
    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Result: {state.result}</p>
      <button onClick={() => dispatch({ type: "ADD", payload: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "SUBTRACT", payload: 1 })}>
        Subtract 1
      </button>
      <button onClick={() => dispatch({ type: "MULTIPLY", payload: 2 })}>
        Multiply by 2
      </button>
      <button onClick={() => dispatch({ type: "DIVIDE", payload: 2 })}>
        Divide by 2
      </button>
    </div>
  );
};

export default Calculator;
