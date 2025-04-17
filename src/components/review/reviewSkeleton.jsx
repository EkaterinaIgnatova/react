import Skeleton from "react-loading-skeleton";
import { Rating } from "../rating/rating";
import styles from "./review.module.css";
import { UserContainer } from "../user/userContainer";

export const ReviewSkeleton = () => {
  return (
    <div className={styles.root}>
      <UserContainer />
      <Rating currentRating={0} />
      <div className={styles.skeletonWrapper}>
        <Skeleton />
      </div>
    </div>
  );
};
