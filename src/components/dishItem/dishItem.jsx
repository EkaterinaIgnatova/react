import { useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dishItem.module.css";
import { Link } from "react-router";

export const DishItem = ({ name, price, id, allowChangePrice }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const changePrice = (count) => {
    if (allowChangePrice) {
      setTotalPrice(price * count);
    }
  };

  return (
    <div className={styles.root}>
      <Link to={"/dish/" + id}>{name}</Link>
      <div className={styles.counter}>
        <DishCounter onCountChange={changePrice} id={id} />
        <b>{(allowChangePrice ? totalPrice : price) + "$"}</b>
      </div>
    </div>
  );
};
