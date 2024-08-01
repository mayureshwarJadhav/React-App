import React, { useState } from 'react';

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="text-center mt-5">
        <h2 className="text-xl mb-4">Counter: {count}</h2>
            <button className='bg-green-400 text-white py-2 px-4 rounded'
            onClick = {increment}>Increment</button>
            <button className=' bg-red-400 text-white py-2 px-4 rounded ml-2'
            onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
