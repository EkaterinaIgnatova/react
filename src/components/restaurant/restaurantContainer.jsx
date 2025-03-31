import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { getRestaurantById } from "../redux/entities/restaurant/slice";

export const RestaurantContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) => getRestaurantById(state, id));

  if (!restaurantInfo) {
    return null;
  }

  return <Restaurant restaurantInfo={restaurantInfo} />;
};
