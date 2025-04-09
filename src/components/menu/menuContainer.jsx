import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Menu } from "./menu";

export const MenuContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  if (!restaurantInfo) {
    return null;
  }

  return <Menu restaurantInfo={restaurantInfo} />;
};
