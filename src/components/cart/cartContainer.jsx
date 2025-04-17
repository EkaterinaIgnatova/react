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

  return (
    <div>
      <h2 className={styles.title}>Cart</h2>
      {isError || !Object.keys(cartState).length ? (
        <p>Cart is empty</p>
      ) : (
        <Cart dishes={data} />
      )}
      <CartTotal state={cartState} data={data} />
    </div>
  );
};
