import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Patientdata = () => {

  const [patients, setPatientsdata] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/list/')
      .then(response => {
        setPatientsdata(response.data.candidates);

      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  // console.log("hello1")

  // function EditPatient(id){
  //   alert("Editing...")
  //   navigate(`editpatient/${id}`)
    

  // }

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };
  console.log(patients)
  return (
    <>


  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ backgroundColor: '#f2f2f2' }}>ID</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Name</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Email</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Phone Number</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>DOB</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>State</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Gender</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Location</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Image</th>
          <th style={{ backgroundColor: '#f2f2f2' }}>Classified</th>
          {/* <th style={{ backgroundColor: '#f2f2f2' }}>Edit</th> */}

        </tr>
      </thead>
      <tbody>
      {patients.map(patient =>
          <tr key={patient.id}>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.id}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.name}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.email}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.phone_number}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.dob}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.state}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.gender}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.location}</td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}><a href={`http://127.0.0.1:8000/${patient.pimage}`}> View </a></td>
            <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}>{patient.classified}</td>
            {/* <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}><button type="button" class="btn btn-primary" onClick={()=>EditPatient(patient.id)}>Edit</button></td> */}
            {/* <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }}><Link to={`/editpatient/${patient.id}`} >Edit</Link></td> */}
          </tr>
        )}
        </tbody>

        </table>

       
    </>
  )
}

export default Patientdata