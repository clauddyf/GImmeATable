import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ReservationDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            open: this.props.restaurant.open,
            close: this.props.restaurant.close
        }
        this.handleChange = this.handleChange.bind(this);
        // debugger
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        // debugger
        this.props.throughDate(date._d);
    }

    render() {
        // debugger
        return (
            <DatePicker
            className='calendar'
                selected = {this.state.startDate._d}
                onChange = {this.handleChange}

                showTimeSelect
                timeIntervals={30}
                minDate = {this.state.startDate._d}
                minTime={moment().hours(open).minutes(0)}
                maxTime={moment().hours(close).minutes(0)}
                dateFormat="LLL"
            
            />
        )
    }
}

export default ReservationDate;