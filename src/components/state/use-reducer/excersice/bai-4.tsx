import { useReducer } from "react";

interface ICartItem {
  id: number;
  name: string;
  quantity: number;
}

interface ICart {
  cart: ICartItem[];
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

const initialState: ICart = { cart: [] };

const reducer = (state: ICart, action: IAction): ICart => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { cart: state.cart.filter((item) => item.id !== action.payload) };
    case "UPDATE_QUANTITY":
      return {
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
};

const ShoppingCart = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: { id: Date.now(), name: "New Item", quantity: 1 },
          })
        }
      >
        Add Item
      </button>
      <ul>
        {state.cart.map((item) => (
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
