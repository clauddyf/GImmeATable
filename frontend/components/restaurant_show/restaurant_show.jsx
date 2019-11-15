import React from 'react';
import { Link } from 'react-router-dom';

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchRestaurant(this.props.match.params.restId)
    }

    render(){
        if (this.props.restaurant === undefined) return null; 
        return(
            <div className='rest-page'>
                <div className='rest-body'>
                    <aside className='right-side'>
                        <div className='baby-right-side'>
                            <div className='dresscode'>
                                <div className='baby-dress'>
                                    <span>Dresscode</span>
                                    <div className='act-dress'>
                                        {this.props.restaurant.dresscode}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                    <div className='ove-sect' >
                      <div className='name-body'>
                        <h1 className='rest-name'>{this.props.restaurant.name}</h1>
                        <hr/>
                        <div className='ratings-bar'>
                            <div className='reviews'>
                                <div className='rev-bar'>
                                    <div className='rev-icon'>

                                    </div>
                                    <div className='num-revs'>
                                        <span>{this.props.restaurant.num_of_views}</span>
                                        <span> Reviews</span>
                                    </div>
                                </div>
                            </div>
                            <div className='din-style'>
                                <span></span>
                                <span>{this.props.restaurant.dining_style}</span>
                            </div>
                        </div>
                      </div>
                      <div className='desc-div' >
                        <div >
                            {this.props.restaurant.description}
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RestaurantShow;