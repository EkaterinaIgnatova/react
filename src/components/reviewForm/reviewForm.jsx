import { useForm } from "./useForm";
import { FormControl } from "../formControl/formControl";
import { Button } from "../button/button";
import classNames from "classnames";
import styles from "./reviewForm.module.css";
import { use } from "react";
import { AuthContext } from "../authContext/authContext";
import { Counter } from "../counter/counter";

export const ReviewForm = ({ className }) => {
  const { form, setName, setText, setRating, clearForm } = useForm();

  const { user } = use(AuthContext);

  if (!user) {
    return null;
  }

  return (
    <>
      <h3>Leave feedback</h3>
      <div className={classNames(styles.root, className)}>
        <div className={styles.row}>
          <FormControl label={"Name"}>
            <input
              value={form.name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl label={"Rating"}>
            <Counter
              count={form.rating}
              increaseCount={() => setRating(form.rating + 1)}
              decreaseCount={() => setRating(form.rating - 1)}
            />
          </FormControl>
        </div>
        <div className={styles.row}>
          <FormControl label={"Text"}>
            <textarea
              value={form.text}
              onChange={(e) => setText(e.target.value)}
            />
          </FormControl>
        </div>
        <Button label={"Clear form"} onClick={clearForm} />
      </div>
    </>
  );
};
