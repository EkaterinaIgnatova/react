import { ToggleTheme } from "../toggleTheme/toggleTheme";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.root}>
      <h1>Restourants</h1>
      <div>
        <ToggleTheme></ToggleTheme>
      </div>
    </div>
  );
};
