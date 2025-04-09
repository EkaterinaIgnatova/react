import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectDishSlice } from "../dishes/slice";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {},
  selectors: {
    selectCountByDishId: (state, id) => state[id],
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state[payload] = (state[payload] || 0) + 1;
    },
    removeFromCart: (state, { payload }) => {
      if (state[payload]) {
        state[payload] = state[payload] - 1;
        if (state[payload] === 0) delete state[payload];
      }
    },
  },
});

export const { selectCountByDishId } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;

const selectCartSlice = (state) => state.cart;

export const selectCartState = createSelector([selectCartSlice], (cartState) =>
  Object.keys(cartState).map((id) => {
    return { id, count: cartState[id] };
  })
);

export const selectTotalPrice = createSelector(
  [selectCartSlice, selectDishSlice],
  (cartState, dishState) => {
    return Object.keys(cartState).reduce((acc, current) => {
      return acc + dishState.entities[current].price * cartState[current];
    }, 0);
  }
);
