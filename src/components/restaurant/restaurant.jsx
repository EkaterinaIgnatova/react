import { Dish } from "../dish/dish";
import { Review } from "../review/review";
import "./restaurant.css";

export const Restaurant = ({restaurantInfo}) => {
    return (
        <div className="restaurant">
            <h2>{restaurantInfo.name}</h2>
            <h3>Menu</h3>
            {restaurantInfo.menu?.length ? (
                <ul className='dishes-list'>
                    {restaurantInfo.menu.map(dish => (
                        <li className="dish-item" key={dish.id}>
                            <Dish dishInfo={dish}/>
                        </li>
                    ))}
                </ul>
            ) : (
                <span>Menu is empty</span>
            )}
            <h3>Reviews</h3>
            {restaurantInfo.reviews?.length ? (
                <ul className='reviews-list'>
                    {restaurantInfo.reviews.map(review => (
                        <li className="review-item" key={review.id}>
                            <Review reviewInfo={review}/>
                        </li>
                    ))}
                </ul>
            ) : (
                <span>No reviews</span>
            )}
        </div>
    )
}