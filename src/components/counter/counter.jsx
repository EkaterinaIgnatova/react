import { useCounter } from "./use-counter";
import "./counter.css";

export const Counter = ({countIsChanged}) => {

    const {count, increaseCount, decreaseCount} = useCounter(countIsChanged);

    return (
        <div className="counter">
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
    )
}