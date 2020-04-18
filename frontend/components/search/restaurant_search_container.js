import {connect} from 'react-redux';
import RestaurantSearch from './restaurant_search';
import { fetchRestaurants, searchRestaurants} from '../../actions/restaurant_actions';
import {fetchLocations} from '../../actions/location_actions';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    restaurants: Object.values(state.entities.restaurants),
    locations: Object.values(state.entities.locations)

})

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
    searchRestaurants: (query) => dispatch(searchRestaurants(query)),
    fetchLocations: () => dispatch(fetchLocations())
});

export default withRouter(connect(mSTP,mDTP)(RestaurantSearch));