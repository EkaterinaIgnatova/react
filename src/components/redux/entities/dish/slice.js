import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../../../assets/normalized-mock";

const initialState = {
  entities: normalizedDishes.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedDishes.map(({ id }) => id),
};

export const dishSlice = createSlice({
  name: "dishSlice",
  initialState,
  selectors: {
    selectDishById: (state, id) => state.entities[id],
  },
});

export const { selectDishById } = dishSlice.selectors;
export const selectDishSlice = (state) => state.dishSlice;
