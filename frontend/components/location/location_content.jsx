import React from 'react';
import RestIndex from '../restaurant_show/restaurants_index';
import RestaurantSearchContainer from '../search/restaurant_search_container'

class LocationContent extends React.Component {
    constructor(props){
        super(props);
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // debugger
    }
    
    componentDidMount() {
        // debugger
        this.props.fetchRestaurants(this.props.match.params.locId);
        this.props.fetchLocation(this.props.match.params.locId);
        // debugger
    }
    
    handleInput(type) {
        return (e) => this.setState({ [type]: e.target.value });
    }
    
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        debugger
        let denver;
        if (this.props.location.id === 9 || this.props.location.id === 7 || this.props.location.id === 8 || this.props.location.id === 10) {
            denver = (<div className='loc-pic-container'>
                        <div className='daddy-div'>
                            <div className='baby-div'>
                                <img src={this.props.location.photoUrls[1]} className='location-show-pic'/>
                                <div className='centered'>
                                    <RestaurantSearchContainer/>
                                </div>
                            </div>
                        </div>
                     </div>)
        } else {
            denver = (<div className='loc-pic-container'>
                        <div className='daddy-div'>
                            <div className='baby-div'>
                                <img src={this.props.location.photoUrls[1]} className='location-show-pic'/>
                                <div className='centered'>
                                    <RestaurantSearchContainer/>
                                </div>
                            </div>
                        </div>
                    </div>)
        }
        const restList = Object.values(this.props.restaurants)
        .map((restaurant,index) =>
        <li className='restIndexPlate' key={index}>
                                        <RestIndex restaurant={restaurant}/>
                                    </li>
        );

        // console.log(restList)
        return(
            <div className='loc-container'>
                {/* <img src='https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_0.jpg' className='location-show-pic'/> */}
                {/* <img src={this.props.location.photoUrls[0]} className='location-show-pic'/> */}
                {denver}
                <div className='loc-ul-container'>
                    <ul className='left-cat'>
                        <div className='price-container'>
                            <h1>Price:</h1>
                            <div className='price-butt'>
                                <button value='$'>under $10</button>
                                <br/>
                                <button value='$$'>$10-$30</button>
                                <br/>
                                <button value='$$$'>$30-$60</button>
                                <br/>
                                <button value='$$$'>$60-$100</button>
                                <br/>
                                <button value='$$$'>$100 and up</button>
                            </div>
                            <hr/>
                            <div className='cuise-container'>
                                <div className='cuise-row'>
                                    <div>Cuisine:</div>
                                    <form className='cuise-list'>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Jamaican"/>
                                                <span className='checklist'></span>
                                                Jamaican
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Italian"/>
                                                <span className='checklist'></span>
                                                Italian
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="American"/>
                                                <span className='checklist'></span>
                                                American
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Southern Comfort"/>
                                                <span className='checklist'></span>
                                                Southern Comfort
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Chinese"/>
                                                <span className='checklist'></span>
                                                Chinese
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Japanese"/>
                                                <span className='checklist'></span>
                                                Japanese
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Thai Food"/>
                                                <span className='checklist'></span>
                                                Thai Food
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Vegan"/>
                                                <span className='checklist'></span>
                                                Vegan
                                            </label>
                                        </li>
                                        <li>
                                            <label>
                                                <input type="checkbox" value="false" id="Sushi"/>
                                                <span className='checklist'></span>
                                                Sushi
                                            </label>
                                        </li>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </ul>
                    <ul className='resta-ul-index'>
                    {restList}
                    </ul>
                </div>
            </div>
            )
    }
    
}

export default LocationContent