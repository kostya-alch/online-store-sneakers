import classNames from 'classnames';
import { FC, useState } from 'react';
import logo from '../../assets/img/logo.svg';
import { ICartItem } from '../../types/types';

import cart from '../../assets/img/cart.svg';

const cartItems: ICartItem[] = [
  // mock
  {
    id: 1,
    imagePath:
      'https://static.street-beat.ru/upload/resize_cache/iblock/168/500_500_1/1684b1c9efc664ee80a4996aadffe81e.jpg',
    name: 'Jordan Max Aura 3',
    count: 1,
    price: 11229,
  },
];

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false); // стейт для показа товара в корзине

  const total = cartItems.reduce((acc, item) => acc + item.price, 0); //вычисляем прайс

  const removeHandler = (id: number) => {
    console.log(id);
  };
  return (
    <div
      className=" flex items-center justify-between relative 
    bg-emerald-300 w-full py-1 px-3"
      style={{
        background: ' linear-gradient(to right, #0575E6, #00F260)',
      }}
    >
      <img src={logo} alt="logo" width={80} />
      <button
        className="border-none bg-transparent"
        onClick={() => setIsShowCart(!isShowCart)}
      >
        <img src={cart} alt="cart" width={55} />
      </button>
      <div
        className={classNames(
          'bg-white absolute top-3 right-0 p-5 rounded-md shadow-md',
          {
            hidden: !isShowCart,
          }
        )}
        style={{ top: 'calc(72px + 1rem)' }}
      >
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center">
            <img
              src={item.imagePath}
              alt={item.name}
              width={55}
              height={55}
              className="mr-3"
            />
            <div>
              <div>{item.name}</div>
              <div>{`${item.count} x ${item.price}`}</div>
              <button
                onClick={() => removeHandler(item.id)}
                className="text-red-600 bg-transparent border-0"
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
        <div className="text-lg border-solid border-t-2 border-l-purple-300 mt-4 pt-1">
          Total: <b>{total} р.</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
