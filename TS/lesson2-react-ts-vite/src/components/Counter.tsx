import { ReactNode, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const buttonClass = "bg-gray-300 px-2";

  return (
    <>
      <p className="text-xl text-pink-400">Count is equal {count}</p>
      <button
        className={`${buttonClass} mr-2`}
        onClick={() => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className={buttonClass}
        onClick={() => setCount((prev) => prev - 1)}
      >
        -
      </button>
    </>
  );
};

export default Counter;
