import { Rating } from "../rating/rating";

const MAX_RATING = 5;

export const Review = ({reviewInfo}) => {
    return (
        <>
            <h4>{reviewInfo.user}</h4>
            <Rating currentRating={reviewInfo.rating} maxRating={MAX_RATING}></Rating>
            <p>{reviewInfo.text}</p>
         </>
    )
}