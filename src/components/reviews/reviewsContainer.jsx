import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Reviews } from "./reviews";
import { useRequest } from "../redux/hooks/useRequest";
import { getReviews } from "../redux/entities/reviews/getReviews";
import { getUsers } from "../redux/entities/users/getUsers";
import { REQUEST_STATUS_REJECTED } from "../redux/constants";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviews.module.css";

export const ReviewsContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  const reviewsRequestStatus = useRequest(getReviews, id);
  const usersRequestStatus = useRequest(getUsers);

  if (
    reviewsRequestStatus === REQUEST_STATUS_REJECTED ||
    usersRequestStatus === REQUEST_STATUS_REJECTED
  ) {
    return (
      <div className={styles.container}>
        <div>
          <h3>Reviews</h3>
          <p>No reviews</p>
        </div>
        <ReviewForm className={styles.form} />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <h3>Reviews</h3>
        <Reviews
          restaurantInfo={restaurantInfo}
          reviewsRequestStatus={reviewsRequestStatus}
          usersRequestStatus={usersRequestStatus}
        />
      </div>
      <ReviewForm className={styles.form} />
    </div>
  );
};
