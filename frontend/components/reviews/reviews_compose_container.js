import {connect} from 'react-redux';
import {composeReview} from '../../actions/review_actions';
import ReviewCompose from './review_compose';

const mSTP = (state) => ({
    currentUser: state.session.currentUser
});

const mDTP = (dispatch) => ({
    composeReview: (review) => dispatch(composeReview(review)),
});

export default connect(mSTP,mDTP)(ReviewCompose);