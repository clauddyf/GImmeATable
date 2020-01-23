import React from 'react';
import RestIndex from '../restaurant_show/restaurants_index'
import LocationIndex from '../location/location_index';
import RestaurantSearchContainer from '../search/restaurant_search_container'

class SplashContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }
    
    componentDidMount() {
        this.props.fetchLocations();
    }
    
    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        debugger
        const locList = Object.values(this.props.locations)
        .map((location,index) => 
        <li className='locIndexPlate' key={index}>
            
            <LocationIndex location = {location}/>
        </li>);
         return(
            <div className='splash-container'>
                <div className='ul-container'>
                    <ul className='location-ul-index'>
                        {locList}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SplashContent;