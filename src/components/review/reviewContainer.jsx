import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../redux/entities/reviews/slice";
import { selectUserById } from "../redux/entities/users/slice";

export const ReviewContainer = ({ id }) => {
  const reviewInfo = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) =>
    selectUserById(state, reviewInfo?.userId)
  );

  return <Review reviewInfo={reviewInfo} user={user} />;
};
