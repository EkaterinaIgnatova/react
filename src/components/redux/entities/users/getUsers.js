import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersTotal } from "./slice";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { isRejectedWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users");
    const result = await response.json();

    if (!result.length) {
      isRejectedWithValue("No data");
      return;
    }

    return result;
  },
  {
    condition: (_, { getState }) => {
      return !selectUsersTotal(getState());
    },
  }
);
