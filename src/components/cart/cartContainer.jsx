import { useSelector } from "react-redux";
import { selectCartSlice } from "../redux/entities/cart/slice";
import styles from "./cart.module.css";
import { use } from "react";
import { AuthContext } from "../authContext/authContext";
import { Cart } from "./cart";
import { useGetDishesQuery } from "../redux/services/api";
import { CartTotal } from "../cartTotal/cartTotal";

export const CartContainer = () => {
  const cartState = useSelector(selectCartSlice);

  const { data, isError } = useGetDishesQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data?.filter((res) => Object.keys(cartState).includes(res.id)),
    }),
  });

  const { auth } = use(AuthContext);

  if (!auth.isUserAuth) {
    return null;
  }

  if (isError || !Object.keys(cartState).length) {
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
      <Cart dishes={data} />
      <CartTotal state={cartState} data={data} />
    </div>
  );
};
