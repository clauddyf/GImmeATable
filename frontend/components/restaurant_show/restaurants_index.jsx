import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantsIndex extends React.Component {

    render() {
        const {restaurants} = this.props;
        // debugger
        return (
            <Link to={`/restaurants/${this.props.restaurant.restaurant.id}`}>
                {/* <ul>
                    <li>
                        <h1 className='location-name'>{this.props.location.location}</h1>
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
                </ul> */}

                <div className='main-div'>
                    <div className='rest-photo'>
                        <img className='rest-pics' src={this.props.restaurant.photoUrls} />
                    </div>
                    <div className='rest-descr'>
                        <div>
                         <h1>{this.props.restaurant.restaurant.name}</h1>
                        </div>
                        <hr/>
                        <div>
                            <span>{this.props.restaurant.restaurant.dresscode}</span>
                        </div>
                        <hr/>
                        <div>
                            <span>{this.props.restaurant.restaurant.address}</span>
                        </div>
                        <hr/>
                        <div>
                            <span>{this.props.restaurant.restaurant.neighborhood}</span>
                        </div>

                    </div>
                </div>
            </Link>
        )
    }
    
}

export default RestaurantsIndex