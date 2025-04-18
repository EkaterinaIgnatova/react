import { REQUEST_STATUS_PENDING } from "../redux/constants";
import { ReviewContainer } from "../review/reviewContainer";
import styles from "./reviews.module.css";
import { ReviewSkeleton } from "../review/reviewSkeleton";

export const Reviews = ({
  restaurantInfo,
  reviewsRequestStatus,
  usersRequestStatus,
}) => {
  const arrayForSkeletons = new Array(3).fill(null);

  if (
    reviewsRequestStatus === REQUEST_STATUS_PENDING ||
    usersRequestStatus === REQUEST_STATUS_PENDING
  ) {
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
      {restaurantInfo?.reviews.map((id) => (
        <ReviewContainer key={id} id={id} />
      ))}
    </div>
  );
};
