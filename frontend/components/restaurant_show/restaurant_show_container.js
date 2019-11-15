import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show'


const mSTP = (state,ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restId]
})

const mDTP = dispatch => ({
    fetchRestaurant:(restaurant) => dispatch(fetchRestaurant(restaurant))
})

export default connect(mSTP,mDTP)(RestaurantShow);