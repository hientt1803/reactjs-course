import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartItem, cartState, cartTotalState } from "./store";

const Cart: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const total = useRecoilValue(cartTotalState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [numberIncrement, setNumberIncrement] = useState<number>(0);

  const addItemToCart = (item: CartItem) => {
    setCart((prevCart) => {
      //   const existingItem = prevCart.find((i) => i.id === item.id);
      //   if (existingItem) {
      //     return prevCart.map((i) =>
      //       i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
      //     );
      //   } else {
      return [...prevCart, { ...item, quantity: 1 }];
      //   }
    });
  };

  const removeItemFromCart = (itemId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const handleAddItem = () => {
    if (name && price) {
      addItemToCart({
        id: Date.now(),
        name: name,
        price: price,
        quantity: 1,
      });
      setName("");
      setPrice(0);
    }
  };

  /**
   * The `incrementQuantity` function updates the quantity of a specific item in a cart by a specified
   * increment or by 1 if no increment is provided.
   * @param {number} itemId - itemId is a number that represents the unique identifier of an item in
   * the cart.
   */
  const incrementQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                numberIncrement !== 0
                  ? item.quantity + numberIncrement
                  : item.quantity + 1,
            }
          : item
      )
    );
  };

  const decrementQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    <div>
      <h2>Giỏ hàng</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPrice(Number(e.target.value))
        }
      />
      <select
        name=""
        value={numberIncrement}
        onChange={(e) => setNumberIncrement(Number(e.target.value))}
      >
        <option value="0">0</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
      <button onClick={handleAddItem}>Thêm sản phẩm</button>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button onClick={() => incrementQuantity(item.id)}>+</button>
            <button onClick={() => decrementQuantity(item.id)}>-</button>
            <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Tổng tiền: ${total}</h3>
    </div>
  );
};

export default Cart;
