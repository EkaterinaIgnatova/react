import { useState } from "react";
import { Tab } from "../tab/tab";
import styles from "./restaurantsPage.module.css";
import { useSelector } from "react-redux";
import { getRestaurantsIds } from "../redux/entities/restaurant/slice";
import { RestaurantContainer } from "../restaurant/restaurantContainer";
import { Cart } from "../cart/cart";

export const RestaurantsPage = () => {
  const restaurantsIds = useSelector(getRestaurantsIds);
  const [selectedRestaurant, selectRestaurant] = useState(restaurantsIds[0]);

  return (
    <>
      <div className={styles.tabsPanel}>
        {restaurantsIds.map((id) => (
          <Tab
            key={id}
            id={id}
            isActive={selectedRestaurant === id}
            onClick={() => selectRestaurant(id)}
          ></Tab>
        ))}
      </div>
      <RestaurantContainer id={selectedRestaurant} />
      <Cart />
    </>
  );
};
