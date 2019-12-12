import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantsIndex extends React.Component {

    render() {
        const {restaurants} = this.props;
        // debugger
        return (
            <Link to={`/restaurants/${this.props.restaurant.id}`}>
                <ul>
                    <li>
                        <h1 className='restaurant-name'>{this.props.restaurant.name}</h1>
                    </li>
                </ul>
                    <li className='dafuq'>
                    <span className='rest-others'>{this.props.restaurant.num_of_views} Reviews</span>
                    </li>
                <ul className='rest-splash-box'>
                    <li>
                        <span className='rest-others'>{this.props.restaurant.cuisine_type}</span>
                    </li>
                    <li>
                    <span className='rest-others'>{this.props.restaurant.dresscode}</span>
                    </li>
                </ul>
            </Link>
        )
    }
}

export default RestaurantsIndex