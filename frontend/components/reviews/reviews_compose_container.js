import {connect} from 'react-redux';
import {composeReview} from '../../actions/review_actions';
import {openModal} from '../../actions/modal_actions';
import ReviewCompose from './review_compose';

const mSTP = (state) => ({
    currentUser: state.session.currentUser,
    loggedIn: Boolean(state.session.id)
});

const mDTP = (dispatch) => ({
    composeReview: (review) => dispatch(composeReview(review)),
    openModal: (modal) => dispatch(openModal(modal))
});

export default connect(mSTP,mDTP)(ReviewCompose);