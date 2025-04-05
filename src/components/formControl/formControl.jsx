import styles from "./formControl.module.css";

export const FormControl = ({ label, children }) => {
  return (
    <div className={styles.root}>
      <span>{label}</span>
      {children}
    </div>
  );
};
