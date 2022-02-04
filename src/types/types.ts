import { Dispatch, SetStateAction } from 'react';

export interface IProduct {
  name: string;
  imagePath: string;
  price: number;
  id: number;
}

export interface ICartItem extends IProduct {
  count: number;
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;
