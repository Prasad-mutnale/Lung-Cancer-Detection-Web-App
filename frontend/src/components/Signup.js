import React from "react";
import "./component.scss";
// import { FiSearch,FiFacebook,FiTwitter,FiLinkedin } from "react-icons/fi";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import {FaUserCircle,FaUser} from "react-icons/fa"
import {MdEmail,MdDriveFileRenameOutline} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri"

const Signup =()=>{
  const [Values, setdata] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  })
  const navigate = useNavigate();
  const setVal = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setdata((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Values.password === Values.password2) {
      const userdata2 = {
        first_name: Values.first_name,
        last_name: Values.last_name,
        username: Values.username,
        email: Values.email,
        password: Values.password,
        password2: Values.password2,
      }
      console.log(userdata2);
      console.log("user data defined")

      axios.post("http://127.0.0.1:8000/api/register/", userdata2)
      .then((res)=>{
          console.log("register successfully",res)
          alert("Your Sign Up is successfull")
          navigate('/login')
      })
      .catch((error)=>{
          console.log("Already registered",error)
      })
    }
    else {
      alert("Password does not match")
    }
  }
  

 

    return (
  

      <section class="vh-100">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
            <div class="" >
              <div class="card-body p-md-5">
                <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                    <form class="mx-1 mx-md-4">
                      <div class="d-flex flex-row align-items-center mb-2">

                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">FirstName</label>
                          <input type="text" id="form3Example1c" class="form-control" name="first_name" value={Values.first_name} onChange={setVal} />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">

                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">LastName</label>
                          <input type="text" id="form3Example1c" class="form-control" name="last_name" value={Values.last_name} onChange={setVal} />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">


                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example1c">UserName</label>
                          <input type="text" id="form3Example1c" class="form-control" name="username" value={Values.username} onChange={setVal} />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">

                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example3c">Email ID</label>
                          <input type="email" id="form3Example3c" class="form-control" name="email" value={Values.email} onChange={setVal} />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">
                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4c">Password</label>
                          <input type="password" id="form3Example4c" class="form-control" name="password" value={Values.password} onChange={setVal} />
                        </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-2">

                        <div class="form-outline flex-fill mb-0">
                          <label class="form-label" for="form3Example4cd">Confirm Password</label>
                          <input type="password" id="form3Example4cd" class="form-control" name="password2" value={Values.password2} onChange={setVal} />
                        </div>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button class="btn btn-primary" onClick={handleSubmit} id="lobtn" type='button'>Sign Up</button>
                      </div>
                    </form>
                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

);
}
export default Signup;
