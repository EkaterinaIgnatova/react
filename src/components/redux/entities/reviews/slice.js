import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "reviews",
  initialState: entityAdapter.getInitialState(),
  extraReducers: (bulder) => {
    bulder.addCase(getReviews.fulfilled, (state, { payload }) => {
      entityAdapter.setMany(state, payload);
    });
  },
});

export const selectReviewSlice = (state) => state.reviews;

export const { selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewSlice);
