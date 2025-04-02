import { useSelector } from "react-redux";
import { Review } from "./review";
import { selectReviewById } from "../redux/entities/review/slice";
import { selectUserById } from "../redux/entities/user/slice";

export const ReviewContainer = ({ id }) => {
  const reviewInfo = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) =>
    selectUserById(state, reviewInfo?.userId)
  );

  if (!reviewInfo) {
    return null;
  }

  return <Review reviewInfo={reviewInfo} user={user} />;
};
