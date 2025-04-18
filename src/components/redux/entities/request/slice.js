import { createSlice } from "@reduxjs/toolkit";
import {
  REQUEST_STATUS_FULFILLED,
  REQUEST_STATUS_IDLE,
  REQUEST_STATUS_PENDING,
  REQUEST_STATUS_REJECTED,
} from "../../constants";

export const requestSlice = createSlice({
  name: "requests",
  initialState: {},
  selectors: {
    selectRequestStatus: (state, id) => state[id] || REQUEST_STATUS_IDLE,
  },
  extraReducers: (builder) =>
    builder
      .addMatcher(
        ({ type }) => type.endsWith("pending"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_PENDING;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("rejected"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_REJECTED;
        }
      )
      .addMatcher(
        ({ type }) => type.endsWith("fulfilled"),
        (state, { meta }) => {
          state[meta.requestId] = REQUEST_STATUS_FULFILLED;
        }
      ),
});

export const { selectRequestStatus } = requestSlice.selectors;
