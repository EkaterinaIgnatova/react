import { Menu } from "./menu";
import { useGetDishesQuery } from "../redux/services/api";

export const MenuContainer = ({ restaurantInfo }) => {
  const { data, isLoading, isError } = useGetDishesQuery(undefined, {
    selectFromResult: (res) => ({
      ...res,
      data: res.data?.filter((el) => restaurantInfo?.menu.includes(el.id)),
    }),
  });

  if (isError) {
    return (
      <div>
        <h3>Menu</h3>
        <p>No dishes</p>
      </div>
    );
  }

  return (
    <div>
      <h3>Menu</h3>
      <Menu restaurantMenu={data} isLoading={isLoading} />
    </div>
  );
};
