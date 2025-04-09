import { useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dishItem.module.css";
import { Link } from "react-router";

export const DishItem = ({ dishInfo, id, allowChangePrice }) => {
  const [price, setPrice] = useState(0);

  const changePrice = (count) => {
    if (allowChangePrice) {
      setPrice(dishInfo.price * count);
    }
  };

  return (
    <div className={styles.root}>
      <Link to={"/dish/" + id}>{dishInfo.name}</Link>
      <div className={styles.price}>
        <DishCounter onCountChange={changePrice} id={id} />
        <b>{(allowChangePrice ? price : dishInfo.price) + "$"}</b>
      </div>
    </div>
  );
};
