import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Login() {
  return (
    <>
      <div className='loginContainer'>
        <div className='loginWrapper'>
          <div className='LogoWrapper'>
            <Link to="/"> <img src={logo} alt="logo" className='shrink' /> </Link> 
            {/* <h1>UniversityHub</h1> */}
            <ul className='logoTopDesign'>
              <li className='logoList'>Discover - &nbsp;</li>
              <li className='logoList'>Prepare - &nbsp;</li>
              <li className='logoList'>Achieve</li>
            </ul>
          </div>
          <h3>Welcome Back !</h3>
          <input type="email" placeholder="Enter your email id" className='loginInput'/>
          <input type="password" placeholder="Enter your password" className='loginInput' />
          <h4 className='blue'>Forgot password ?</h4>
          <button className='loginbtn'>Login</button>
          <h4>New to UniversityHub? <span className='blue'> <Link to="/signUp" className='signupLink'>Signup</Link> </span> </h4>
        </div>
      </div>
    </>
  )
}

export default Login