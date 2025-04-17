import styles from "./restaurantsPage.module.css";
import { Outlet } from "react-router";
import {
  useGetDishesQuery,
  useGetRestaurantsQuery,
} from "../redux/services/api";
import { Tab } from "../tab/tab";
import Skeleton from "react-loading-skeleton";

export const RestaurantsPage = () => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();
  const {} = useGetDishesQuery();

  const arrayForSkeletons = new Array(3).fill(null);

  if (isError) {
    return <p>No restaurants</p>;
  }

  return (
    <div>
      <div className={styles.tabsPanel}>
        {isLoading
          ? arrayForSkeletons.map(() => <Skeleton width={100} height={34} />)
          : data.map(({ id, name }) => (
              <Tab key={id} path={id + "/menu"} text={name} />
            ))}
      </div>
      <Outlet />
    </div>
  );
};
