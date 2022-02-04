import { ICartItem } from '../../types/types';
import { cartActionTypes, TypeActionCart } from './cartTypes';

const initialState: ICartItem[] = [];

export const cartReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    case cartActionTypes.CART_ADD_ITEM: {
      const cart = [...state];
      const { count, product } = action.payload;

      const foundProduct = cart.find((item) => item.id === product.id);
      if (foundProduct) {
        foundProduct.count = count;
      } else {
        cart.push({
          ...product,
          count,
        });
      }
      return cart;
    }

    case cartActionTypes.CART_REMOVE_ITEM: {
      const cart = [...state];
      cart.forEach((item, index) => {
        if (item.id === action.payload) cart.slice(index, 1);
      });

      return cart;
    }
    default:
      return state;
  }
};
