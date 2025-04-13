import { NavLink } from "react-router";
import styles from "./tab.module.css";
import classNames from "classnames";
import Skeleton from "react-loading-skeleton";

export const Tab = ({ path, text }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.link, isActive && styles.active)
      }
      to={path}
    >
      {text || <Skeleton width={100} />}
    </NavLink>
  );
};
