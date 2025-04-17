import { DishItem } from "../dishItem/dishItem";

export const Cart = ({ dishes }) => {
  return (
    <div>
      {dishes?.map(({ id, name, price }) => (
        <DishItem key={id} id={id} name={name} price={price} allowChangePrice />
      ))}
    </div>
  );
};
