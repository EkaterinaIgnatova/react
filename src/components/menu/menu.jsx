import { DishItemContainer } from "../dishItem/dishItemContainer";
import styles from "./menu.module.css";

export const Menu = ({ restaurantInfo, requestStatus }) => {
  const arrayForSkeletons = [null, null, null];

  return (
    <div>
      <h3>Menu</h3>
      {requestStatus === "rejected" ? (
        <p>No dishes</p>
      ) : (
        <div className={styles.dishesList}>
          {requestStatus === "pending"
            ? arrayForSkeletons.map((id) => <DishItemContainer id={id} />)
            : restaurantInfo?.menu.map((id) => (
                <DishItemContainer key={id} id={id} />
              ))}
        </div>
      )}
    </div>
  );
};
