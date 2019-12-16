import {
    RECEIVE_LOCATIONS,
    RECEIVE_LOCATION
} from '../actions/location_actions';
import merge from 'lodash/merge';

const LocationReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_LOCATIONS:
            return action.locations;
            // debugger
        case RECEIVE_LOCATION:
            let newState = merge({}, oldState, {[action.location.id]:action.location});
            return newState;
        default: 
            return oldState;
    }
};

export default LocationReducer;