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
      return state.filter((item) => item.id !== action.payload);
    }
    default:
      return state;
  }
};
