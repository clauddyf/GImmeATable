import React from 'react';
import SearchContainer from './restaurant_search_container';
import ResultsContainer from './search_results_container';

class SearchPage extends React.Component{
    constructor(props){
        super(props);
        debugger
    }
    render() {
        return (
        <div className='main-container'>
            {/* <div className='main-img'>
                <SearchContainer/>
            </div> */}
            <ResultsContainer/>
        </div>
        
        )
    }

}
// const SearchPage = function(){
debugger
// }
    


export default SearchPage;