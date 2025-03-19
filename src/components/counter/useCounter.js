import { useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useCounter = (onCountChange) => {

     const [count, setCount] = useState(0);

     const increaseCount = () => {
        if(count < MAX_COUNT) {
            const newCount = count + 1;
            setCount(newCount);
            onCountChange(newCount);
        }
     };

     const decreaseCount = () => {
        if(count > MIN_COUNT) {
            const newCount = count - 1;
            setCount(newCount);
            onCountChange(newCount);
        }
     };

    return {count, increaseCount, decreaseCount};
}