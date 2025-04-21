import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./restaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurants/slice";
import { Outlet } from "react-router";
import { getRestaurants } from "../redux/entities/restaurants/getRestaurants";
import { useRequest } from "../redux/hooks/useRequest";
import {
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../redux/constants";
import Skeleton from "react-loading-skeleton";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const requestStatus = useRequest(getRestaurants);

  const arrayForSkeletons = new Array(3).fill(null);

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <p>No restaurants</p>;
  }

  if (requestStatus === REQUEST_STATUS_PENDING) {
    return (
      <div>
        <div className={styles.tabsPanel}>
          {arrayForSkeletons.map(() => (
            <Skeleton width={100} height={34} />
          ))}
        </div>
        <Outlet />
      </div>
    );
  }

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
