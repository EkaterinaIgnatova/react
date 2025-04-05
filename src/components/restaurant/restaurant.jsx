import { DishContainer } from "../dish/dishContainer";
import { ReviewContainer } from "../review/reviewContainer";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurantInfo }) => {
  return (
    <div>
      <h2 className={styles.name}>{restaurantInfo.name}</h2>
      <h3>Menu</h3>
      {restaurantInfo.menu?.length ? (
        <ul className={styles.dishesList}>
          {restaurantInfo.menu.map((id) => (
            <li className={styles.dishItem} key={id}>
              <DishContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Menu is empty</p>
      )}
      <h3>Reviews</h3>
      {restaurantInfo.reviews?.length ? (
        <ul className={styles.reviewsList}>
          {restaurantInfo.reviews.map((id) => (
            <li className={styles.reviewItem} key={id}>
              <ReviewContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews</p>
      )}
      <ReviewForm className={styles.reviewForm} />
    </div>
  );
};
