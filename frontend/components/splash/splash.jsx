import React from 'react';
import SplashContainer from './splash_container';
import RestaurantSearchContainer from '../search/restaurant_search_container'

const Splash = () => {
    return (
        <div className="splash">
            <div className='content-block'>
                <div className='greyed-out'>
                    <div className='content-block-header'>
                        <h1 className='obama-text'>
                            Find your table for any occasion
                        </h1>  
                    </div>
                    <div className='baby-splash'>
                        <RestaurantSearchContainer/>
                    </div>
                </div>
            </div>
            <div className='pop-rests'>
                <h2>Featured Cities</h2>
            </div>
            <hr/>
            <div className='splashcont'>
                <SplashContainer />
            </div>
        </div>
    )
}

export default Splash;
