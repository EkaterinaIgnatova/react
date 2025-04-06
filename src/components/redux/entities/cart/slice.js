import { createSelector, createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
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

const selectCartSlice = (state) => state.cartSlice;

export const selectCartState = createSelector([selectCartSlice], (cartState) =>
  Object.keys(cartState).map((id) => {
    return { id, count: cartState[id] };
  })
);
