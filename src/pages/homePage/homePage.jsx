import { Link } from "react-router";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <h2>HomePage</h2>
      <Link to={"restaurants"} className={styles.link}>
        Go to restaurants
      </Link>
    </div>
  );
};
