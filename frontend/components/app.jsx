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
import ReservationComposeContainer from './reservation/reservation_container'


const App = () => {

        return(
            <div>
                <header className="nav-bar">
                    <Link to="/" className='header-link'>
                        Gimme A Table
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
                     {/* <Route path="restaurants/:restId/new_res" component={ReservationComposeContainer} /> */}
                 </Switch>
                </ul>
                <div className='footer-div'>
                {/* <footer className='footy'>
                    <p>Created by Claudius Solomon</p>
                    <a href="#" class="fa fa-linkedin"></a>
                    <hr/>
                    <a href="#" class="fa fa-google"></a>
                </footer> */}
            </div>
            </div>
        );
}
    

export default withRouter(App);