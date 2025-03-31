import { useSelector } from "react-redux";
import { Review } from "./review";
import { getReviewById } from "../redux/entities/review/slice";
import { getUserById } from "../redux/entities/user/slice";

export const ReviewContainer = ({ id }) => {
  const reviewInfo = useSelector((state) => getReviewById(state, id));
  const user = useSelector((state) => getUserById(state, reviewInfo?.userId));

  if (!reviewInfo) {
    return null;
  }

  return <Review reviewInfo={reviewInfo} user={user} />;
};
