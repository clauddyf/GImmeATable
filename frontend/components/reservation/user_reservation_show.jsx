import React from 'react';
import RestaurantProfile from '../restaurant_show/restaurant_profile';

class ReservationShow extends React.Component {
    constructor(props) {
        super(props);

        this.convertTime = this.convertTime.bind(this);
    }

    convertTime(time) {
        if(time > 12) {
            return `${(time - 12)}:00 AM`
        } else {
            return `${time}:00 PM`;
        }
    }

    componentDidMount() {
        this.props.fetchRestaurant(this.props.reservation.restaurant_id)
    }

    render() {
        debugger
        if (!this.props.restaurant) return null;

        return(
            <div>
                <span className = 'rese-message'>
                    <h2>
                        You have a reservation for {this.props.reservation.head_count} on
                    </h2>
                    <h3>
                        {(this.props.reservation.date.slice(5))} at {this.convertTime(this.props.reservation.time_id)}
                    </h3>
                </span>
                <RestaurantProfile restaurant={this.props.restaurant}/>
            </div>
        )
    }
}

export default ReservationShow