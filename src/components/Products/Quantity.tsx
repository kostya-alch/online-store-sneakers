import { FC, useState } from 'react';

const Quantity: FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center">
      <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
      <input
        type="number"
        className="mx-2"
        onChange={(e) => setCount(+e.target.value)}
        value={count}
      />
      <button onClick={() => count < 30 && setCount(count + 1)}>+</button>
    </div>
  );
};

export default Quantity;
