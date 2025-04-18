import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./slice";

export const getRestaurantById = createAsyncThunk(
  "restaurants/getRestaurantById",
  async (id, { isRejectedWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/restaurant/${id}`);
    const result = await response.json();

    if (!result) {
      isRejectedWithValue("No data");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectRestaurantById(getState(), id);
    },
  }
);
