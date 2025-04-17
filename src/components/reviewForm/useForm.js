import { useReducer } from "react";

const CHANGE_TEXT = "CHANGE_TEXT";
const CHANGE_RATING = "CHANGE_RATING";
const CLEAR_FORM = "CLEAR_FORM";
const FILL_FORM = "FILL_FORM";

const MAX_RATING = 5;
const MIN_RATING = 0;

const DEFAULT_FORM_VALUE = {
  text: "",
  rating: 0,
};

const reducer = (formState, { type, payload }) => {
  switch (type) {
    case CHANGE_TEXT:
      return { ...formState, text: payload };
    case CHANGE_RATING:
      return {
        ...formState,
        rating: Math.max(Math.min(payload, MAX_RATING), MIN_RATING),
      };
    case CLEAR_FORM:
      return { ...payload };
    case FILL_FORM:
      return { ...payload };
    default:
      return formState;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setText = (text) => dispatch({ type: CHANGE_TEXT, payload: text });
  const setRating = (rating) =>
    dispatch({ type: CHANGE_RATING, payload: rating });
  const clearForm = () =>
    dispatch({ type: CLEAR_FORM, payload: DEFAULT_FORM_VALUE });
  const fillForm = (review) => dispatch({ type: FILL_FORM, payload: review });

  return { form, setText, setRating, clearForm, fillForm };
};
