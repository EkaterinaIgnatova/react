import { useForm } from "./useForm";
import { FormControl } from "../formControl/formControl";
import { Button } from "../button/button";
import classNames from "classnames";
import styles from "./reviewForm.module.css";
import React, { use, useEffect } from "react";
import { AuthContext } from "../authContext/authContext";
import { Counter } from "../counter/counter";

export const ReviewForm = React.forwardRef(
  ({ className, onSubmit, isLoading, review }, ref) => {
    const { form, setText, setRating, clearForm, fillForm } = useForm();

    const { auth } = use(AuthContext);

    useEffect(() => {
      review ? fillForm(review) : clearForm();
    }, [review]);

    if (!auth.isUserAuth) {
      return null;
    }

    return (
      <div ref={ref}>
        <h3>Leave feedback</h3>
        <div className={classNames(styles.root, className)}>
          <div className={styles.row}>
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
          <div className={styles.row}>
            <Button
              label={"Clear form"}
              onClick={clearForm}
              className={styles.button}
            />
            <Button
              label={"Send review"}
              disabled={!form.text || !form.rating || isLoading}
              onClick={() => onSubmit({ ...form, userId: auth.user?.id })}
              className={styles.button}
            />
          </div>
        </div>
      </div>
    );
  }
);
