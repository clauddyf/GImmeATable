import React from 'react';
import { Link } from 'react-router-dom';
import RestaurantIndex from '../restaurant_show/restaurants_index'

class SearchResults extends React.Component{
    constructor(props){
        super(props);
        debugger
    }

    componentWillMount(){
        this.props.fetchRestaurants();
    }
    
   
    render() {

        debugger

        let restaurants;
        let noResults;
        if (Object.keys(this.props.restaurants).length === 0) {
            restaurants = (
                <div className='empty-index-message'>
                    <h2 className='noresults'>No restaurants matched your search</h2>
                </div>
            )
        } else {
            restaurants = Object.values(this.props.restaurants)
                          .map((restaurant,index) =>
                              <li className='restIndexPlate' key={index}>
                                  <RestaurantIndex restaurant={restaurant} />
                              </li>
                          )
        }
        
        // debugger
        return (
            
            <ul className='resta-ul-index'>
                {restaurants}
            </ul>
        )
    }
}

export default SearchResults