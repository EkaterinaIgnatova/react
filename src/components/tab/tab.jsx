import classNames from "classnames";
import styles from "./tab.module.css";

export const Tab = ({ name, isActive, onClick }) => {
  return (
    <button
      className={classNames(styles.root, { [styles.active]: isActive })}
      onClick={onClick}
    >
      {name}
    </button>
  );
};
