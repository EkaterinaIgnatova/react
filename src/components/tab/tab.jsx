import { NavLink } from "react-router";
import styles from "./tab.module.css";
import classNames from "classnames";

export const Tab = ({ path, text }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.active)
      }
      to={path}
    >
      {text}
    </NavLink>
  );
};
