import { connect } from 'react-redux';
import { fetchRestaurants} from '../../actions/restaurant_actions';
import { fetchLocations } from '../../actions/location_actions';
import SplashContent from './splash_content';

const mSTP = state => ({
    // restaurants: state.entities.restaurants,
    locations: state.entities.locations
})

const mDTP = dispatch => ({
    // fetchRestaurants: () => dispatch(fetchRestaurants()),
    fetchLocations: () => dispatch(fetchLocations())
})
// debugger

export default connect(mSTP,mDTP)(SplashContent)