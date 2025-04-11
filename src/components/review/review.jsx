import { Rating } from "../rating/rating";

const MAX_RATING = 5;

export const Review = ({ reviewInfo, user }) => {
  return (
    <>
      <h4>{user?.name}</h4>
      <Rating currentRating={reviewInfo.rating} maxRating={MAX_RATING} />
      <p>{reviewInfo.text}</p>
    </>
  );
};
