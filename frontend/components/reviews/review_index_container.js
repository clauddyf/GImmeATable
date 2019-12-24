import {connect} from 'react-redux';
import { composeReview, fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';
import {fetchUser} from '../../actions/user_actions';
import { receiveRestaurant} from '../../actions/restaurant_actions';
import { withRouter } from 'react-router-dom';




const mSTP =(state,ownProps) => ({
    currentUser: state.session.currentUser,
    reviews: Object.values(state.entities.reviews) || [],
    users: state.entities.users,
    restaurants: state.entities.restaurants,
    user: ownProps.match.params.userId,
    restaurant: ownProps.match.params.restaurantId
});

const mDTP = (dispatch) => ({
    composeReview: (review) => dispatch(composeReview(review)),
    fetchReviews: (reviews) => dispatch(fetchReviews(reviews)),
    fetchUser: (user) => dispatch(fetchUser(user)),
    receiveRestaurant: (restaurant) => dispatch(receiveRestaurant(restaurant))
});

export default withRouter(connect(mSTP,mDTP)(ReviewIndex))