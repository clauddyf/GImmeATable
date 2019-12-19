import * as APIUtil from '../util/reservation_api_util'

export const RECEIVE_RESERVATION = 'RECEIVE_RESERVATION';
// export const TEMP_RECEIVE_RESERVATION = 'TEMP_RECEIVE_RESERVATION';

export const receiveReservation = reservation => ({
    type: RECEIVE_RESERVATION,
    reservation,
});
// export const receiveTempReservation = reservation => ({
//     type: TEMP_RECEIVE_RESERVATION,
//     reservation,
// });

// export const getTempReservation = data => dispatch => (
//     APIUtil.getTempReservation(data).then(res => dispatch(receiveTempReservation(res)))
// )

export const composeReservation = (reservation) => dispatch => (
    APIUtil.composeReservation(reservation).then(res => dispatch(receiveReservation(res)))
)

