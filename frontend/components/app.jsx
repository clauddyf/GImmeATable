import React from 'react';
import { Route, Redirect, Switch, Link, withRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container'
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute} from '../util/route_util';
import Modal from './modal/modal';
import RestaurantShowContainer from './restaurant_show/restaurant_show_container';
import LocationShowContainer from './location/location_show_container';
import Splash from './splash/splash';
import Footer from './footer/footer';
import ReservationComposeContainer from './reservation/reservation_container';
import UserProfileContainer from './userprofile/profile_container';
import RestaurantsIndex from './restaurant_show/restaurants_index';
import SearchResults from './search/search_results';
import SearchForm from './search/restaurant_search';
import SearchContainer from './search/restaurant_search_container'
require("react-datepicker/dist/react-datepicker.css");
// import 'react-datepicker/dist/react-datepicker.css';



const App = () => {

        return(
            <div>
                <header className="nav-bar">
                    <Link to="/" className='header-link'>
                        <div className='logo-img'>
                            <img src="/table.png" alt=""/>
                        </div>
                        <div className='logo-name'>
                            Gimme A Table 
                        </div>
                    </Link>
                    <GreetingContainer/>
                </header>
                    <Route exact path='/' component={Splash}/>
                    <Route exact path='/login' component={Splash}/>
                    <Route exact path='/signup' component={Splash}/>
                 <Modal/>
                <ul>
                 <Switch>
                     <Route path="/restaurants/:restId" component={RestaurantShowContainer} />
                 </Switch>
                 <Switch>
                     <Route path="/locations/:locId" component={LocationShowContainer} />
                 </Switch>
                 <Switch>
                     <Route path="/user/:userId" component={UserProfileContainer} />
                 </Switch>
                 <Switch>
                     <Route path="/results" component={SearchContainer} />
                 </Switch>
                </ul>
                <Footer/>
            </div>
        );
}
    

export default withRouter(App);