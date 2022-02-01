import classNames from 'classnames';
import { FC } from 'react';
import logo from '../assets/img/logo.svg';
import { ICartItem } from '../types/types';

const cartItems: ICartItem[] = [
  {
    imagePath: '',
    name: '',
    count: 1,
    price: 322,
  },
];

const Header: FC = () => {
  return (
    <div className="flex items-center content-between ">
      <img src={logo} alt="logo" />

      <div className={classNames('', {})}>
        <div>
          <img src={} alt="" width={55} height={55} />
        </div>
      </div>
    </div>
  );
};

export default Header;
