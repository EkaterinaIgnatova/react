import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";
import { Menu } from "./menu";
import { getDishes } from "../redux/entities/dishes/getDishes";
import { useRequest } from "../redux/hooks/useRequest";
import { REQUEST_STATUS_REJECTED } from "../redux/constants";

export const MenuContainer = ({ id }) => {
  const restaurantInfo = useSelector((state) =>
    selectRestaurantById(state, id)
  );
  const requestStatus = useRequest(getDishes, id);

  if (requestStatus === REQUEST_STATUS_REJECTED) {
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
      <Menu restaurantInfo={restaurantInfo} requestStatus={requestStatus} />
    </div>
  );
};
