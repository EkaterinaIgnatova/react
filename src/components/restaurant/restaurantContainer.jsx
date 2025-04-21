import { useSelector } from "react-redux";
import { Restaurant } from "./restaurant";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { useRequest } from "../redux/hooks/useRequest";
import { getRestaurantById } from "../redux/entities/restaurants/getRestaurantById";
import { REQUEST_STATUS_REJECTED } from "../redux/constants";

export const RestaurantContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );
  const requestStatus = useRequest(getRestaurantById, id);

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <p>Restaurant is not found</p>;
  }

  return <Restaurant restaurantInfo={restaurantInfo} />;
};
