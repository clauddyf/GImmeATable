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
            user_id: this.props.currentUser ? this.props.currentUser.id: undefined,
            head_count: undefined
        };
        this.throughDate = this.throughDate.bind(this)
        // debugger
        // this.handleSubmit = this.handleSubmit.bind(this)
    }

    // componentDidMount(){
    //     this.props.openModal(modal);
    // }

    handleSubmit(e) {
        e.preventDefault();
        // let reservation = {
        //     reserve: this.state.reserve,
        //     restaurant: this.props.currentRestaurant
        // };
        if (this.props.currentUser === null) {
            window.alert('Please close this window and login above')
        } else if (this.state.head_count === undefined) {
            window.alert('Select a data and head count')
        } else {
            this.props.composeReservation(this.state);
        }
    }

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
                    <h1 className='make-rese'>Make a Reservation</h1>
                    <div className='baby-rese-cont'>
                        <ReservationDate
                            throughDate={this.throughDate}
                            restaurant={this.props.restaurant}    
                        />
                        <textarea className="rese-textarea" 
                            value={this.state.head_count} 
                            onChange={e => this.update(e, 'head_count')}>
                        </textarea>
                        <input className = "rese-submit" type="submit" value="Submit"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default ReservationCompose