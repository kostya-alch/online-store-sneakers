import { cartActionTypes } from './cartTypes';
import { IProduct } from '../../types/types';

export const addItemToCartAC = (product: IProduct, count: number) => ({
  type: cartActionTypes.CART_ADD_ITEM,
  payload: { product, count },
});

export const removeItemToCartAC = (productId: string) => ({
  type: cartActionTypes.CART_REMOVE_ITEM,
  payload: productId,
});
