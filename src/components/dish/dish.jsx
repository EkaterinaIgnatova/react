import { useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dish.module.css";

export const Dish = ({ dishInfo }) => {
  const [price, setPrice] = useState(0);

  const changePrice = (count) => {
    setPrice(dishInfo.price * count);
  };

  return (
    <>
      <span>
        {dishInfo.name} ({dishInfo.ingredients.join(", ")})
      </span>
      <div className={styles.price}>
        <DishCounter onCountChange={changePrice} />
        <b>{price + "$"}</b>
      </div>
    </>
  );
};
