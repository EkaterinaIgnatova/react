import { ReviewContainer } from "../review/reviewContainer";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviews.module.css";

export const Reviews = ({ restaurantInfo }) => {
  return (
    <div className={styles.root}>
      <div>
        <h3>Reviews</h3>
        {restaurantInfo.reviews?.length ? (
          <ul className={styles.reviewsList}>
            {restaurantInfo.reviews.map((id) => (
              <li className={styles.review} key={id}>
                <ReviewContainer id={id} />
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews</p>
        )}
      </div>
      <ReviewForm className={styles.form} />
    </div>
  );
};
