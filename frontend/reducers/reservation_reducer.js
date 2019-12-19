import { RECEIVE_RESERVATION } from '../actions/reservation_action';
import merge from 'lodash/merge';


const ReservationReducer = (oldState = {}, action) => {
    Object.freeze(oldState)
    switch(action.type) {
        case RECEIVE_RESERVATION:
            let newState = merge({},oldState,{[action.reservation.id]: action.reservation});
            return newState
        default:
            return oldState;
    }
}

export default ReservationReducer;