import { Account } from "../account/account";
import { ToggleAuth } from "../toggleAuth/toggleAuth";
import { ToggleTheme } from "../toggleTheme/toggleTheme";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.root}>
      <h1>Restourants</h1>
      <div className={styles.menu}>
        <Account />
        <div className={styles.actions}>
          <ToggleAuth />
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};
