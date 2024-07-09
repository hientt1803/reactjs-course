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

export const cartTotalState = selector({
  key: 'cartTotalState',
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
});
