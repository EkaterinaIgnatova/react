import { useParams } from "react-router";
import { ReviewsContainer } from "../../components/reviews/reviewsContainer";

export const ReviewsPage = () => {
  const { restaurantId } = useParams();

  return <ReviewsContainer id={restaurantId} />;
};
