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
  const { auth } = use(AuthContext);

  if (!auth.isUserAuth || !cartState) {
    return null;
  }

  if (!cartState.length) {
    return (
      <div>
        <h2 className={styles.title}>Cart</h2>
        <p>Cart is empty</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className={styles.title}>Cart</h2>
      <div>
        {cartState.map((dish) => (
          <DishItemContainer key={dish.id} id={dish.id} allowChangePrice />
        ))}
      </div>
      <div className={styles.total}>
        <span>Total</span>
        <span>{totalPrice + "$"}</span>
      </div>
    </div>
  );
};
