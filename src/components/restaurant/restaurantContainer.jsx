import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { selectRestaurantById } from "../redux/entities/restaurant/slice";

export const RestaurantContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  if (!restaurantInfo) {
    return null;
  }

  return <Restaurant restaurantInfo={restaurantInfo} />;
};
