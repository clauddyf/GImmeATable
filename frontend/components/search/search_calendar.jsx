import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
// import 'react-datepicker/dist/react-datepicker.css';
// require('react-datepicker/dist/react-datepicker.css')

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
                className='calendar-style'
                selected = {this.state.startDate._d}
                onChange = {this.handleChange}
                placeholderText= 'MM/DD/YYYY'
                showTimeSelect
                timeIntervals={30}
                minDate = {this.state.startDate._d}
                minTime={moment().hours(11).minutes(0)}
                maxTime={moment().hours(22).minutes(0)}
                dateFormat="MM/dd/yyyy"
            
            />
        )
    }
}

export default SearchCalendar 