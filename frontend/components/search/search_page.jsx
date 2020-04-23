import React from 'react';
import SearchContainer from './restaurant_search_container';
import ResultsContainer from './search_results_container';


const SearchPage = () => (
    <div className='searchPage'>
        <div className='search-block-content'>
            <div className='greyed-out'>
                <div className='content-block-header'>
                    <h1 className='obama-text'>
                        Find your table for any occasion
                            </h1>
                </div>
                <div className='baby-splash'>
                    <SearchContainer />
                </div>
            </div>
        </div>
        <div className='search-results-block'>
            <ResultsContainer/>
        </div>
    </div>
);



    


export default SearchPage;