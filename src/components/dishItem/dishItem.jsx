import { useState } from "react";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dishItem.module.css";
import { Link } from "react-router";
import Skeleton from "react-loading-skeleton";

export const DishItem = ({ dishInfo, id, allowChangePrice }) => {
  const [price, setPrice] = useState(0);

  const changePrice = (count) => {
    if (allowChangePrice) {
      setPrice(dishInfo.price * count);
    }
  };

  return (
    <div className={styles.root}>
      <Link to={"/dish/" + id}>
        {dishInfo?.name || <Skeleton width={200} />}
      </Link>
      <div className={styles.counter}>
        <DishCounter onCountChange={changePrice} id={id} />
        <b className={styles.price}>
          {dishInfo ? (
            (allowChangePrice ? price : dishInfo.price) + "$"
          ) : (
            <Skeleton width={30} />
          )}
        </b>
      </div>
    </div>
  );
};
