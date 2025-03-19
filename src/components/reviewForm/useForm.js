import { useReducer } from "react";

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_TEXT = 'CHANGE_TEXT';
const CHANGE_RATING = 'CHANGE_RATING';
const CLEAR_FORM = 'CLEAR_FORM';

const MAX_RATING = 5;
const MIN_RATING = 0;

const DEFAULT_FORM_VALUE = {
    name: '',
    text: '',
    rating: 0
};

const reducer = (formState, {type, payload}) => {
    switch(type) {
        case CHANGE_NAME:
            return {... formState, name: payload};
        case CHANGE_TEXT:
            return {... formState, text: payload};
        case CHANGE_RATING:
            return {... formState, rating: Math.max(Math.min(payload, MAX_RATING), MIN_RATING)};
        case CLEAR_FORM:
            return {...payload};
        default:
            return formState;
    }
};

export const useForm = () => {

    const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

    const setName = (name) => dispatch({type: CHANGE_NAME, payload: name});
    const setText = (text) => dispatch({type: CHANGE_TEXT, payload: text});
    const setRating = (rating) => dispatch({type: CHANGE_RATING, payload: rating});
    const clearForm = () => dispatch({type: CLEAR_FORM, payload: DEFAULT_FORM_VALUE});

    return {form, setName, setText, setRating, clearForm};
}