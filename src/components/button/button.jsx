import classNames from "classnames";
import styles from "./button.module.css";
import { use } from "react";
import { ThemeContext } from "../themeContext/themeContext";

export const Button = ({
  label,
  onClick,
  rounded = false,
  disabled = false,
  className,
}) => {
  const { theme } = use(ThemeContext);

  return (
    <button
      className={classNames(styles.root, className, {
        [styles.dark]: theme === "dark",
        [styles.rounded]: rounded,
        [styles.disabled]: disabled,
      })}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
