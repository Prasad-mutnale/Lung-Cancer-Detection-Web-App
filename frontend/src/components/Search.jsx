import React from 'react'

import './Search.css'
import { useState } from 'react'
import axios from 'axios'

const Search = () => {


  const [searchPatient, setSearchPatient] = useState('')
  const [patients, setPatients] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchPatient) {
      alert("Please enter patient name to search")
    }
    else {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/search_patient/?name=${searchPatient}`);
        // console.log(response.data);
        if (response.status === 200) {
          alert(`${searchPatient} details found`)
          setPatients(response.data);
        }
      } catch (error) {
        alert(`${searchPatient} data doesn't exist`);
        console.error(error);
      }

    }

  };











  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            name='name'
            value={searchPatient}
            onChange={(e) => setSearchPatient(e.target.value)}
          />
          <button
            className="searchButton"
            type="button"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>


      </div>

     


      
    
    {
      patients.length > 0 ? (
    
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
          </tr>
        )}
        </tbody>
        </table>
       ) : (
        <h2> </h2>
      )}
    </>
  )
}

export default Search