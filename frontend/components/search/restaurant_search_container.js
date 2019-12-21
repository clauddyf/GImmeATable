import {connect} from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { fetchRestaurants, searchRestaurants} from '../../actions/restaurant_actions';

const mSTP = (state) => ({
    restaurants: state.entities.restaurants
})

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (query) => dispatch(searchRestaurants(query))
});

export default connect(mSTP,mDTP)(RestaurantSearch)