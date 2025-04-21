import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const { data, isError } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data?.find((el) => el.id === id),
    }),
  });

  if (isError) {
    return <p>Restaurant is not found</p>;
  }

  return <Restaurant restaurantInfo={data} />;
};
