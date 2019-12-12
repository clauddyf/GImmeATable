import { connect } from 'react-redux';
import { fetchRestaurants} from '../../actions/restaurant_actions';
import SplashContent from './splash_content';

const mSTP = state => ({
    restaurants: state.entities.restaurants
})
// debugger

const mDTP = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})

export default connect(mSTP,mDTP)(SplashContent)