import { Review } from "../review/review";
import { ReviewSkeleton } from "../review/reviewSkeleton";
import styles from "./reviews.module.css";

export const Reviews = ({ restaurantReviews, isLoading, onEdit }) => {
  const arrayForSkeletons = new Array(3).fill(null);

  return (
    <div className={styles.root}>
      {isLoading
        ? arrayForSkeletons.map(() => <ReviewSkeleton />)
        : restaurantReviews?.map((review) => (
            <Review key={review.id} reviewInfo={review} onEdit={onEdit} />
          ))}
    </div>
  );
};
