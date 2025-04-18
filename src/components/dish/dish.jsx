import Skeleton from "react-loading-skeleton";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dish.module.css";
import { REQUEST_STATUS_PENDING } from "../redux/constants";

export const Dish = ({ dishInfo, id, requestStatus }) => {
  const arrayForSkeletons = new Array(3).fill(null);

  const checkStatus = (status) => {
    if (requestStatus === status) {
      return arrayForSkeletons.map(() => (
        <div className={styles.skeletonWrapper}>
          <Skeleton height={30} />
        </div>
      ));
    } else {
      return dishInfo?.ingredients.map((ingredient) => (
        <div className={styles.ingredient}>{ingredient}</div>
      ));
    }
  };

  return (
    <div>
      <h2 className={styles.title}>
        {dishInfo?.name || <Skeleton width={200} />}
      </h2>
      <div className={styles.dishInfo}>
        <div>
          <h3>Ingredients</h3>
          <div>{checkStatus(REQUEST_STATUS_PENDING)}</div>
        </div>
        <div className={styles.price}>
          <h3>Price</h3>
          <div className={styles.counter}>
            <DishCounter id={id} />
            <b>{dishInfo ? dishInfo.price + "$" : <Skeleton width={30} />}</b>
          </div>
        </div>
      </div>
    </div>
  );
};
