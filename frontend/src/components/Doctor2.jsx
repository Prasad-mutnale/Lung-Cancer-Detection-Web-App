import React from 'react'
import { CCard } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardBody,CCardTitle, CCardText,CButton } from '@coreui/react';
import './Doctor.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import doctor from './doctor456.jpg';
const Doctor2 = () => {
    const [userData, setUserData] = useState('');
    const name = localStorage.getItem('username');
    console.log(name)
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://127.0.0.1:8000/api/user/?username=${name}`);
          setUserData(response.data);
          console.log(userData)
        }  catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [name]);
    console.log(userData)
    return (
        <>
        <div className='main-profile'>
            <CCard style={{ width: '18rem' }}>
        <CCardImage orientation="top" src={doctor}/>
        <CCardBody>
            <center>
          <CCardTitle>Doctor details</CCardTitle></center>
          <CCardText>


         <p> Id: <b>{userData.id}</b></p>
         <p> Name:<b> {userData.username}</b></p>
         <p> First Name:<b> {userData.first_name}</b></p>
         <p> Last Name:<b> {userData.last_name}</b></p>
         <p> Email: <b>{userData.email}</b></p>
          
          
          </CCardText>
        
    
        
        </CCardBody>
        
        </CCard>
        
        </div>
        
        </>
    );
}

export default Doctor2