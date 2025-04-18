import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./getUsers";

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: "users",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (bulder) => {
    bulder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});

export const selecUserSlice = (state) => state.users;

export const { selectById: selectUserById, selectTotal: selectUsersTotal } =
  entityAdapter.getSelectors(selecUserSlice);
