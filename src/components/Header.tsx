import classNames from 'classnames';
import { FC, useState } from 'react';
import logo from '../assets/img/logo.svg';
import { ICartItem } from '../types/types';

import cart from '../assets/img/cart.svg';

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
  const [isShowCart, setIsShowCart] = useState(false);

  const total = cartItems.reduce((acc, item) => {
    // count price
    return acc + item.count;
  }, 0);
  return (
    <div
      className="flex items-center justify-between relative 
    bg-emerald-300 w-full py-1 px-3"
      style={{
        background: ' linear-gradient(to right, #0575E6, #00F260)',
      }}
    >
      <img src={logo} alt="logo" width={55} />
      <button
        className="border-none bg-transparent"
        onClick={() => setIsShowCart(!isShowCart)}
      >
        <img src={cart} alt="cart" width={40} />
      </button>
      <div
        className={classNames('absolute top-3 right-0', {
          hidden: !isShowCart,
        })}
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
            </div>
          </div>
        ))}
        <div className="text-lg">
          Total:<b>{total}</b>
        </div>
      </div>
    </div>
  );
};

export default Header;
