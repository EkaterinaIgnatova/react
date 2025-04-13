import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./restaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { Outlet } from "react-router";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants";
import { useRequest } from "../redux/hooks/useRequest";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants);

  const arrayForSkeletons = [null, null, null];

  if (requestStatus === "rejected") {
    return <p>No restaurants</p>;
  }

  return (
    <div>
      <div className={styles.tabsPanel}>
        {requestStatus === "pending"
          ? arrayForSkeletons.map((id) => <RestaurantTab id={id} />)
          : restaurantsIds.map((id) => <RestaurantTab key={id} id={id} />)}
      </div>
      <Outlet />
    </div>
  );
};
