import { Restaurant } from "../restaurant/restaurant";
import { useState } from "react";
import "./layout.css";

export const Layout = ({restaurantsList}) => {

    const [selectedRestaurant, selectRestaurant] = useState(0);

    return (
        <div className="layout">
            <header>
                <h1>Restourants</h1>
            </header>
            <div className="content">
                <ul className="tabs-panel">
                    {restaurantsList.map(({id, name}, index) => (
                        <li key={id} 
                            className={selectedRestaurant === index ? 'tab active-tab' : 'tab'} 
                            onMouseDown={() => selectRestaurant(index)}
                        >{name}</li>
                    ))}
                </ul>
                <Restaurant restaurantInfo={restaurantsList[selectedRestaurant]}/>
            </div>
            <footer>
                <span>best-rest@gmail.com</span>
            </footer>
        </div>
    )
}