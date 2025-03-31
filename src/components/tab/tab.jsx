import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { getRestaurantById } from "../redux/entities/restaurant/slice";

export const Tab = ({ id, isActive, onClick }) => {
  const restaurantInfo = useSelector((state) => getRestaurantById(state, id));

  if (!restaurantInfo) {
    return null;
  }

  return (
    <Button label={restaurantInfo.name} onClick={onClick} active={isActive} />
  );
};
