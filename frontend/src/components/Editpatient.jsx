import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const Editpatient = () => {
    const param = useParams();
    const [patientdata2, setPatient] = useState(
        {
          name:"",
          email:"",
          dob:"",
          state:"",
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









    const [patientdata, setUserData] = useState();




    // console.log(param.id)
    const id = param.id;
    console.log(id)

    useEffect(() => {
        const fetchData = async () => {
            // http://127.0.0.1:8000/api/edit_patient/?id=18
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/edit_patient/?id=${id}`);
                setUserData(response.data);
                // console.log(Userdata)
            } catch (error) {
                console.log(error);
            }

        };

        fetchData();
    }, []);

    console.log(patientdata)




    return (
<>
        {patientdata?.map(patient =>

                <section class="vh-100 mb-4"  >
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

                                                <input type="text" name="name" className="form-control " value={patient.name} onChange={setVal} />

                                            </div>
                                        </div>

                                        <div class="row align-items-center pt-4 pb-3">
                                            <div class="col-md-3 ps-5">

                                                <h6 class="mb-0">Email Id</h6>

                                            </div>
                                            <div class="col-md-9 pe-5">

                                                <input type="text" name="email" class="form-control" value={patient.email} onChange={setVal} />

                                            </div>
                                        </div>

                                        <hr class="mx-n3" />
                                        <div class="row align-items-center pt-4 pb-3">
                                            <div class="col-md-3 ps-5">

                                                <h6 class="mb-0">Date of Birth</h6>

                                            </div>
                                            <div class="col-md-9 pe-5">

                                                <input type="date" name="dob" class="form-control" value={patient.dob} onChange={setVal} />

                                            </div>
                                        </div>



                                        <div class="row align-items-center pt-4 pb-3">
                                            <div class="col-md-3 ps-5">

                                                <h6 class="mb-0">State</h6>

                                            </div>
                                            <div class="col-md-9 pe-5">

                                                <input type="text" name="state" class="form-control " value={patient.state} onChange={setVal} />

                                            </div>
                                        </div>

                                        <hr class="mx-n3" />
                                        <div class="row align-items-center pt-4 pb-3">
                                            <div class="col-md-3 ps-5">

                                                <h6 class="mb-0">Gender</h6>

                                            </div>
                                            <div class="col-md-9 pe-5">

                                                <select class="form-select" name="gender" aria-label="Default select example" value={patient.gender} onChange={setVal}>
                                                    <option selected>Select Gender</option>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                    <option value="other">Other</option>
                                                </select>

                                            </div>
                                        </div>



                                        {/* <hr class="mx-n3" /> */}


                                        {/* <hr class="mx-n3" /> */}

                                        <div class="row align-items-center py-3">
                                            <div class="col-md-3 ps-5">

                                                <h6 class="mb-0">Address</h6>

                                            </div>
                                            <div class="col-md-9 pe-5">

                                                <textarea class="form-control" rows="3" placeholder="Address" name="location" value={patient.location} onChange={setVal}></textarea>

                                            </div>
                                        </div>

                                        <hr class="mx-n3" />

                                        <div class="row align-items-center py-3">
                                            <div class="col-md-3 ps-5">

                                                <h6 class="mb-0">Upload CT image</h6>

                                            </div>
                                            <div class="col-md-9 pe-5">

                                                <input class="form-control form-control-lg" id="formFileLg" type="file" name="pimage" onChange={setImage} />
                                                <div class="small text-muted mt-2 text-primary">upload size should be less than 2mb</div>

                                            </div>
                                        </div>

                                        <hr class="mx-n3" />

                                        <div class="px-5 py-4 end">
                                            <button type="submit" class="btn nav-op "  >Generate Report</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            )
        }
       </>
 
    
  )
}

export default Editpatient