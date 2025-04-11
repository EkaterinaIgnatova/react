import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice";
import { Dish } from "./dish";
import { getDishById } from "../redux/entities/dishes/getDishById";
import { useRequest } from "../redux/hooks/useRequest";

export const DishContainer = ({ id }) => {
  const dishInfo = useSelector((state) => selectDishById(state, id));

  const requestStatus = useRequest(getDishById, id);

  if (!dishInfo) {
    return null;
  }

  return <Dish dishInfo={dishInfo} id={id} />;
};
