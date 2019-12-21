import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';
import {withRouter} from 'react-router-dom';


const mSTP = (state,ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restId],
    currentUser: state.session.currentUser
    
})

const mDTP = dispatch => ({
    fetchRestaurant:(restaurant) => dispatch(fetchRestaurant(restaurant))
})

export default withRouter(connect(mSTP,mDTP)(RestaurantShow));