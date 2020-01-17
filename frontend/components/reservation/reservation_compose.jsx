import React from 'react';
import {Link} from 'react-router-dom'
import ReservationDate from './reservation_date';

class ReservationCompose extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();
        this.state ={
            date: now.toDateString(),
            time_id: '',
            restaurant_id: this.props.restaurant.id,
            user_id: this.props.currentUser,
            head_count: '',
            // selectedDate: '',
            // selectedTime: ''
            // date: '',
            // time_id:'',
            // head_count:''
        };
        this.throughDate = this.throughDate.bind(this)
        // debugger
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //     this.props.openModal(modal);
    // }
    profileRedirect() {
        window.location.href = window.location.origin + `/#/user/${this.props.currentUser}`;
      }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.currentUser === null) {
            this.props.openModal('login')
        } else if (this.state.head_count === undefined) {
            window.alert('Select a data and head count')
        } else {
            this.props.composeReservation(this.state).then(() => this.profileRedirect())
        }
    }
    // .then(() => this.props.history.push('/profile')).fail(() => this.render());
    // .then(() => this.userProfile())  add this back to line 31 when you create the user profile

    // userProfile() {
    //     window.location.href = window.location.origin + `/#uthis.state.startDate._dser/${this.props.currentUser.id}`;
    // }

    update(e, field) {
        this.setState({
            [field]: e.currentTarget.value
        });
    }

    throughDate(newDate) {
        // debugger
        let dateString = newDate.toDateString();
        // let time = newDate.getHours();
        this.setState({date: dateString});
        // debugger
    }

    render() {
        // debugger
        const timeIntervals = ["12:00 PM", "12:30PM"];
        let time;
        for (let i = 1; i < 12; i++) {
            for (let j = 0; j < 2; j++) {
                time = "";
                time = time.concat(`${i}`)

                if (j === 0) {
                    time = time.concat(":00 PM")
                } else {
                    time = time.concat(":30 PM")
                }
                
                timeIntervals.push(time)
            }
        }

        return (
            <div className='rese-form-container'>
                <form className="rese-form" onSubmit={e => this.handleSubmit(e)}>
                    <h1 className='make-rese'></h1>
                    <div id='section'>
                        <label className='dropdown'>
                            <input className="rese-textarea" 
                                placeholder='Head Count'
                                min='1'
                                type='number'
                                value={this.state.head_count} 
                                onChange={e => this.update(e, 'head_count')}>
                            </input>
                        </label>
                    </div>
                    <div id='section' className='res-section-row'>
                        <label className='rese-date'>
                            <div>Date:</div>
                            <ReservationDate
                                // selectedDate={this.state.selectedDate}
                                // selectedTime={this.state.selectedTime}
                                throughDate={this.throughDate}
                                restaurant={this.props.restaurant}    
                            />
                        </label>
                        <label className='rese-date'>
                            <div>Time:</div>
                            <select value={this.state.time_id.value} onChange={e => this.update(e,'time_id')}>
                                <option value="Select a Time">Select a Time</option>
                                {
                                        timeIntervals.map((el, i) => {
                                            return <option key={i} value={el}>{el}</option>
                                        })
                                    }
                            </select>
                        </label>
                    </div>
                    <div id='section'>
                        <input type="submit" className='rese-submit-butt' value='Confirm Reservation'/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ReservationCompose
