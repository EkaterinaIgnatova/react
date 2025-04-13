import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../redux/entities/reviews/slice";
import { selectUserById } from "../redux/entities/users/slice";

export const ReviewContainer = ({ id }) => {
  const reviewInfo = id
    ? useSelector((state) => selectReviewById(state, id))
    : null;
  const user = reviewInfo
    ? useSelector((state) => selectUserById(state, reviewInfo.userId))
    : null;

  return <Review reviewInfo={reviewInfo} user={user} />;
};
