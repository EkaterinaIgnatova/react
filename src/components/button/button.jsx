import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../themeContext/themeContext";

export const Button = ({ label, onClick, rounded = false, active = false }) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.root, {
        [styles.light]: theme === "light",
        [styles.dark]: theme === "dark",
        [styles.rounded]: rounded,
        [styles.active]: active,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
