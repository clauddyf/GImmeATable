import { connect } from 'react-redux';
import Profile from './profile';
import { receiveCurrentUser } from '../../actions/session_actions'

const mSTP = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.userId]
});

const mDTP = (dispatch) => ({
    receiveCurrentUser: (id) => dispatch(receiveCurrentUser(id))
})

export default connect(mSTP,mDTP)(Profile)