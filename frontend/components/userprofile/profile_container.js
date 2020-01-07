import { connect } from 'react-redux';
import Profile from './profile';
import {withRouter} from 'react-router-dom';
import { receiveCurrentUser } from '../../actions/session_actions'
import {fetchUser} from '../../actions/user_actions';
import {fetchRestaurant} from '../../actions/restaurant_actions';

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId],
    restaurant: state.entities.restaurants[ownProps.match.params.restId]
});


const mDTP = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})

export default withRouter(connect(mSTP,mDTP)(Profile))