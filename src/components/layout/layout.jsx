import { useRef } from "react";
import { ProgressBar } from "../progressBar/progressBar";
import "./layout.css";

export const Layout = ({ children }) => {
  const layoutRef = useRef(null);

  return (
    <div className="layout" ref={layoutRef}>
      <ProgressBar layoutRef={layoutRef} />
      <header>
        <h1>Restourants</h1>
      </header>
      <div className="content">{children}</div>
      <footer>
        <span>best-rest@gmail.com</span>
      </footer>
    </div>
  );
};
