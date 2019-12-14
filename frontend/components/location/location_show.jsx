import React from 'react';
import { Link } from 'react-router-dom';

class LocationShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchLocation(this.props.match.params.locId)
    }

    render() {
        return (
            <div className='loc-show'>
                {this.props.location.name}
            </div>
        )
    }
}