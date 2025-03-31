import { useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dish.module.css";

export const Dish = ({ dishInfo, id, allowChangePrice }) => {
  const [price, setPrice] = useState(0);

  const changePrice = (count) => {
    if (allowChangePrice) {
      setPrice(dishInfo.price * count);
    }
  };

  return (
    <>
      <span>{dishInfo.name}</span>
      <div className={styles.price}>
        <DishCounter onCountChange={changePrice} id={id} />
        <b>{(allowChangePrice ? price : dishInfo.price) + "$"}</b>
      </div>
    </>
  );
};
