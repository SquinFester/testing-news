import { useState, useCallback } from "react";

const CounterTwo = ({ add }: { add: number }) => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback((a: number): void => {
    setCount((prev) => prev + a);
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => increment(add)}>Increment</button>
    </>
  );
};

export default CounterTwo;
