import { connect } from 'react-redux';
// import RestaurantSearch from './restaurant_search';
import { fetchRestaurants, searchRestaurants } from '../../actions/restaurant_actions';
import { fetchLocations } from '../../actions/location_actions';
import SearchResults from './search_results';
import { withRouter } from 'react-router-dom';

const mSTP = (state) => ({
    restaurants: state.entities.restaurants
})

const mDTP = (dispatch) => ({
    fetchRestaurants: () => dispatch(fetchRestaurants()),
});

export default withRouter(connect(mSTP, mDTP)(SearchResults));