import { use } from "react";
import { AuthContext } from "../authContext/authContext";
import styles from "./account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Account = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.root}>
      <FontAwesomeIcon icon={faUser} />
      <span>{user.name}</span>
    </div>
  );
};
