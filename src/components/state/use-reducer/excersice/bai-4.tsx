import { useReducer } from "react";

interface ICartItem {
  id: number;
  name: string;
  quantity: number;
}

interface ICart {
  carts: ICartItem[];
}

interface IAddToCartAction {
  type: "ADD_TO_CART";
  payload: ICartItem;
}

interface IRemoveFromCartAction {
  type: "REMOVE_FROM_CART";
  payload: number;
}

interface IUpdateQuantityAction {
  type: "UPDATE_QUANTITY";
  payload: {
    id: number;
    quantity: number;
  };
}

type IAction = IAddToCartAction | IRemoveFromCartAction | IUpdateQuantityAction;

const initialState: ICart = { carts: [] };

const reducer = (state: ICart, action: IAction): ICart => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { carts: [...state.carts, action.payload] };
    case "REMOVE_FROM_CART":
      return {
        carts: state.carts.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        carts: state.carts.map((cart) =>
          cart.id === action.payload.id
            ? { ...cart, quantity: action.payload.quantity }
            : cart
        ),
      };

    default:
      return state;
  }
};
/**
 * 
interface IUpdateQuantityAction {
  type: "UPDATE_QUANTITY";
  payload: {
    id: number;
    quantity: number;
  };
}
 */

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: { id: Date.now(), name: "new item", quantity: 1 },
          })
        }
      >
        Add Item
      </button>
      <ul>
        {state.carts.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              }
            >
              Remove
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: { id: item.id, quantity: item.quantity + 1 },
                })
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: "UPDATE_QUANTITY",
                  payload: { id: item.id, quantity: item.quantity - 1 },
                })
              }
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingCart;
