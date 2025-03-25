import classNames from "classnames";
import styles from "./rating.module.css";

export const Rating = ({ currentRating, maxRating }) => {
  let stars = [];
  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <i
        className={classNames("fa-solid fa-star", styles.icon, {
          [styles.active]: i < currentRating,
        })}
      ></i>
    );
  }

  return stars;
};
