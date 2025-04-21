import Skeleton from "react-loading-skeleton";
import { DishItem } from "../dishItem/dishItem";
import styles from "./menu.module.css";

export const Menu = ({ restaurantMenu, isLoading }) => {
  const arrayForSkeletons = new Array(3).fill(null);

  if (isLoading) {
    return (
      <div className={styles.root}>
        {arrayForSkeletons.map(() => (
          <div className={styles.skeletonWrapper}>
            <Skeleton height={30} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {restaurantMenu?.map(({ id, name, price }) => (
        <DishItem key={id} id={id} name={name} price={price} />
      ))}
    </div>
  );
};
