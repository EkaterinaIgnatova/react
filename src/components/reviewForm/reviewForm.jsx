import { Counter } from "../counter/counter";
import { useForm } from "./useForm";
import "./reviewForm.css";

export const ReviewForm = () => {

    const {form, setName, setText, setRating, clearForm} = useForm();

    return (
        <div className="form">
            <div className="form-row">
                <div className="text-control">
                    <span>Name</span>
                    <input value={form.name} onChange={(e) => setName(e.target.value)}></input>
                </div>
                <div>
                    <span>Rating</span>
                    <Counter count={form.rating} 
                            increaseCount={() => setRating(form.rating + 1)} 
                            decreaseCount={() => setRating(form.rating - 1)}
                    ></Counter>
                </div>
            </div>
            <div className="form-row">
                <div className="text-control">
                    <span>Text</span>
                    <textarea value={form.text} rows={3} onChange={(e) => setText(e.target.value)}></textarea>
                </div>
            </div>
            <button className="form-button" onClick={() => clearForm()}>Clear form</button>
        </div>
    )
}