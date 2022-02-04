import classNames from 'classnames';
import { FC, useState } from 'react';
import logo from '../../assets/img/logo.svg';

import cartIcon from '../../assets/img/cart.svg';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Header: FC = () => {
  const [isShowCart, setIsShowCart] = useState(false); // стейт для показа товара в корзине
  const cart = useTypedSelector((state) => state.cart);

  const total = cart.reduce((acc, item) => acc + item.price, 0); //вычисляем прайс

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
        className="border-none bg-transparent relative"
        onClick={() => setIsShowCart(!isShowCart)}
      >
        <img src={cartIcon} alt="cart" width={55} />
        <div
          className="text-red-600 absolute bottom-0 right-1
        font-bold rounded-full bg-white w-5 h-5 flex items-center justify-center"
        >
          {cart.length}
        </div>
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
        {cart.map((item) => (
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
