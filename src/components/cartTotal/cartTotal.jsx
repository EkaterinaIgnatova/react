import { useEffect, useState } from "react";
import styles from "./cartTotal.module.css";

export const CartTotal = ({ state, data }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      data.reduce((acc, current) => {
        return acc + current.price * state[current.id];
      }, 0)
    );
  }, [state, data]);

  return (
    <div className={styles.root}>
      <span>Total</span>
      <span>{total + "$"}</span>
    </div>
  );
};
