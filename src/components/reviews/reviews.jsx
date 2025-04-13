import { ReviewContainer } from "../review/reviewContainer";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviews.module.css";

export const Reviews = ({ restaurantInfo, requestStatuses }) => {
  const arrayForSkeletons = [null, null, null];

  return (
    <div className={styles.root}>
      <div>
        <h3>Reviews</h3>
        {requestStatuses.reviews === "rejected" ? (
          <p>No reviews</p>
        ) : (
          <div className={styles.reviewsList}>
            {requestStatuses.reviews === "pending"
              ? arrayForSkeletons.map((id) => <ReviewContainer id={id} />)
              : restaurantInfo?.reviews.map((id) => (
                  <ReviewContainer key={id} id={id} />
                ))}
          </div>
        )}
      </div>
      <ReviewForm className={styles.form} />
    </div>
  );
};
