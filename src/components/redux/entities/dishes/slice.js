import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { getDishById } from "./getDishById";

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: "dishes",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (bulder) => {
    bulder
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setMany(state, payload);
      })
      .addCase(getDishById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      });
  },
});

export const selectDishSlice = (state) => state.dishes;

export const { selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishSlice);
