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
            noResults = (
                <div className='empty-index-message'>
                    <h2>No restaurants matched your search</h2>
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
        // const restList = Object.values(this.props.restaurants)
        //     .map((restaurant, index) =>
        //         <li className='restIndexPlate' key={index}>
        //             <RestIndex restaurant={restaurant} />
        //         </li>
        //     );

        // debugger
        return (
            // <Link to={`/restaurants/${restaurant.id}`}>
            //     <div className='main-div'>
            //         <div className='rest-photo'>
            //             <img className='rest-pics' src={restaurant.photoUrls} />
            //         </div>
            //         <div className='rest-descr'>
            //             <div className='rest-name'>
            //                 <h1>{restaurant.name}</h1>
            //             </div>
            //             <br />
            //             <br />
            //             <div className='rest-hood'>
            //                 <img src="neighborhood.png" className='side-div-img' alt="" />
            //                 <h1>Neighborhood</h1>
            //                 <span>{restaurant.neighborhood}</span>
            //             </div>
            //             <br />
            //             <br />
            //             <div className='rest-addy'>
            //                 <img src="hofop.png" className='side-div-img' alt="" />
            //                 <h1>Hours of Operation</h1>
            //                 <span>{restaurant.hours_op}</span>
            //             </div>
            //         </div>
            //     </div>
            // </Link>
            <ul className='resta-ul-index'>
                {restaurants}
            </ul>
        )
    }
}

export default SearchResults