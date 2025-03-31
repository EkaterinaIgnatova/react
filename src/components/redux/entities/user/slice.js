import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../assets/normalized-mock";

const initialState = {
  entities: normalizedUsers.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedUsers.map(({ id }) => id),
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  selectors: {
    getUserById: (state, id) => state.entities[id],
  },
});

export const { getUserById } = userSlice.selectors;
