import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container'
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';


const App = () => (
    <div>
        <header className="nav-bar">
            <Link to="/" className='header-link'>
                {/* <h1>Gimme A Table</h1> */}
                <img src="/2ndlogo.png" alt=""/>
            </Link>
            <GreetingContainer/>
        </header>
        <div className="splash">
        </div>
        <ul>
         <Modal/>
         <Switch>
            {/* <AuthRoute exact path='/login' component={LoginFormContainer}/>
            <AuthRoute exact path='/signup' component={SignupFormContainer}/> */}
         </Switch>
        </ul>
    </div>
);

export default App;