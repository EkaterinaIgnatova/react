import "./counter.css";

export const Counter = ({count, decreaseCount, increaseCount}) => {
    return (
        <div className="counter">
            <button onClick={() => decreaseCount()}>-</button>
            <span>{count}</span>
            <button onClick={() => increaseCount()}>+</button>
        </div>
    )
}