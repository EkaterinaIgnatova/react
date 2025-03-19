import { Counter } from "../counter/counter"
import { useCounter } from "../counter/useCounter";

export const DishCounter = ({onCountChange}) => {

    const {count, increaseCount, decreaseCount} = useCounter(onCountChange);

    return (
        <Counter count={count} increaseCount={increaseCount} decreaseCount={decreaseCount}></Counter>
    )
}