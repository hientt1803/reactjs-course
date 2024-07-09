import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { CartItem, cartState, cartTotalState } from "./store";

const Cart: React.FC = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const total = useRecoilValue(cartTotalState);
  const [name, setName] = useState("");
  const [price, setPrice] = useState<number | string>(0);

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
        name,
        price: Number(price),
        quantity: 1,
      });
      setName("");
      setPrice(0);
    }
  };

  const incrementQuantity = (itemId: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
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
