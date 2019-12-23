import { connect } from 'react-redux';
import {composeReservation} from '../../actions/reservation_action';
import ReservationCompose from './reservation_compose';
import { openModal } from '../../actions/modal_actions'


const mSTP = (state, ownProps) => {
    return ({
        currentUser: state.session.user,
        currentRest: ownProps.rest_id,
        formType: 'reserve'
    })
}

const mDTP = dispatch => {
    return {
        composeReservation: data => dispatch(composeReservation(data)),
        openModal: (modal) => dispatch(openModal(modal))
    };
};

export default connect(mSTP,mDTP)(ReservationCompose)