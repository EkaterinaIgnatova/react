import { useCallback, useEffect, useState } from "react";
import {
  addToCart,
  selectCountByDihId,
  removeFromCart,
} from "../redux/entities/cart/slice";
import { useDispatch, useSelector } from "react-redux";

export const useCounter = (onCountChange, id) => {
  const count = useSelector((state) => selectCountByDihId(state, id)) || 0;
  const dispatch = useDispatch();

  const increaseCount = useCallback(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  const decreaseCount = useCallback(() => {
    dispatch(removeFromCart(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (onCountChange) onCountChange(count);
  }, [count]);

  return { count, increaseCount, decreaseCount };
};
