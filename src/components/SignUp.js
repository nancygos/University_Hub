import React from 'react';
import logo from './images/logo.png';
import {Link} from 'react-router-dom';

function SignUp() {
  let submitName = document.getElementById('submitName');
  const submitBtn =() =>{
    // if(submitName.innerText === '') alert("ko");
    alert(submitName.innerHTML);
  }

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
          <h3>Welcome, Create your accout</h3>
          <input type="name" placeholder="Name" className='loginInput' id='submitName'/>
          <input type="email" placeholder="Email" className='loginInput'/>
          <input type="number" placeholder="Phone" className='loginInput'/>
          <input type="name" placeholder="Current City" className='loginInput'/>
          <input type="password" placeholder="Create password" className='loginInput'/>

          <button className='signupBtn loginbtn' onClick={submitBtn} >SignUp</button>
        </div>
      </div>
    </>
  )
}

export default SignUp