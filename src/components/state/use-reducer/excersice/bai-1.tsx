/**
 *  Tạo một component để đếm số lần click vào một nút
 *  sử dụng useReducer.
 *  Sử dụng reducer để xử lý các action click.
 */

import { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state: { count: number }, action: { type: string }) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Click me</button>
    </div>
  );
};

export default Counter;
