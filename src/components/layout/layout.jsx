import { useRef } from "react";
import { ProgressBar } from "../progressBar/progressBar";
import styles from "./layout.module.css";

export const Layout = ({ children }) => {
  const layoutRef = useRef(null);

  return (
    <div className={styles.root} ref={layoutRef}>
      <ProgressBar layoutRef={layoutRef} />
      <header className={styles.header}>
        <h1>Restourants</h1>
      </header>
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <span>best-rest@gmail.com</span>
      </footer>
    </div>
  );
};
