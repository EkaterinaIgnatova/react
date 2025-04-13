import { useSelector } from "react-redux";
import {
  selectCartState,
  selectTotalPrice,
} from "../redux/entities/cart/slice";
import { DishItemContainer } from "../dishItem/dishItemContainer";
import styles from "./cart.module.css";
import { use } from "react";
import { AuthContext } from "../authContext/authContext";

export const Cart = () => {
  const cartState = useSelector(selectCartState);
  const totalPrice = useSelector(selectTotalPrice);
  const { user } = use(AuthContext);

  if (!user || !cartState) {
    return null;
  }

  return (
    <div>
      <h2 className={styles.title}>Cart</h2>
      {cartState.length ? (
        <ul>
          {cartState.map((dish) => (
            <li key={dish.id} className={styles.item}>
              <DishItemContainer id={dish.id} allowChangePrice />
            </li>
          ))}
        </ul>
      ) : (
        <p>Cart is empty</p>
      )}
      <div className={styles.total}>
        <span>Total</span>
        <span>{totalPrice + "$"}</span>
      </div>
    </div>
  );
};
