import React from 'react';
import LocationContentContainer from '../location/location_content_container'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

// const Loc = () => {
    class Loc extends React.Component {
    render() {
        // debugger
        return (
            <div className="splash">
                <div className='splashcont'>  
    
                    <LocationContentContainer />
                </div>
            </div>
        )

    }
}

// class Splash extends React.Component {
//     render() {

//     }
// }

//     render() {
//         // debugger
//         if (this.props.location === undefined) return null; 
//         return (
//             <div className='loc-show'>
//                 {this.props.location.cityname}
//             </div>
//         )
//     }
// }

export default (connect()(Loc))