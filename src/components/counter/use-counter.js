import { useState } from "react";

export const useCounter = (countIsChanged) => {

     const [count, setCount] = useState(0);

     const increaseCount = () => {
        if(count < 5) {
            setCount(count + 1);
            countIsChanged(count + 1);
        }
     };

     const decreaseCount = () => {
        if(count > 0) {
            setCount(count - 1);
            countIsChanged(count - 1);
        }
     };

    return {count, increaseCount, decreaseCount};
}