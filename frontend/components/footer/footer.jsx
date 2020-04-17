import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='main-footer-div'>
    <h1>&#169;GimmeATable Created by Claudius E. Solomon</h1>
    <div className='footer-div'>
        <div className='technology-row'>
            <h3>Technology Used</h3>
            <div className='tech-list'>
                PostgreSQL   
            </div>
            <div className='tech-list'>
                Ruby on Rails
            </div>
            <div className='tech-list'>
                Javascript
            </div>
            <div className='tech-list'>
                React/Redux
            </div>
            <div className='tech-list'>
                HTML
            </div>
            <div className='tech-list'>
                CSS
            </div>
        </div>
        <div className='bio-div'>
            <h2>About Me</h2>
            <ul>
                <li>
                    Born and raised in Silver Spring, MD. 
                </li> 
                <li>
                    National Society of Black Engineers LSU 2016.
                </li>
                <li>
                    Currently residing in San Francisco.
                </li>
                <li>
                    Hacker-In-Residence App Academy.
                </li>
            </ul>
        </div>

        <div className='about-me'>
            <h2>GimmeATable is inspired by OpenTale.com</h2>
            <div className='contact-me'>
                {/* <div className='icon-img'>
                </div> */}
                <a href="https://www.linkedin.com/in/claudius-solomon-ba3a2494/">
                    <img src="linkedin.png" className='contact-img' alt=""/>
                    LinkedIn
                </a>
            </div>
            <div className='contact-me'>
                {/* <div className='icon-img'>
                </div> */}
                <a href="https://github.com/clauddyf">
                    <img src="github.png" className='contact-img' alt=""/>
                    GitHub
                </a>
            </div>
            <div className='contact-me'>
                {/* <div className='icon-img'>
                </div> */}
                <a href="https://angel.co/claudius-solomon">
                    <img src="angellist.png" className='contact-img' alt=""/>
                    AngelList
                </a>
            </div>
        </div>
    </div>

    </div>
)

export default Footer;