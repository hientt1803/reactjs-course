import { useReducer } from "react";

/**
 *
 * ACTION 'ADD_NEW_ITEM'
 *
 * VIEW: Click vao button dispatch('ADD_NEW_ITEM;
 *
 * REDUCER (state,action)=>{
 *      switch(action){
 *          case 'ADD_NEW_ITEM':
 *              state +=state
 *          case: 'anothor'
 *      }
 * }
 *
 */
const reducer = (state: number, action: string) => {
  switch (action) {
    case "INCREASE":
      return state + 1;
    case "REDUCE":
      return state - 1;
    case "REMOVE": 
      return 0;

    default:
      return state;
  }
};

const reducer2 = (state: number, action: { type: string;
   value: number }) => {
  switch (action.type) {
    case "ASSIGN":
      return action.value;

    default:
      return state;
  }
};

const ExampleReducer1 = () => {
  const [count, dispatch] = useReducer(reducer, 0);
  const [count2, dispatch2] = useReducer(reducer2, 0);

  return (
    <div>
      <p>COUNT: {count}</p>
      <button onClick={() => dispatch("INCREASE")}>Increase</button>
      <button onClick={() => dispatch("REDUCE")}>Reduce</button>
      <button onClick={() => dispatch("REMOVE")}>Delete</button>
      <p className="mt-10">COUNT2: {count2}</p>
      <button
        onClick={() =>
          dispatch2({
            type: "ASSIGN",
            value: 10,
          })
        }
      >
        ASSIGN VALUE
      </button>
    </div>
  );
};

export default ExampleReducer1;
