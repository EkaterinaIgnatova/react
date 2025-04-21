import { Dish } from "./dish";
import { useGetDishByIdQuery } from "../redux/services/api";

export const DishContainer = ({ id }) => {
  const { data, isLoading, isError } = useGetDishByIdQuery(id);

  if (isError) {
    return <p>Dish is not found</p>;
  }

  return <Dish dishInfo={data} id={id} isLoading={isLoading} />;
};
