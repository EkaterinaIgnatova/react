import { useRef } from "react";
import { ProgressBar } from "../progressBar/progressBar";
import { Header } from "../header/header";
import styles from "./layout.module.css";
import { Outlet } from "react-router";
import { Cart } from "../cart/cart";

export const Layout = ({ children }) => {
  const layoutRef = useRef(null);

  return (
    <div className={styles.root} ref={layoutRef}>
      <ProgressBar layoutRef={layoutRef} />
      <Header />
      <div className={styles.content}>
        <Outlet />
        <Cart />
      </div>
      <footer className={styles.footer}>
        <span>best-rest@gmail.com</span>
      </footer>
    </div>
  );
};
