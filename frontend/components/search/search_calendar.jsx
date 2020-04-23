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
            startDate: moment()._d,
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
        this.props.throughDate(date);
    }

    render() {
        // debugger
        return (
            <DatePicker
                className='calendar-style'
                selected = {this.state.startDate}
                onChange = {date => this.handleChange(date)}
                dateFormat="MM/dd/yyyy"  
            />
        )
    }
}

export default SearchCalendar 