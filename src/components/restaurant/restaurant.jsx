import { Dish } from "../dish/dish";
import { Review } from "../review/review";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurantInfo }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.name}>{restaurantInfo.name}</h2>
      <h3>Menu</h3>
      {restaurantInfo.menu?.length ? (
        <ul className={styles.dishesList}>
          {restaurantInfo.menu.map((dish) => (
            <li className={styles.dishItem} key={dish.id}>
              <Dish dishInfo={dish} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Menu is empty</p>
      )}
      <h3>Reviews</h3>
      {restaurantInfo.reviews?.length ? (
        <ul className={styles.reviewsList}>
          {restaurantInfo.reviews.map((review) => (
            <li className={styles.reviewItem} key={review.id}>
              <Review reviewInfo={review} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
      <h3>Leave feedback</h3>
      <ReviewForm className={styles.reviewForm} />
    </div>
  );
};
