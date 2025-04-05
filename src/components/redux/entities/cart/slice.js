import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {},
  selectors: {
    selectCartState: (state) =>
      Object.keys(state).map((id) => {
        return { id, count: state[id] };
      }),
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

export const { selectCartState, selectCountByDishId } = cartSlice.selectors;
export const { addToCart, removeFromCart } = cartSlice.actions;
