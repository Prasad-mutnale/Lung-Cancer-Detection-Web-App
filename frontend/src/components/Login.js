import React from 'react'
import './component.scss';
import { FiSearch,FiFacebook,FiTwitter,FiLinkedin } from "react-icons/fi";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import {FaUserCircle,FaUser} from "react-icons/fa"
// import {MdEmail,MdDriveFileRenameOutline} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"
// import 'bootstrap/dist/css/bootstrap.css';
const Login = () => {

  const [Values, setdata] = useState({
    username: "",
    password: "",
  })

  const [userName, setuserName] = useState('');

  // const [username,setU] = useState()
  // const [password,setP] = useState()

  // username= Values.username
  // password= Values.password
  

  const [error, setError] = useState('');
  const navigate = useNavigate();
  const setVal = (event) => {
    // const {name,value} = e.target;
    const name = event.target.name;
    const value = event.target.value;
    // event.preventDefault();

    // setdata({...data,[name]:value})
    setdata((prev) => {
      return { ...prev, [name]: value }
    })
  }

  


  const handleSubmit = async (e) => {
    e.preventDefault();


    const userdata = {
      username:Values.username,
      password:Values.password
    }

    console.log(userdata);
    console.log("user data defined")
    const {username,password} = Values;
    

    // axios.interceptors.response.use(
    //   (response) => {
    //     // Return response as-is for successful requests
    //     return response;
    //   },
    //   (error) => {
    //     // Customize error handling behavior for failed requests
    //     if (error.response.status === 400) {
    //       // Handle 401 Unauthorized errors
    //       console.log('Unauthorized');
    //     } else {
    //       // Use default error handling behavior for all other errors
    //       return Promise.reject(error);
    //     }
    //   }
    // );



     try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/',{ username, password });
      if (response.status === 200) {
        // Login successful
        console.log("---------------------------")
        console.log(response)
        const token = response.data.token;
        axios.defaults.headers.common['Authorization'] = `Token ${token}`;
        console.log(token)
        // localStorage.setItem("auth",response.data)
        // Store token in localStorage or session storage for later use
        // console.log(response.data.token)
        alert("logged in success")
        localStorage.setItem("auth",token)
        // const uname= username;
        // console.log(uname)
        // setuserName(uname);
        console.log("userName", username)

        localStorage.setItem("username", username)
        navigate('/doctor_profile')

        // navigate('doctor_profile')
      } else {
        alert("error in logged", response.status)
      }
    } catch (error) {
      // console.log("no way", error.response.status)
      alert("Invalid Credential")
    }
  }



  //   try {
  //     const response = await axios.post('http://127.0.0.1:8000/api/login/',{ userdata.username, userdata.password});

  //     if (response.data.success) {
  //       alert('Logged in successfully!');
  //     } else {
  //       setError(response.data.error);
  //     }
  //   } catch (error) {
  //     setError('An error occurred during login.');
  //     console.error(error);
  //   }
  // };




  
    return (
    <>
    <section class="vh-100 mt-4 mb-6">
    <div  class="container-fluid h-custom mt-4">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          class="img-fluid" alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
          <div class="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
           
            <p class="lead fw-normal mb-0 me-3"><b>Sign in</b></p>
            {/* <button type="button" class="btn btn-primary btn-floating mx-1">
              <FiFacebook/>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
            <FiLinkedin/>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
             <FiTwitter/>
            </button> */} 
          </div>

          <div class="divider d-flex align-items-center my-2">
            <p class="text-center fw-bold mx-3 mb-0"></p>
          </div>

       
          <div class="form-outline mb-4">
            {/* <label class="form-label" for="form3Example3" >Username</label> */}
            <div class="d-flex flex-row">
            <i class="fa-lg me-2  mt-2"><FaUser/></i>
            <input type="text" id="form3Example3" className="form-control form-control-lg"
              placeholder="Enter a your username"  name="username" value={Values.username} onChange={setVal}   />
              </div>
          </div>

          <div class="form-outline mb-3">
            {/* <label class="form-label" for="form3Example4">Password</label> */}
            <div class="d-flex flex-row">
            <i class="fa-lg me-2 mt-2"><RiLockPasswordFill/></i>
            <input type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password"  value={Values.password} onChange={setVal} name="password"   />
              </div>
          </div>

          <div class="d-flex justify-content-between align-items-center">
          
            {/* <div class="form-check mb-0"> */}
              {/* <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" /> */}
              {/* <label class="form-check-label" for="form2Example3">
                Remember me
              </label> */}
            {/* </div> */}
            {/* <a href="#!" class="text-body">Forgot password?</a> */}
          </div>

          <div class="text-center text-lg-start mt-2 pt-2">
             <button class="m-4 btn nav-op" onClick={handleSubmit} id="lobtn"  type='button'>Login</button>
             {/* <input type="button" className="btn btn-primary" onClick={handleSubmit} value="Login" /> */}
            <p class="small fw-bold mt-2 pt-1 mb-0 me-2">Don't have an account?  
            <Link to="/register"
                class="link-danger">Register</Link></p>
          </div>

        </form>
      </div>
    </div>
  </div>
  
</section>
    </>
  );

}

export default Login;
