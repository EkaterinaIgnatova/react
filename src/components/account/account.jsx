import { use } from "react";
import { AuthContext } from "../authContext/authContext";
import styles from "./account.module.css";

export const Account = () => {
  const { user } = use(AuthContext);

  if (!user) {
    return null;
  }

  return (
    <div className={styles.root}>
      <i className="fa-solid fa-user"></i>
      <span>{user.name}</span>
    </div>
  );
};
