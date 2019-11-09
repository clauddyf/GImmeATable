import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const Greeting = ({ currentUser, logout, openModal}) => {
    const sessionLinks = () => (
        <nav className='login-signup'>
            <Link onClick={() => openModal('login')} to="/login">Sign in</Link>
            &nbsp; &nbsp;
            <Link onClick={() => openModal('signup')} to='/signup'>Sign up!</Link>
        </nav>
    );

    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className='header-name'>Ready to Eat?, {currentUser.username}!</h2>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;