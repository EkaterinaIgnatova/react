import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Tab } from "../tab/tab";

export const RestaurantTab = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  if (!restaurantInfo) {
    return null;
  }

  return <Tab path={id + "/menu"} text={restaurantInfo.name} />;
};
