import React from 'react';
import RestIndex from '../restaurant_show/restaurants_index'

class SplashContent extends React.Component {
    constructor(props) {
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }
    
    componentDidMount() {
        this.props.fetchRestaurants();
    }
    
    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }
    
    render() {
        const restList = Object.values(this.props.restaurants)
        .map((restaurant,index) =>
        <li className='restIndexPlate' key={index}>
                                        <RestIndex restaurant={restaurant}/>
                                    </li>
                                );
                                return(
                                    <div className='splash-container'>
                <div className='ul-container'>
                    <ul className='restaurant-ul-index'>
                        {restList}
                    </ul>
                </div>
            </div>
        )
    }

}

export default SplashContent;