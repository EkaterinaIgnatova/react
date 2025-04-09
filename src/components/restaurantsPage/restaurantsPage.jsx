import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./restaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurant/slice";
import { Outlet } from "react-router";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);

  return (
    <div>
      <div className={styles.tabsPanel}>
        {restaurantsIds.map((id) => (
          <RestaurantTab key={id} id={id} />
        ))}
      </div>
      <Outlet />
    </div>
  );
};
