import React from 'react';
import { Link } from 'react-router-dom';

class LocationShow extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        // debugger
        this.props.fetchLocation(this.props.match.params.locId)
        // debugger
    }

    render() {
        // debugger
        if (this.props.location === undefined) return null; 
        return (
            <div className='loc-show'>
                {this.props.location.name}
            </div>
        )
    }
}

export default LocationShow