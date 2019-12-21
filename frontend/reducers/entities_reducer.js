import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import RestaurantReducer from './restaurant_reducer';
import LocationReducer from './location_reducer';
import ReviewsReducer from './reviews_reducer';
import ReservationReducer from './reservation_reducer';

const entitiesReducer  = combineReducers({
    users: usersReducer,
    restaurants: RestaurantReducer,
    locations: LocationReducer,
    reservations: ReservationReducer,
    reviews: ReviewsReducer
});

export default entitiesReducer;