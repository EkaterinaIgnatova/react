import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import { Tab } from "../tab/tab";
import styles from "./restaurantsPage.module.css";

export const RestaurantsPage = ({ restaurantsList }) => {
  const [selectedRestaurant, selectRestaurant] = useState(
    restaurantsList[0].id
  );

  const restaurantInfo = restaurantsList.find(
    (rest) => rest.id === selectedRestaurant
  );

  return (
    <>
      <div className={styles.tabsPanel}>
        {restaurantsList.map(({ id, name }) => (
          <Tab
            name={name}
            isActive={selectedRestaurant === id}
            onClick={() => selectRestaurant(id)}
          ></Tab>
        ))}
      </div>
      <Restaurant restaurantInfo={restaurantInfo} />
    </>
  );
};
