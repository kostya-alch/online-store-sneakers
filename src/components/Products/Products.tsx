import { FC } from 'react';
import { IProduct } from '../../types/types';
import ProductItem from './ProductItem';

const Products: FC = () => {
  // mock
  const products: IProduct[] = [
    {
      name: 'New Balance 997',
      imagePath:
        'https://static.street-beat.ru/upload/resize_cache/iblock/d04/500_500_1/d04cf108f059f10786e9f162b649a8fc.jpg',
      price: 12993,
      id: 1,
    },
    {
      name: 'Jordan One Take ',
      imagePath:
        'https://static.street-beat.ru/upload/resize_cache/iblock/d23/500_500_1/d2308d8db2ffd5df9b270e4cb12e251f.jpg',
      price: 8999,
      id: 2,
    },
    {
      name: 'Jordan Stay Loyal',
      imagePath:
        'https://static.street-beat.ru/upload/resize_cache/iblock/7ce/500_500_1/7ce78a43995f3f6d6e21cf1bd9f4df2e.jpg',
      price: 9999,
      id: 3,
    },
  ];
  return (
    <div className="mt-4">
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default Products;
