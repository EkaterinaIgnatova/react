import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";
import { getRestaurantById } from "./getRestaurantById";

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (bulder) => {
    bulder
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      })
      .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      });
  },
});

const selectRestaurantSlice = (state) => state.restaurants;

export const {
  selectIds: selectRestaurantsIds,
  selectById: selectRestaurantById,
  selectTotal: selectRestaurantsTotal,
} = entityAdapter.getSelectors(selectRestaurantSlice);
