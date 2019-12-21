import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

class SearchCalendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
        }
        this.handleChange = this.handleChange.bind(this);
        // debugger
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
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
                minTime={moment().hours(11).minutes(0)}
                maxTime={moment().hours(22).minutes(0)}
                dateFormat="LLL"
            
            />
        )
    }
}

export default SearchCalendar 