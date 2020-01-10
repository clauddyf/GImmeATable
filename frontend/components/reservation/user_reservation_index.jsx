import React from 'react';
import ReservationShow from './user_reservation_show';

class ReservationIndex extends React.Component {
    render() {
        debugger
        let reservations = this.props.user.reservations;

        let noReservations;
        if (reservations.length === 0) {
            noReservations = "You currently have Zero Reservations"
        } else {
            noReservations='';
        }

        return (
            <div className='res-index-main'>
                <h2 className='upcoming-res'>
                    Your Reservations:
                </h2>
                <hr/>
                <ul>
                    {
                        reservations.map((reservation) => (
                            <ReservationShow
                                restaurant = {this.props.restaurants[reservation.restaurant_id]}
                                fetchRestaurant={this.props.fetchRestaurant}
                                reservation={reservation}
                                key={reservation.id}
                            />
                        ))
                    }
                </ul>
                <div className='no-res'>
                    <h2>
                        {noReservations}
                    </h2>
                </div>
            </div>
        )
    }
}

export default ReservationIndex