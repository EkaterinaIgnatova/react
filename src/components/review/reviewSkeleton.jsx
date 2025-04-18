import Skeleton from "react-loading-skeleton";
import { Rating } from "../rating/rating";
import styles from "./review.module.css";

export const ReviewSkeleton = () => {
  return (
    <div className={styles.root}>
      <h4>
        <Skeleton />
      </h4>
      <Rating currentRating={0} />
      <p>
        <Skeleton />
      </p>
    </div>
  );
};
