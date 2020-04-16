import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantsIndex extends React.Component {

    render() {
        // const {restaurants} = this.props;
        let restaurant;
        if(this.props.restaurant.restaurant !== undefined){
            restaurant = this.props.restaurant.restaurant
        } else {
            restaurant = this.props.restaurant
        }

        debugger
        return (
            <Link to={`/restaurants/${restaurant.id}`}>
                <div className='main-div'>
                    <div className='rest-photo'>
                        <img className='rest-pics' src={this.props.restaurant.photoUrls} />
                    </div>
                    <div className='rest-descr'>
                        <div className='rest-name'>
                         <h1>{restaurant.name}</h1>
                        </div>
                        <br/>
                        <br/>
                        <div className='rest-hood'>
                            <img src="neighborhood.png" className='side-div-img'alt=""/>
                            <h1>Neighborhood</h1>
                            <span>{restaurant.neighborhood}</span>
                        </div>
                        <br/>
                        <br/>
                        <div className='rest-addy'>
                            <img src="hofop.png" className='side-div-img'alt=""/>
                            <h1>Hours of Operation</h1>
                            <span>{restaurant.hours_op}</span>
                        </div>
                    </div>
                </div>
            </Link>
        )
    }
    
}

export default RestaurantsIndex