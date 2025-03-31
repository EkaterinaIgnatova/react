import { useCallback, useEffect, useState } from "react";
import {
  addToCart,
  getCountById,
  removeFromCart,
} from "../redux/entities/cart/slice";
import { useDispatch, useSelector } from "react-redux";

export const useCounter = (onCountChange, id) => {
  const count = useSelector((state) => getCountById(state, id)) || 0;
  const dispatch = useDispatch();

  const increaseCount = useCallback(() => {
    dispatch(addToCart(id));
  }, [dispatch, id]);

  const decreaseCount = useCallback(() => {
    dispatch(removeFromCart(id));
  }, [dispatch, id]);

  if (onCountChange)
    useEffect(() => {
      onCountChange(count);
    }, [count]);

  return { count, increaseCount, decreaseCount };
};
