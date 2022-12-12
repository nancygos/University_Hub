import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';

function Login() {
  const [userName , setUserName] = useState("");
  const [userPassword , setUserPassword] = useState("");

  // let name , value ;
  // const handleChange = (e) =>{
  //   name = e.target.name;
  //   password=e.target.password;
    // setUser({...user , [name]:value});
  // }
  const handleNameChange = (e) =>{
    setUserName(e.target.value);
  }
  const handlePasswordChange = (e) =>{
    setUserPassword(e.target.value);
  }
  const loginBtn = () =>{
    if(userName && userPassword ) alert(`Name: ${userName} and Password: ${userPassword}`);
    else{
      alert("Please fill all the details.");
    }
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
          <h3>Welcome Back !</h3>
          <input type="email" placeholder="Enter your email id" className='loginInput' onChange={handleNameChange} />
          <input type="password" placeholder="Enter your password" className='loginInput'  onChange={handlePasswordChange} />
          <h4 className='blue'>Forgot password ?</h4>
          <button className='loginbtn' onClick={loginBtn} >Login</button>
          <h4>New to UniversityHub? <span className='blue'> <Link to="/signUp" className='signupLink'>Signup</Link> </span> </h4>
        </div>
      </div>
    </>
  )
}

export default Login