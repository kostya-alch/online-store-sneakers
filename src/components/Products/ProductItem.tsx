import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCartAC } from '../../store/cart/cartActions';
import { IProduct } from '../../types/types';
import Quantity from './Quantity';

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(addItemToCartAC(product, count));
  };
  return (
    <div
      className="max-w-screen-md shadow-sm rounded-md p-5 w-4/5 mx-auto bg-white flex justify-center flex-col
    text-center mt-7 items-center last:mb-20 "
      style={{
        borderRadius: '50px',
        // background: 'linear-gradient(145deg, #cacaca, #f0f0f0)',
        boxShadow: '20px 20px 60px #bebebe, -20px -20px 60px #ffffff',
        background:
          'linear-gradient(to right, #e0eafc, #cfdef3) ' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <img
        src={product.imagePath}
        className="rounded-3xl"
        alt={product.name}
        width={220}
      />
      <div className="text-lg font-bold my-1">{product.name}</div>
      <div className="text-lg text-gray-600">{product.price}р.</div>
      <Quantity setCount={setCount} count={count} />
      <button
        className="bg-green-500 font-semibold px-3 py-1 mt-2 text-white rounded-sm 
        hover:bg-green-600"
        onClick={() => addHandler()}
      >
        В корзину
      </button>
    </div>
  );
};

export default ProductItem;
