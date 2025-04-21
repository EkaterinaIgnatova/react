import Skeleton from "react-loading-skeleton";
import { DishItemContainer } from "../dishItem/dishItemContainer";
import { REQUEST_STATUS_PENDING } from "../redux/constants";
import styles from "./menu.module.css";

export const Menu = ({ restaurantInfo, requestStatus }) => {
  const arrayForSkeletons = new Array(3).fill(null);

  if (requestStatus === REQUEST_STATUS_PENDING) {
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
      {restaurantInfo?.menu.map((id) => (
        <DishItemContainer key={id} id={id} />
      ))}
    </div>
  );
};
