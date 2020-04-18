import React from 'react';
import SearchCalendar from './search_calendar';
import SearchResults from './search_results';


class RestaurantSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            eateries:''
        };
        debugger
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        this.props.searchRestaurants();
        this.props.fetchLocations();
    }

    update(field) {
        return e => {
            this.setState({[field]:e.currentTarget.value});
        }
    }
    throughDate(newDate) {
        let dateString = newDate.toDateString();
        this.setState({date: dateString});
    }

    handleSubmit(e) {
        debugger
        e.preventDefault();
        let name = this.state.query
        this.props.searchRestaurants(name)
        // .then( (restaurants)=> this.props.history.push(`/results?res=${restaurants}`) )
        this.props.history.push(`/results`)
        // .then( (restaurants) => <SearchResults restaurants = {restaurants} />)
        // this.state.eateries = this.props.searchRestaurants(name)
        debugger
        // <SearchResults restaurants = {this.props.restaurants}/>
        // .then( (restaurants) => <SearchResults restaurants = {restaurants} />)
    }

    render() {
        return (
            <div className='search-form'>
                <form className='form-parent' onSubmit={this.handleSubmit}>
                    <div className='search-bar'>
                        <label className='calendar-box'><SearchCalendar throughDate={this.throughDate}/>
                        </label>
                        <select className="search-bar-city" placeholder="Select a Time" onChange={this.update("time")} >
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
                        <select className="search-bar-city" placeholder="Party of.."  onChange={this.update("numPeople")}>
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
                            type='text'
                            onChange={this.update("query")}
                        />
                        <input className='search-button' type="submit" value='Search'/>
                </form>
            </div>
        )
    }
}

export default RestaurantSearch