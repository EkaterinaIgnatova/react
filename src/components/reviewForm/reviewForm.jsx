import { useForm } from "./useForm";
import { FormControl } from "../formControl/formControl";
import { Button } from "../button/button";
import classNames from "classnames";
import styles from "./reviewForm.module.css";

export const ReviewForm = ({ className }) => {
  const { form, setName, setText, setRating, clearForm } = useForm();

  return (
    <div className={classNames(styles.root, className)}>
      <div className={styles.row}>
        <FormControl
          type={"input"}
          label={"Name"}
          value={form.name}
          onChange={(e) => setName(e.target.value)}
        ></FormControl>
        <FormControl
          type={"counter"}
          label={"Rating"}
          value={form.rating}
          onChange={(e) => setRating(e)}
        ></FormControl>
      </div>
      <div className={styles.row}>
        <FormControl
          type={"textarea"}
          label={"Text"}
          value={form.text}
          onChange={(e) => setText(e.target.value)}
        ></FormControl>
      </div>
      <Button label={"Clear form"} onClick={clearForm}></Button>
    </div>
  );
};
