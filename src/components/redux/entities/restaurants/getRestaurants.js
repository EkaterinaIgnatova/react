import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsTotal } from "./slice";

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (_, { isRejectedWithValue }) => {
    const response = await fetch("http://localhost:3001/api/restaurants");
    const result = await response.json();

    if (!result.length) {
      isRejectedWithValue("No data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectRestaurantsTotal(getState());
    },
  }
);
