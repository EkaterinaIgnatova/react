import { DishItemContainer } from "../dishItem/dishItemContainer";
import styles from "./menu.module.css";

export const Menu = ({ restaurantInfo }) => {
  return (
    <div>
      <h3>Menu</h3>
      {restaurantInfo.menu?.length ? (
        <ul className={styles.root}>
          {restaurantInfo.menu.map((id) => (
            <li className={styles.dish} key={id}>
              <DishItemContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Menu is empty</p>
      )}
    </div>
  );
};
