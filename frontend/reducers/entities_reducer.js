import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import RestaurantReducer from './restaurant_reducer';

const entitiesReducer  = combineReducers({
    users: usersReducer,
    restaurants: RestaurantReducer
});

export default entitiesReducer;