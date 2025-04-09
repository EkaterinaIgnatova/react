import { DishCounter } from "../dishCounter/dishCounter";
import styles from "./dish.module.css";

export const Dish = ({ dishInfo, id }) => {
  return (
    <div>
      <h2 className={styles.title}>{dishInfo.name}</h2>
      <div className={styles.dishInfo}>
        <div>
          <h3>Ingredients</h3>
          <ul>
            {dishInfo.ingredients.map((ingredient) => (
              <li className={styles.ingredient}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className={styles.price}>
          <h3>Price</h3>
          <div className={styles.counter}>
            <DishCounter id={id} />
            <b>{dishInfo.price + "$"}</b>
          </div>
        </div>
      </div>
    </div>
  );
};
