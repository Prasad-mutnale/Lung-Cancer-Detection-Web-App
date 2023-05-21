import React from "react";
import './component.scss';
// import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Patientdata.css'
const Patient = () => {


  const navigate = useNavigate();
  const [patientdata, setPatient] = useState(
    {
      name:"",
      email:"",
      dob:"",
      state:"",
      phone_number: "",
      gender:"",
      location:"",
      pimage:null,
    }
  ) 
  const setVal = (event) => {
    // const {name,value} = e.target;
    const name = event.target.name;
    const value = event.target.value;
    // event.preventDefault();

    // setdata({...data,[name]:value})
    setPatient((prev) => {
      return { ...prev, [name]: value }
    })

    
  }

  const setImage = (event) => {
    setPatient(prev=> ({
      ...prev,
      pimage: event.target.files[0]
  }));
  }

  // const predict = ()=>{
  //   console.log(patientdata)
  // }



  const patientformdata = new FormData();
  patientformdata.append('name', patientdata.name);
  patientformdata.append('email', patientdata.email);
  patientformdata.append('dob', patientdata.dob);
  patientformdata.append('state', patientdata.state);
  patientformdata.append('gender', patientdata.gender);
  patientformdata.append('phone_number', patientdata.phone_number);
  patientformdata.append('location', patientdata.location);
  patientformdata.append('pimage', patientdata.pimage); 

  // const {fname,email,dob,state,location,pimage} = patientdata;
  const predict = async (e) => {
    e.preventDefault();

    console.log(patientdata)

    const userdata = {
      name: patientdata.name,
      email: patientdata.email,
      dob: patientdata.dob,
      phone_number: patientdata.phone_number,
      state: patientdata.state,
      gender: patientdata.gender,
      location: patientdata.location,
      pimage: patientdata.pimage,
    }

    
     try {
      const response = await axios.post(' http://127.0.0.1:8000/api/patient/', patientformdata);
      console.log(response.status)
      console.log(response)
      if (response.status===201) {
        alert("Patient details added successfully")
        console.log("data is ",response.data);
        navigate('/patientdata')
      }else 
      {
        alert("file not found", +response.status);
      } 

       
    } catch (error) {
      alert("Invalid Credential")
    }
  }




  console.log(patientdata)

  return (
    <section class="vh-90 mb-4">
      <div class="container h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-9">

            <h1 class="text-primary mb-4">Fill Patient Health details</h1>

            <div id="car" class="car">
              <div class="card-body text-primary">

                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Full name</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <input type="text" name="name" className="form-control "  value={patientdata.name}  onChange={setVal}/>

                  </div>
                </div>

                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Email Id</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <input type="text" name="email" class="form-control" value={patientdata.email}  onChange={setVal}/>

                  </div>
                </div>

                <hr class="mx-n3" />
                <div class="row align-items-center pt-4 pb-3">
                  
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Date of Birth</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <input type="date" name="dob" class="form-control" value={patientdata.dob}  onChange={setVal}/>

                  </div>

                  
                </div>



                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">State</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <input type="text" name="state" class="form-control "  value={patientdata.state}  onChange={setVal}/>

                  </div>
                </div>

                <hr class="mx-n3" />


                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Phone Number</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <input type="text" name="phone_number" className="form-control"  value={patientdata.phone_number}  onChange={setVal}/>

                  </div>
                </div>
                <div class="row align-items-center pt-4 pb-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Gender</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <select class="form-select" name="gender" aria-label="Default select example" value={patientdata.gender}  onChange={setVal}>
                      <option selected>Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>

                  </div>
                </div>



                {/* <hr class="mx-n3" /> */}


                {/* <hr class="mx-n3" /> */}

               

                <hr class="mx-n3" />

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Address</h6>

                  </div>
                  <div class="col-md-9 pe-5">

                    <textarea class="form-control" rows="3" placeholder="Address" name="location" value={patientdata.location}  onChange={setVal}></textarea>

                  </div>
                </div>

                <div class="row align-items-center py-3">
                  <div class="col-md-3 ps-5">

                    <h6 class="mb-0">Upload CT image</h6>

                  </div>
                  <div class="col-md-9 pe-5">
                    <input class="form-control form-control-lg" id="formFileLg" type="file" name="pimage" onChange={setImage}/>
                    <div class="small text-muted mt-2 text-primary">Upload size should be less than 2mb</div>
                  </div>
                </div>

                <hr class="mx-n3" />

                <div class="px-5 py-4 center">
                  <button type="submit" class="btn nav-op " onClick={predict} >Submit</button>
                </div>

                

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
  }

export default Patient;
