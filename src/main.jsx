import { restaurants } from './assets/mock';
import { createRoot } from 'react-dom/client';
import './main.css';

const restaurantsList = restaurants;

const getStars = (rating) => {
  let stars = [];
  for(let i = 0; i < rating; i++) {
    stars.push(<i className="fa-solid fa-star" style={{color: '#ffd43b'}}></i>)
  };
  return (stars);
}

createRoot(document.getElementById('root')).render(
  <div>
    {restaurantsList.map(restaurant => (
      <div key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <h3>Menu</h3>
        <ul className='dishesList'>
          {restaurant.menu.map(dish => (
            <li className='dishItem' key={dish.id}>
              <span>{dish.name} ({dish.ingredients.join(', ')})</span>
              <b>{dish.price + '$'}</b>
            </li>
          ))}
        </ul>
        <h3>Reviews</h3>
        <ul className='reviewsList'>
          {restaurant.reviews.map(review => (
            <li className='reviewItem' key={review.id}>
              <h4>{review.user} {getStars(review.rating)}</h4>
              <p>{review.text}</p>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)
