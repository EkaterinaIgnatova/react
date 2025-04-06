import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurant/slice";
import { Reviews } from "./reviews";

export const ReviewsContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  if (!restaurantInfo) {
    return null;
  }

  return <Reviews restaurantInfo={restaurantInfo} />;
};
