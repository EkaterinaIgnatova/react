import styles from "./counter.module.css";

export const Counter = ({ count, decreaseCount, increaseCount }) => {
  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={decreaseCount}>
        -
      </button>
      <span>{count}</span>
      <button className={styles.button} onClick={increaseCount}>
        +
      </button>
    </div>
  );
};
