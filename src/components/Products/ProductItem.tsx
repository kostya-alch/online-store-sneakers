import React, { FC } from 'react';
import { IProduct } from '../../types/types';
import Quantity from './Quantity';

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const addHandler = () => {
    console.log('add');
  };
  return (
    <div
      className="shadow-sm rounded-md p-5 w-4/5 mx-auto bg-white flex justify-center flex-col
    text-center mt-7 items-center last:mb-20 "
    >
      <img src={product.imagePath} alt={product.name} width={220} />
      <div className="text-lg font-bold my-1">{product.name}</div>
      <div className="text-lg text-gray-600">{product.price}р.</div>
      <Quantity />
      <button
        className="bg-green-500 font-semibold px-3 py-1 text-white rounded-sm hover:bg-green-600"
        onClick={() => addHandler()}
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductItem;
