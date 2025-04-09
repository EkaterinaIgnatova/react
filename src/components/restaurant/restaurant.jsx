import { Outlet } from "react-router";
import styles from "./restaurant.module.css";
import { Tab } from "../tab/tab";

export const Restaurant = ({ restaurantInfo }) => {
  return (
    <div>
      <h2 className={styles.name}>{restaurantInfo.name}</h2>
      <div className={styles.tabsPanel}>
        <Tab path={"menu"} text={"Menu"} />
        <Tab path={"reviews"} text={"Reviews"} />
      </div>
      <Outlet />
    </div>
  );
};
