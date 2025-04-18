import { use } from "react";
import { Counter } from "../counter/counter";
import { useCounter } from "../counter/useCounter";
import { AuthContext } from "../authContext/authContext";

export const DishCounter = ({ onCountChange, id }) => {
  const { count, increaseCount, decreaseCount } = useCounter(onCountChange, id);
  const { auth } = use(AuthContext);

  if (!auth.isUserAuth) {
    return null;
  }

  return (
    <Counter
      count={count}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
    />
  );
};
