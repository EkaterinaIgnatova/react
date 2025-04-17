import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
  tagTypes: ["Review"],
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => "/restaurants",
    }),
    getDishes: builder.query({
      query: () => "/dishes",
    }),
    getDishesByRestaurantId: builder.query({
      query: (restaurantId) => `/dishes?restaurantId=${restaurantId}`,
    }),
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `/reviews?restaurantId=${restaurantId}`,
      providesTags: (result, error, arg) =>
        result
          ? [...result.map(({ id }) => ({ type: "Review", id })), "Review"]
          : ["Review"],
    }),
    getUsers: builder.query({
      query: () => "/users",
    }),
    getDishById: builder.query({
      query: (id) => `/dish/${id}`,
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => ({
        url: `/review/${restaurantId}`,
        body: review,
        method: "POST",
      }),
      invalidatesTags: ["Review"],
    }),
    editReview: builder.mutation({
      query: ({ id, review }) => ({
        url: `/review/${id}`,
        body: review,
        method: "PATCH",
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Review", id }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetDishesQuery,
  useGetDishesByRestaurantIdQuery,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
  useGetDishByIdQuery,
  useAddReviewMutation,
  useEditReviewMutation,
} = api;
