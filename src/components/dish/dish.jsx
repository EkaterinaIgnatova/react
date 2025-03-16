import { useState } from "react";
import { Counter } from "../counter/counter"

export const Dish = ({dishInfo}) => {

    const [price, setPrice] = useState(0);

    const changePrice = (count) => {
        setPrice(dishInfo.price * count);
    };

    return (
        <>
            <span>{dishInfo.name} ({dishInfo.ingredients.join(', ')})</span>
            <div>
                <Counter countIsChanged={changePrice}/>
                <b>{price + '$'}</b>
            </div>
        </>
    )
}