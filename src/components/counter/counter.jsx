import { Button } from "../button/button";
import styles from "./counter.module.css";

export const Counter = ({ count, decreaseCount, increaseCount }) => {
  return (
    <div className={styles.root}>
      <Button label={"-"} onClick={decreaseCount} rounded={true} />
      <span>{count}</span>
      <Button label={"+"} onClick={increaseCount} rounded={true} />
    </div>
  );
};
