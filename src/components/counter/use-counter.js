import { useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useCounter = (onCountChange) => {

     const [count, setCount] = useState(0);

     const increaseCount = () => {
        if(count < MAX_COUNT) {
            setCount(count + 1);
            onCountChange(count + 1);
        }
     };

     const decreaseCount = () => {
        if(count > MIN_COUNT) {
            setCount(count - 1);
            onCountChange(count - 1);
        }
     };

    return {count, increaseCount, decreaseCount};
}