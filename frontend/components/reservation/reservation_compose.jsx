import React from 'react';
import {Link} from 'react-router-dom'
import ReservationDate from './reservation_date';

class ReservationCompose extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();
        this.state ={
            date: now.toDateString(),
            time_id: now.getHours(),
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
        // let dateTime = `${this.state.date}` + ` ` + `${this.state.time_id}`
        // let reservation = {
        //     reserve: this.state.reserve,
        //     restaurant: this.props.currentRestaurant
        // };
        if (this.props.currentUser === null) {
            window.alert('Please close this window and login above')
        } else if (this.state.head_count === undefined) {
            window.alert('Select a data and head count')
        } else {
            // this.props.composeReservation({
            //     restaurant_id: this.state.restaurant_id,
            //     date: dateTime,
            //     head_count: this.state.head_count
            // });
            this.props.composeReservation(this.state).then(() => this.profileRedirect())
        }
        // debugger
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
        let time = newDate.getHours();
        this.setState({date: dateString, time_id: time});
        // debugger
    }

    render() {
        // debugger
        return (
            <div className='rese-form-container'>
                <form className="rese-form" onSubmit={e => this.handleSubmit(e)}>
                    <h1 className='make-rese'></h1>
                    <div id='section'>
                        <label className='dropdown'>
                            {/* <input className='res-head-count'
                                   type="number" 
                                   placeholder='Head Count' 
                                //    value={this.state.head_count}
                                //    onChange={this.update('head_count')}
                                   min='1' 
                                   max='10'
                            /> */}
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
                            <input className="rese-textarea" 
                                placeholder='Head Count'
                                min='1'
                                type='number'
                                value={this.state.head_count} 
                                onChange={e => this.update(e, 'head_count')}>
                            </input>
                        </label>
                        {/* <label className='rese-date'>
                            <div>Time:</div>
                            <select className="search-bar-city" placeholder="Select a Time">
                            <option value="Select a Time">Select a Time</option>
                            <option value="12:00 PM">12:00 PM</option>
                            <option value="12:30 PM">12:30 PM</option>
                            <option value="1:00 PM">1:00 PM</option>
                            <option value="1:30 PM">1:30 PM</option>
                            <option value="2:00 PM">2:00 PM</option>
                            <option value="2:30 PM">2:30 PM</option>
                            <option value="3:00 PM">3:00 PM</option>
                            <option value="3:30 PM">3:30 PM</option>
                            <option value="4:00 PM">4:00 PM</option>
                            <option value="4:30 PM">4:30 PM</option>
                            <option value="5:00 PM">5:00 PM</option>
                            <option value="5:30 PM">5:30 PM</option>
                            <option value="6:00 PM">6:00 PM</option>
                            <option value="6:30 PM">6:30 PM</option>
                            <option value="7:00 PM">7:00 PM</option>
                            <option value="7:30 PM">7:30 PM</option>
                            <option value="8:00 PM">8:00 PM</option>
                            <option value="8:30 PM">8:30 PM</option>
                            <option value="9:00 PM">9:00 PM</option>
                            <option value="9:30 PM">9:30 PM</option>
                            <option value="10:00 PM">10:00 PM</option>
                            <option value="10:30 PM">10:30 PM</option>
                            <option value="11:00 PM">11:00 PM</option>
                            <option value="11:30 PM">11:30 PM</option>
                        </select>
                        </label> */}
                    </div>
                    <div id='section'>
                        <input type="submit" className='rese-submit-butt' value='Confirm Reservation'/>
                    </div>
                    {/* <ReservationDate
                            
                                throughDate={this.throughDate}
                                restaurant={this.props.restaurant}    
                            />
                            <input className="rese-textarea" 
                                placeholder='Head Count'
                                min='1'
                                type='number'
                                value={this.state.head_count} 
                                onChange={e => this.update(e, 'head_count')}>
                            </input> */}
                            {/* <input type="date" 
                                   placeholder='Pick a date' 
                                //    value={this.state.date} 
                                //    onChange={this.update('date')}
                            />
                            <div className='baby-rese-cont'> 
                            {/* <input className = "rese-submit" type="submit" value="Submit"/> */}
                            {/* </div> */}
                </form>
            </div>
        )
    }
}

export default ReservationCompose