import { connect } from 'react-redux';
import {composeReservation} from '../../actions/reservation_action';
import ReservationCompose from './reservation_compose'


const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        currentRest: ownProps.rest_id
    })
}

const mDTP = dispatch => {
    return {
        composeReservation: data => dispatch(composeReservation(data))
    };
};

export default connect(mSTP,mDTP)(ReservationCompose)