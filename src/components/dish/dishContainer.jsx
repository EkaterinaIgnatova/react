import { useSelector } from "react-redux";
import { getDishById } from "../redux/entities/dish/slice";
import { Dish } from "./dish";

export const DishContainer = ({ id, allowChangePrice = false }) => {
  const dishInfo = useSelector((state) => getDishById(state, id));

  if (!dishInfo) {
    return null;
  }

  return (
    <Dish dishInfo={dishInfo} id={id} allowChangePrice={allowChangePrice} />
  );
};
