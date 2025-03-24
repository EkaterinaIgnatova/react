import styles from "./button.module.css";

export const Button = ({ label, onClick }) => {
  return (
    <button className={styles.root} onClick={onClick}>
      {label}
    </button>
  );
};
