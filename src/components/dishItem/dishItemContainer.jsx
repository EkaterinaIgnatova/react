import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice";
import { DishItem } from "./dishItem";

export const DishItemContainer = ({ id, allowChangePrice = false }) => {
  const dishInfo = useSelector((state) => selectDishById(state, id));

  return (
    <DishItem dishInfo={dishInfo} id={id} allowChangePrice={allowChangePrice} />
  );
};
