import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';


const Greeting = ({ currentUser, afterLoggedIn, logout, openModal}) => {
    const sessionLinks = () => (
        <nav className='login-signup'>
            <Link className = 'nav-signin' onClick={() => openModal('login')} to="/login">Sign in</Link>
            &nbsp; &nbsp;
            <Link className = 'nav-signup' onClick={() => openModal('signup')} to='/signup'>Sign up!</Link>
        </nav>
    );

    currentUser = currentUser ? currentUser: afterLoggedIn
    
    const personalGreeting = () => (
        
        <hgroup className="header-group">
            <div className='header-name'>
                Ready to Eat, {currentUser.first_name}?!
            </div>
            <div className='profile-link-header'>
                <Link to={`/user/${currentUser.id}`} className='profile-link'>{currentUser.first_name}'s Profile</Link>
            </div>
            <button className='header-button' onClick={logout}>Log Out</button>
        </hgroup>
    );
    return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;