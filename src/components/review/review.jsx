import { Rating } from "../rating/rating";
import styles from "./review.module.css";

export const Review = ({ reviewInfo, user }) => {
  return (
    <div className={styles.root}>
      <h4>{user?.name}</h4>
      <Rating currentRating={reviewInfo?.rating || 0} />
      <p>{reviewInfo?.text}</p>
    </div>
  );
};
