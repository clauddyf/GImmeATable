import {connect} from 'react-redux';
import { composeReview, fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import {fetchUser, fetchUsers} from '../../actions/user_actions';
import { fetchRestaurant, fetchRestaurants} from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';




const mSTP =(state,ownProps) => ({
    currentUser: state.session.currentUser,
    moreReviews: Object.values(state.entities.reviews) || [],
    users: state.entities.users,
    restaurants: state.entities.restaurants,
    user: ownProps.match.params.userId,
    restaurant: ownProps.match.params.restId,
    
    // type: {}
});

const mDTP = (dispatch) => ({
    composeReview: (review) => dispatch(composeReview(review)),
    fetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    fetchUsers: (users) => dispatch(fetchUsers(users)),
    fetchRestaurant: (restaurant) => dispatch(fetchRestaurant(restaurant)),
    fetchRestaurants: (restaurants) => dispatch(fetchRestaurants(restaurants))
});

export default withRouter(connect(mSTP,mDTP)(ReviewIndex))