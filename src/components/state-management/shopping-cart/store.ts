import { atom, selector } from 'recoil';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const cartState = atom<CartItem[]>({
  key: 'cartState',
  default: [],
});

/* This code snippet is defining a selector named `cartTotalState` using Recoil, a state management
library for React. */
export const cartTotalState = selector({
  key: 'cartTotalState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});
