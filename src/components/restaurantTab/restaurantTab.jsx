import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Tab } from "../tab/tab";

export const RestaurantTab = ({ id }) => {
  const restaurantInfo = id
    ? useSelector((state) => selectRestaurantById(state, id))
    : null;

  return <Tab path={id + "/menu"} text={restaurantInfo?.name} />;
};
