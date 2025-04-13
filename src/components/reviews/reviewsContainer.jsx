import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Reviews } from "./reviews";
import { useRequest } from "../redux/hooks/useRequest";
import { getReviews } from "../redux/entities/reviews/getReviews";
import { getUsers } from "../redux/entities/users/getUsers";

export const ReviewsContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  const requestStatuses = {
    reviews: useRequest(getReviews, id),
    users: useRequest(getUsers),
  };

  return (
    <Reviews
      restaurantInfo={restaurantInfo}
      requestStatuses={requestStatuses}
    />
  );
};
