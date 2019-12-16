import React from 'react';
import { Link } from 'react-router-dom';

class LocationIndex extends React.Component {

    render() {
        const {locations} = this.props;
        // debugger
        return (
            <Link to={`/locations/${this.props.location.id}`}>
                <ul>
                    <li>
                        {/* <h1 className='location-name'>{this.props.location.location}</h1> */}
                        <div className='overlay-img'>
                            <img className='loc-pics' src={this.props.location.photoUrls} alt=""/>
                           <div className='overlay'>
                               <div className='loc-text'>{this.props.location.location}</div>
                           </div>
                           <div className='hover-l'>
                            <img className='loc-pics' src={this.props.location.photoUrls} alt=""/>
                                <div className='overlay'>
                                <div className='loc-text'>{this.props.location.location}</div>
                            </div>
                           </div>
                        </div>
                    </li>
                </ul>
            </Link>
        )
    }
}

export default LocationIndex