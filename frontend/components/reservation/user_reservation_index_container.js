import { connect } from 'react-redux';
import ReservationIndex from './user_reservation_index';
import {fetchRestaurant} from '../../actions/restaurant_actions';

const mSTP = (state) => ({
    restaurants: state.entities.restaurants
});

const mDTP = (dispatch) => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
});

export default connect(mSTP,mDTP)(ReservationIndex)