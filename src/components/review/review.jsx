import Skeleton from "react-loading-skeleton";
import { Rating } from "../rating/rating";
import styles from "./review.module.css";

const MAX_RATING = 5;

export const Review = ({ reviewInfo, user }) => {
  return (
    <div className={styles.root}>
      <h4>{user?.name || <Skeleton width={100} />}</h4>
      <Rating currentRating={reviewInfo?.rating || 0} maxRating={MAX_RATING} />
      <p>{reviewInfo?.text || <Skeleton />}</p>
    </div>
  );
};
