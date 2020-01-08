import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class ReservationDate extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            // startDate: this.props.selectedDate,
            startDate: moment()._d,
            open: this.props.restaurant.open,
            close: this.props.restaurant.close
        }
        this.handleChange = this.handleChange.bind(this);
        // debugger
    }

    // componentWillReceiveProps(nextProps) {
    //     this.setState({startDate: nextProps.selectedDate})
    // }

    handleChange(date/*,time_id*/) {
        console.log(date)
        // debugger
        this.setState({
            startDate: date,
            // time: time_id
        });
        // debugger
        this.props.throughDate(date);
    }

    render() {
        // debugger
        return (
            <DatePicker
            className='calendar'
                selected = {this.state.startDate}
                onChange = {(date) => this.handleChange(date)}
                // onChangeRaw={(e) => this.handleChange(e.target.value)}
                // value={this.state.startDate}
                // showTimeSelect
                // timeIntervals={60}
                // // minDate = {this.state.startDate._d}
                // minDate={moment()}
                // minTime={moment().hours(open).minutes(0)}
                // maxTime={moment().hours(close).minutes(0)}
                dateFormat="MMMM d, yyyy"
            
            required/>
        )
    }
}

export default ReservationDate;