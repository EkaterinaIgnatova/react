import Skeleton from "react-loading-skeleton";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dish.module.css";

export const Dish = ({ dishInfo, id, requestStatus }) => {
  const arrayForSkeletons = [null, null, null];

  return (
    <div>
      <h2 className={styles.title}>
        {dishInfo?.name || <Skeleton width={200} />}
      </h2>
      <div className={styles.dishInfo}>
        <div>
          <h3>Ingredients</h3>
          <ul>
            {(dishInfo?.ingredients || arrayForSkeletons).map((ingredient) => (
              <li className={styles.ingredient}>
                {ingredient || <Skeleton width={200} />}
              </li>
            ))}
          </ul>
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
