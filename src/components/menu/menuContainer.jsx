import { Menu } from "./menu";
import { useGetDishesQuery } from "../redux/services/api";

export const MenuContainer = ({ restaurantInfo }) => {
  const { data, isLoading, isError } = useGetDishesQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data?.filter((el) => restaurantInfo?.menu.includes(el.id)),
    }),
  });

  return (
    <div>
      <h3>Menu</h3>
      {isError ? (
        <p>No dishes</p>
      ) : (
        <Menu restaurantMenu={data} isLoading={isLoading} />
      )}
    </div>
  );
};
