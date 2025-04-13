import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useRequest } from "../redux/hooks/useRequest";
import { getRestaurantById } from "../redux/entities/restaurants/getRestaurantById";

export const RestaurantContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );
  const requestStatus = useRequest(getRestaurantById, id);

  if (requestStatus === "rejected") {
    return <p>Restaurant is not found</p>;
  }

  return <Restaurant restaurantInfo={restaurantInfo} />;
};
