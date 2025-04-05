import { useSelector } from "react-redux";
import { Button } from "../button/button";
import { selectRestaurantById } from "../redux/entities/restaurant/slice";

export const RestaurantTab = ({ id, isActive, onClick }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );

  if (!restaurantInfo) {
    return null;
  }

  return (
    <Button label={restaurantInfo.name} onClick={onClick} active={isActive} />
  );
};
