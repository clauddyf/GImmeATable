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
            <div>
                <ul className='left-cat'>
                    <div className='price-container'>
                        <h1>Price:</h1>
                        <div className='price-butt'>
                            <button value='$'>under $10</button>
                            <br />
                            <button value='$$'>$10-$30</button>
                            <br />
                            <button value='$$$'>$30-$60</button>
                            <br />
                            <button value='$$$'>$60-$100</button>
                            <br />
                            <button value='$$$'>$100 and up</button>
                        </div>
                        <hr />
                        <div className='cuise-container'>
                            <div className='cuise-row'>
                                <div>Cuisine:</div>
                                <form className='cuise-list'>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Jamaican" />
                                            <span className='checklist'></span>
                                                Jamaican
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Italian" />
                                            <span className='checklist'></span>
                                                Italian
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="American" />
                                            <span className='checklist'></span>
                                                American
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Southern Comfort" />
                                            <span className='checklist'></span>
                                                Southern Comfort
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Chinese" />
                                            <span className='checklist'></span>
                                                Chinese
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Japanese" />
                                            <span className='checklist'></span>
                                                Japanese
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Thai Food" />
                                            <span className='checklist'></span>
                                                Thai Food
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Vegan" />
                                            <span className='checklist'></span>
                                                Vegan
                                            </label>
                                    </li>
                                    <li>
                                        <label>
                                            <input type="checkbox" value="false" id="Sushi" />
                                            <span className='checklist'></span>
                                                Sushi
                                            </label>
                                    </li>
                                </form>
                            </div>
                        </div>
                    </div>
                </ul>
            </div>
            <div className='big-rest-container'>
                <ResultsContainer/>
            </div>
        </div>
    </div>
);



    


export default SearchPage;