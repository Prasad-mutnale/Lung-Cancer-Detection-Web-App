// import logo from './logo.svg';
import './App.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FiAlignJustify } from "react-icons/fi";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import logo from '../src/images/logo.png';
import axios from 'axios';
import Signup from './components/Signup';





function Navbar() {
  const [darkmode, setDarkmode] = useState(false);
  const auth = localStorage.getItem('auth');
  const navigate = useNavigate();
  const [isLoggedOut, setIsLoggedOut] = useState(false);



  const signup = ()=>{
    // navigate('register')
  }

  const login = ()=>{
    // navigate('/login')
  }

  const logout = () => {
    console.log(auth);
    const token = auth;
    localStorage.clear();
    alert("Your logout successfully");
    // navigate("/");  
}
  
  return (

    <div class="contain">
      <nav className='nav-head2  fixed-top'>
        <ul>
          
          <div className='icon-logo'>
               <img src={logo} width='200px' style={{marginTop:"0"}} ></img>
            </div>
        
        </ul>
        <div className='nav-end'>
          <div class="nav-section nav-des-section">
          
            <div class="op-end">

              
              <div class="me-4"><FiSearch class="me-1" />
                <input
                  type="text"
                  placeholder="Search.."
                /></div>
              {/* <div class="me-4"
                onClick={() => {
                  if (darkmode) {
                    document.body.classList.remove("dark");
                    setDarkmode(false);
                  } else {
                    document.body.classList.add("dark");
                    setDarkmode(true);
                  }
                }}
              >
                {darkmode ? (
                  <RiSunFill className="text-light" />
                ) : (
                  <RiMoonFill className=" dark:text-white" />
                )}
              </div> */}

              {
                auth ? <>


                  <Link to="/"> <button type="button" class="nav-op btn" onClick={logout}>Logout</button></Link>
                </> : <>

                  <Link to="login"><button type="button" class="nav-op btn me-4 justify-content-md-end">Login</button></Link>
                  <Link to="register"> <button type="button" class="nav-op btn">Sign-Up</button></Link>
                </>
              }
            </div>
          </div>
        </div>

      </nav>
      <header class="nav-head">
        <ul>
          {
            auth ? <>
              <ul>
                <li>
                  <Link to="doctor_profile" >Doctors</Link>
                </li>
                <li>
                  <Link to="patient_form">Patients</Link>
                </li>

                <li>
                  <Link to="search">Search</Link>
                </li>
                <li>
                  <Link to="patientdata">All Patient data</Link>
                </li>
              </ul>

            </> : <>
              <li>
                <Link to="/">Home</Link>
              </li>

              <li> <Link to="services">Services</Link></li>
              {/* <li> <Link to="contact">About us</Link></li> */}
            </>
          }
        </ul>

      </header>
      {/* <About/> */}

    </div>

  );
}


export default Navbar;
