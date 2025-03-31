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
    getDishById: (state, id) => state.entities[id],
  },
});

export const { getDishById } = dishSlice.selectors;
