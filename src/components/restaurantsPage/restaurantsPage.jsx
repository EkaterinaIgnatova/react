import { useState } from "react";
import { Restaurant } from "../restaurant/restaurant";
import "./restaurantsPage.css";

export const RestaurantsPage = ({ restaurantsList }) => {
  const [selectedRestaurant, selectRestaurant] = useState(
    restaurantsList[0].id
  );

  const restaurantInfo = restaurantsList.find(
    (rest) => rest.id === selectedRestaurant
  );

  return (
    <>
      <div className="tabs-panel">
        {restaurantsList.map(({ id, name }) => (
          <button
            className={selectedRestaurant === id ? "tab active-tab" : "tab"}
            onClick={() => selectRestaurant(id)}
          >
            {name}
          </button>
        ))}
      </div>
      <Restaurant restaurantInfo={restaurantInfo} />
    </>
  );
};
