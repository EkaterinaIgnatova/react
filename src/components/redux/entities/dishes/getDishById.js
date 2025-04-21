import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from "./slice";

export const getDishById = createAsyncThunk(
  "dishes/getDishById",
  async (id, { isRejectedWithValue }) => {
    const response = await fetch(`http://localhost:3001/api/dish/${id}`);
    const result = await response.json();

    if (!result) {
      isRejectedWithValue("No data");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      return !selectDishById(getState(), id);
    },
  }
);
