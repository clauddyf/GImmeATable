import React from 'react';
import RestIndex from '../restaurant_show/restaurants_index';

class LocationContent extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchRestaurants(this.props.match.params.locId);
        // this.props.fetchLocations();
    }
    
    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        // debugger
        const restList = Object.values(this.props.restaurants)
        .map((restaurant,index) =>
        <li className='restIndexPlate' key={index}>
                                        <RestIndex restaurant={restaurant}/>
                                    </li>
        );
        console.log(restList)
        return(
            <div className='loc-container'>
                <div className='loc-ul-container'>
                    <ul className='resta-ul-index'>
                    {restList}
                    </ul>
                </div>
            </div>
            )
    }
    
}

export default LocationContent