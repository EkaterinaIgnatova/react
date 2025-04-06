import { DishContainer } from "../dish/dishContainer";
import styles from "./menu.module.css";

export const Menu = ({ restaurantInfo }) => {
  return (
    <>
      <h3>Menu</h3>
      {restaurantInfo.menu?.length ? (
        <ul className={styles.root}>
          {restaurantInfo.menu.map((id) => (
            <li className={styles.dish} key={id}>
              <DishContainer id={id} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Menu is empty</p>
      )}
    </>
  );
};
