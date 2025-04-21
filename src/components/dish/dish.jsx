import Skeleton from "react-loading-skeleton";
import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dish.module.css";

export const Dish = ({ dishInfo, id, isLoading }) => {
  const arrayForSkeletons = new Array(3).fill(null);

  if (isLoading) {
    return (
      <div>
        <h2 className={styles.title}>
          {dishInfo?.name || <Skeleton width={200} />}
        </h2>
        <div className={styles.dishInfo}>
          <div>
            <h3>Ingredients</h3>
            <div>
              {arrayForSkeletons.map(() => (
                <div className={styles.skeletonWrapper}>
                  <Skeleton height={30} />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.price}>
            <h3>Price</h3>
            {dishInfo ? (
              <div className={styles.counter}>
                <DishCounter id={id} />
                <b>{dishInfo.price + "$"}</b>
              </div>
            ) : (
              <Skeleton width={100} height={30} />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.title}>
        {dishInfo?.name || <Skeleton width={200} />}
      </h2>
      <div className={styles.dishInfo}>
        <div>
          <h3>Ingredients</h3>
          <div>
            {dishInfo?.ingredients.map((ingredient) => (
              <div className={styles.ingredient}>{ingredient}</div>
            ))}
          </div>
        </div>
        <div className={styles.price}>
          <h3>Price</h3>
          {dishInfo ? (
            <div className={styles.counter}>
              <DishCounter id={id} />
              <b>{dishInfo.price + "$"}</b>
            </div>
          ) : (
            <Skeleton width={100} height={30} />
          )}
        </div>
      </div>
    </div>
  );
};
