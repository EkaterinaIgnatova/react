import { useCallback, useEffect, useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useCounter = (onCountChange) => {
  const [count, setCount] = useState(0);

  const increaseCount = useCallback(() => {
    setCount((count) => Math.min(count + 1, MAX_COUNT));
  }, []);

  const decreaseCount = useCallback(() => {
    setCount((count) => Math.max(count - 1, MIN_COUNT));
  }, []);

  useEffect(() => {
    onCountChange(count);
  }, [count]);

  return { count, increaseCount, decreaseCount };
};
