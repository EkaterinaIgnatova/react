import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dish/slice";
import { DishItem } from "./dishItem";

export const DishItemContainer = ({ id, allowChangePrice = false }) => {
  const dishInfo = useSelector((state) => selectDishById(state, id));

  if (!dishInfo) {
    return null;
  }

  return (
    <DishItem dishInfo={dishInfo} id={id} allowChangePrice={allowChangePrice} />
  );
};
