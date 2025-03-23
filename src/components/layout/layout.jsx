import "./layout.css";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
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
