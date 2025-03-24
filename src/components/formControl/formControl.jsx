import { Counter } from "../counter/counter";
import styles from "./formControl.module.css";

export const FormControl = ({ type, label, value, onChange }) => {
  const getFormElement = () => {
    switch (type) {
      case "input":
        return <input value={value} onChange={onChange} />;
      case "textarea":
        return <textarea value={value} rows={3} onChange={onChange} />;
      case "counter":
        return (
          <Counter
            count={value}
            increaseCount={() => onChange(value + 1)}
            decreaseCount={() => onChange(value - 1)}
          ></Counter>
        );
    }
  };

  return (
    <div className={styles.root}>
      <span>{label}</span>
      {getFormElement()}
    </div>
  );
};
