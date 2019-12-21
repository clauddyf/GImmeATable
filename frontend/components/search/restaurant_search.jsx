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
                <form onSubmit={e => this.handleClick(e)}>
                    <h2>Find a Restaurant</h2>
                    <span className='search-bar'>
                        <SearchCalendar/>
                        <input
                            className='search-input'
                            placeholder='Restaurant, City, Cuisine'
                            value={this.state.search}
                            onChange={e => this.update(e)}
                        />
                        <input className='search-button' type="submit" value='Search'/>
                    </span>
                </form>
            </div>
        )
    }
}

export default RestaurantSearch