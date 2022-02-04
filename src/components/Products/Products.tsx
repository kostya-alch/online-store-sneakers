import { FC } from 'react';
import { IProduct } from '../../types/types';
import ProductItem from './ProductItem';

const Products: FC = () => {
  const products: IProduct[] = [
    // mock
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
    {
      name: 'Nike Waffle Trainer 2',
      imagePath:
        'https://static.street-beat.ru/upload/resize_cache/iblock/bc5/500_500_1/bc5385a29981362686a269f24e4ae75b.jpg',
      price: 12993,
      id: 4,
    },
    {
      name: 'Nike LeBron Witness 5',
      imagePath:
        'https://static.street-beat.ru/upload/resize_cache/iblock/f91/500_500_1/f9119ee4cc717ae932cd9f94c0538363.jpg',
      price: 8650,
      id: 5,
    },
    {
      name: 'Adidas Performance Dame 8',
      imagePath:
        'https://static.street-beat.ru/upload/resize_cache/iblock/816/500_500_1/8161cbfc99d73e0f4f95e8bb3b16ee37.jpg',
      price: 15323,
      id: 6,
    },
  ];

  return (
    <div className="mt-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
