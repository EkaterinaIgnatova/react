import { Restaurant } from "./restaurant";
import { useGetRestaurantsQuery } from "../redux/services/api";

export const RestaurantContainer = ({ id }) => {
  const { data } = useGetRestaurantsQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data?.find((el) => el.id === id),
    }),
  });

  return <Restaurant restaurantInfo={data} />;
};
