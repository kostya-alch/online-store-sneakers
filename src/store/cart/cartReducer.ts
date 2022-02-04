import { ICartItem } from '../../types/types';
import { TypeActionCart } from './cartTypes';

const initialState: ICartItem[] = [];

export const cartReducer = (state = initialState, action: TypeActionCart) => {
  switch (action.type) {
    default:
      return state;
  }
};
