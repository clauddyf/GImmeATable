import { connect } from 'react-redux';
import { fetchRestaurant } from '../../actions/restaurant_actions';
import RestaurantShow from './restaurant_show';
import {withRouter} from 'react-router-dom';
import { receiveCurrentUser } from '../../actions/session_actions';


const mSTP = (state,ownProps) => ({
    restaurant: state.entities.restaurants[ownProps.match.params.restId],
    currentUser: state.session.id
    
})

const mDTP = dispatch => ({
    fetchRestaurant:(restaurant) => dispatch(fetchRestaurant(restaurant)),
    // receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
})
// debugger
export default withRouter(connect(mSTP,mDTP)(RestaurantShow));

