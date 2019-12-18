import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantsIndex extends React.Component {

    render() {
        const {restaurants} = this.props;
        // debugger
        return (
            <Link to={`/restaurants/${this.props.restaurant.restaurant.id}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='rest-pics' src={this.props.restaurant.photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='rest-text'>{this.props.restaurant.restaurant.name}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='rest-pics' src={this.props.restaurant.restaurant.photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='rest-text'>{this.props.restaurant.restaurant.name}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        )
    }
    
}

export default RestaurantsIndex