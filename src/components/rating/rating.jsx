import classNames from "classnames";
import styles from "./rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const Rating = ({ currentRating, maxRating }) => {
  let stars = [];
  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        className={classNames(styles.icon, {
          [styles.active]: i < currentRating,
        })}
      />
    );
  }

  return stars;
};
