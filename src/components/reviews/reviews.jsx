import { Review } from "../review/review";
import { ReviewSkeleton } from "../review/reviewSkeleton";
import styles from "./reviews.module.css";

export const Reviews = ({ restaurantReviews, isLoading, onEdit }) => {
  const arrayForSkeletons = new Array(3).fill(null);

  if (isLoading) {
    return (
      <div className={styles.root}>
        {arrayForSkeletons.map(() => (
          <ReviewSkeleton />
        ))}
      </div>
    );
  }

  return (
    <div className={styles.root}>
      {restaurantReviews?.map((review) => (
        <Review key={review.id} reviewInfo={review} onEdit={onEdit} />
      ))}
    </div>
  );
};
