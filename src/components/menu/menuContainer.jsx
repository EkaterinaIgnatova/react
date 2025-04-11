import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Menu } from "./menu";
import { getDishes } from "../redux/entities/dishes/getDishes";
import { useRequest } from "../redux/hooks/useRequest";

export const MenuContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );
  const requestStatus = useRequest(getDishes, id);

  if (!restaurantInfo) {
    return null;
  }

  return <Menu restaurantInfo={restaurantInfo} />;
};
