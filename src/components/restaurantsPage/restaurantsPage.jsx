import { useState } from "react";
import { RestaurantTab } from "../restaurantTab/restaurantTab";
import styles from "./restaurantsPage.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../redux/entities/restaurant/slice";
import { RestaurantContainer } from "../restaurant/restaurantContainer";
import { Cart } from "../cart/cart";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const [selectedRestaurant, selectRestaurant] = useState(restaurantsIds[0]);

  return (
    <>
      <div className={styles.tabsPanel}>
        {restaurantsIds.map((id) => (
          <RestaurantTab
            key={id}
            id={id}
            isActive={selectedRestaurant === id}
            onClick={() => selectRestaurant(id)}
          />
        ))}
      </div>
      <RestaurantContainer id={selectedRestaurant} />
      <Cart />
    </>
  );
};
