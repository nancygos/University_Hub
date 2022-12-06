import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Navbar() {
  return (
    <>
      <nav>
        <div className='navContainer'>
          <div className='logo'> <Link to="/" id="link"> <img src={logo} alt='UniversityHub' className='logoImg'/> </Link></div>
          <ul>
            <li> <a href="#cardsWrapper" id="link" className='list'>College</a> </li>
            <li><a href="#examContainer" id="link" className='list'>Exams</a> </li>
    {/* Scroller */}   
            <li><a href="#cardsWrapper" id="link" className='list'>Courses</a></li>
            <li><Link to="/contact" id="link" className='list'>Contact Us</Link></li>
          </ul>
          <div className='login'> <button className='login-signUp-btn'> <Link to='/login' id='link'>Login/SignUp</Link> </button> </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar