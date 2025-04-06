import { ReviewContainer } from "../review/reviewContainer";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviews.module.css";

export const Reviews = ({ restaurantInfo }) => {
  return (
    <>
      <h3>Reviews</h3>
      {restaurantInfo.reviews?.length ? (
        <ul className={styles.root}>
          {restaurantInfo.reviews.map((id) => (
            <li className={styles.review} key={id}>
              <ReviewContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
      <ReviewForm className={styles.form} />
    </>
  );
};
