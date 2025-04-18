import { use } from "react";
import { AuthContext } from "../authContext/authContext";
import styles from "./account.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Account = () => {
  const { auth } = use(AuthContext);

  if (!auth.isUserAuth) {
    return null;
  }

  return (
    <div className={styles.root}>
      <FontAwesomeIcon icon={faUser} />
      <span>{auth.user.name}</span>
    </div>
  );
};
