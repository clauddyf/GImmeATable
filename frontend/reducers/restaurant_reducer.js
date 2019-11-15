import {
    RECEIVE_RESTAURANTS,
    RECEIVE_RESTAURANT
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_RESTAURANTS:
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            let newState = merge({}, oldState, {[action.restaurant.id]:action.restaurant});
            return newState;
        default: 
            return oldState;
    }
};

export default RestaurantReducer;