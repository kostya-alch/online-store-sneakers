import { FC, useState } from 'react';

interface IQuantity {
  count: number;
}

const Quantity: FC<IQuantity> = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center">
      <button onClick={() => setCount((prev) => prev++)}>+</button>
      <input
        type="number"
        className="mx-2"
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      <button onClick={() => setCount((prev) => prev--)}>-</button>
    </div>
  );
};

export default Quantity;
