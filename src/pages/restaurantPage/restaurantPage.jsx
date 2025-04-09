import { useParams } from "react-router";
import { RestaurantContainer } from "../../components/restaurant/restaurantContainer";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantContainer id={restaurantId} />;
};
