import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../assets/normalized-mock";

const initialState = {
  entities: normalizedRestaurants.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedRestaurants.map(({ id }) => id),
};

export const restaurantSlice = createSlice({
  name: "restaurantSlice",
  initialState,
  selectors: {
    getRestaurantsIds: (state) => state.ids,
    getRestaurantById: (state, id) => state.entities[id],
  },
});

export const { getRestaurantById, getRestaurantsIds } =
  restaurantSlice.selectors;
