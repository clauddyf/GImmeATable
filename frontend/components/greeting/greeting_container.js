import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions'

const mSTP = ( { session, entities: { users }}) => {
    return {
        currentUser: session.manUp,
        afterLoggedIn: users[session.id]
        // currentUser: users[session.id]   //may need to make a change for modal
    };
};

// const mSTP = ({ session }) => ({
//     currentUser: session.currentUser
// })

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect (mSTP,mDTP)(Greeting);