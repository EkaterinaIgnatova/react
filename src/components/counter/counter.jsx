import { useCounter } from "./use-counter";
import "./counter.css";

export const Counter = ({onCountChange}) => {

    const {count, increaseCount, decreaseCount} = useCounter(onCountChange);

    return (
        <div className="counter">
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}