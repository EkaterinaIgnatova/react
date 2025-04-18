import { useSelector } from "react-redux";
import { selectDishById } from "../redux/entities/dishes/slice";
import { Dish } from "./dish";
import { getDishById } from "../redux/entities/dishes/getDishById";
import { useRequest } from "../redux/hooks/useRequest";
import { REQUEST_STATUS_REJECTED } from "../redux/constants";

export const DishContainer = ({ id }) => {
  const dishInfo = useSelector((state) => selectDishById(state, id));
  const requestStatus = useRequest(getDishById, id);

  if (requestStatus === REQUEST_STATUS_REJECTED) {
    return <p>Dish is not found</p>;
  }

  return <Dish dishInfo={dishInfo} id={id} requestStatus={requestStatus} />;
};
