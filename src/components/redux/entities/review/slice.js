import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../../../assets/normalized-mock";

const initialState = {
  entities: normalizedReviews.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {}),
  ids: normalizedReviews.map(({ id }) => id),
};

export const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  selectors: {
    getReviewById: (state, id) => state.entities[id],
  },
});

export const { getReviewById } = reviewSlice.selectors;
