import { useSelector } from "react-redux";
import { selectCartState } from "../redux/entities/cart/slice";
import { DishContainer } from "../dish/dishContainer";
import styles from "./cart.module.css";
import { use } from "react";
import { AuthContext } from "../authContext/authContext";

export const Cart = () => {
  const cartState = useSelector(selectCartState);
  const { user } = use(AuthContext);

  if (!user || !cartState) {
    return null;
  }

  return (
    <>
      <h3>Cart</h3>
      {cartState.length ? (
        <ul>
          {cartState.map((dish) => (
            <li key={dish.id} className={styles.cartItem}>
              <DishContainer id={dish.id} allowChangePrice />
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
    </>
  );
};
