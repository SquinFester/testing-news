import { ReactNode } from "react";

interface CountProps {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
}

const Counter = ({ setCount, children }: CountProps) => {
  const buttonClass = "bg-gray-300 px-2";

  return (
    <>
      <p className="text-xl text-pink-400">{children}</p>
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
