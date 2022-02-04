import { IProduct } from '../../types/types';

export enum cartActionTypes {
  CART_ADD_ITEM = 'CART_ADD_ITEM',
  CART_REMOVE_ITEM = 'CART_REMOVE_ITEM',
}

interface ICartAddItemPayload {
  product: IProduct;
  count: number;
}

interface ICartAddItem {
  type: cartActionTypes.CART_ADD_ITEM;
  payload: ICartAddItemPayload;
}

interface ICartRemoveItem {
  type: cartActionTypes.CART_REMOVE_ITEM;
  payload: number;
}

export type TypeActionCart = ICartAddItem | ICartRemoveItem;
