import {
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    // debugger
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            // debugger
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            // debugger
            let newState = merge({}, oldState, {[action.restaurant.restaurant.id]:action.restaurant.restaurant});
            return newState;
        default: 
            return oldState;
    }
};

export default RestaurantReducer;