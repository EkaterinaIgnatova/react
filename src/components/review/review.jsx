import { Rating } from "../rating/rating";
import styles from "./review.module.css";
import { UserContainer } from "../user/userContainer";
import { Button } from "../button/button";
import { AuthContext } from "../authContext/authContext";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Review = ({ reviewInfo, onEdit }) => {
  const { auth } = use(AuthContext);

  return (
    <div className={styles.root}>
      {auth.user?.id === reviewInfo.userId && (
        <Button
          className={styles.editButton}
          rounded
          label={<FontAwesomeIcon icon={faPen} />}
          onClick={() => onEdit(reviewInfo)}
        />
      )}
      <UserContainer id={reviewInfo.userId} />
      <Rating currentRating={reviewInfo.rating || 0} />
      <p>{reviewInfo.text}</p>
    </div>
  );
};
