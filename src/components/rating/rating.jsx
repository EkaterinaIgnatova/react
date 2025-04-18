import classNames from "classnames";
import styles from "./rating.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MAX_RATING = 5;

export const Rating = ({ currentRating }) => {
  let stars = [];
  for (let i = 0; i < MAX_RATING; i++) {
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
