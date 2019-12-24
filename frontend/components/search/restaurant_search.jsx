import React from 'react';
import SearchCalendar from './search_calendar';


class RestaurantSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    handleClick(e) {
        e.preventDefault();
        this.props.searchRestaurants(this.state.search)
    }

    update(e) {
        this.setState({search:e.target.value});
    }

    render() {
        return (
            <div className='search-form'>
                <form className='form-parent' onSubmit={e => this.handleClick(e)}>
                    <div className='search-bar'>
                        <select className='search-bar-city' placeholder='select a city'>
                            <option value="Where to?">Where to?</option>
                            <option value="1">San Francisco</option>
                            <option value="2">Phoenix</option>
                            <option value="3">NOLA</option>
                            <option value="4">Portland</option>
                            <option value="5">Chicago</option>
                            <option value="7">Austin</option>
                            <option value="8">Seattle</option>
                            <option value="9">Las Vegas</option>
                            <option value="10">New York</option>
                            <option value="11">Denver</option>
                        </select>
                        <label className='calendar-box'><SearchCalendar/></label>
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
                        <select className="search-bar-city" placeholder="Party of..">
                            <option value="Party of...">Party of...</option>
                            <option value="1">1 guest</option>
                            <option value="2">2 guest</option>
                            <option value="3">3 guest</option>
                            <option value="4">4 guest</option>
                            <option value="5">5 guest</option>
                            <option value="6">6 guest</option>
                            <option value="7">7 guest</option>
                            <option value="8">8 guest</option>
                            <option value="9">9 guest</option>
                            <option value="10">10 guest</option>
                        </select>
                    </div>
                        <input
                            className='search-input'
                            placeholder='Restaurant, City, Cuisine'
                            value={this.state.search}
                            onChange={e => this.update(e)}
                        />
                        <input className='search-button' type="submit" value='Search'/>
                </form>
            </div>
        )
    }
}

export default RestaurantSearch