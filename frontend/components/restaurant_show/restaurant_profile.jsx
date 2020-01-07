import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantProfile = ({restaurant}) => {
    debugger
    return (
        <div className='restaurant-profile-item'>
            <span>
                <Link to={`/restaurants/${restaurant.id}`}>
                    {/* <img className='restaurant-profile_image'
                        src={restaurant.photoUrls}
                    /> */}
                </Link>
            </span>
            <span className='restaurant-info'>
                <h2>{restaurant.name}</h2>
                <br/>
                <span>City:</span>{restaurant.city.cityname}
                <br/>
                <span>Cuisine:</span>{restaurant.cuisine_type}
                <br/>
                <h3>Description:</h3>{restaurant.description}
            </span>
            <br/>
            <br/>
        </div>
    )
}

export default RestaurantProfile;