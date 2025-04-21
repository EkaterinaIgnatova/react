import { Reviews } from "./reviews";
import {
  useAddReviewMutation,
  useEditReviewMutation,
  useGetReviewsByRestaurantIdQuery,
  useGetUsersQuery,
} from "../redux/services/api";
import { ReviewForm } from "../reviewForm/reviewForm";
import styles from "./reviews.module.css";
import React, { useRef, useState } from "react";

export const ReviewsContainer = ({ id }) => {
  const {
    data: reviewsData,
    isLoading: isReviewsLoading,
    isError: isReviewsError,
  } = useGetReviewsByRestaurantIdQuery(id);
  const { isLoading: isUsersLoading, isError: isUsersError } =
    useGetUsersQuery();

  const isLoading = isReviewsLoading || isUsersLoading;
  const isError = isUsersError || isReviewsError;

  const [addReview, { isLoading: isAddReviewLoading }] = useAddReviewMutation();
  const [editReview, { isLoading: isEditReviewLoading }] =
    useEditReviewMutation();

  const sendReview = (review) => {
    reviewToEdit
      ? editReview({ id: review.id, review })
      : addReview({ restaurantId: id, review });
    setReviewToEdit(null);
  };

  if (isError) {
    <div className={styles.container}>
      <div>
        <h3>Reviews</h3>
        <p>No reviews</p>
      </div>
      <ReviewForm
        ref={formRef}
        review={reviewToEdit}
        className={styles.form}
        onSubmit={sendReview}
        isLoading={isAddReviewLoading || isEditReviewLoading}
      />
    </div>;
  }

  const [reviewToEdit, setReviewToEdit] = useState();

  const startEditReview = (review) => {
    formRef.current.scrollIntoView();
    setReviewToEdit(review);
  };

  const formRef = useRef();

  return (
    <div className={styles.container}>
      <div>
        <h3>Reviews</h3>
        <Reviews
          restaurantReviews={reviewsData}
          isLoading={isLoading}
          onEdit={startEditReview}
        />
      </div>
      <ReviewForm
        ref={formRef}
        review={reviewToEdit}
        className={styles.form}
        onSubmit={sendReview}
        isLoading={isAddReviewLoading || isEditReviewLoading}
      />
    </div>
  );
};
