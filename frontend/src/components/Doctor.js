import React from 'react'
import { CCard } from '@coreui/react';
import { CCardImage } from '@coreui/react';
import { CCardBody,CCardTitle, CCardText,CButton } from '@coreui/react';
import './Doctor.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// function Udoctor () {


//   const [userData, setUserData] = useState(null);
//   const name=  localStorage.getItem("username")// retrieve the user ID from the state or cookie
//   // console.log(userId)
//   useEffect(() => {
//     // fetch the user data from the server using Axios
//     const fetchData = async () => {
//       const response = await axios.get(`http://127.0.0.1:8000/api/user?username=${name}`);
//       setUserData(response.data);
//       console.log(userData)
//     }

//     fetchData();
//   }, [name]);

//   return (
//     <>
//       {userData && <Doctor userData={userData} />}
//     </>
//   )
// }

const Doctor =()=>{
  const [userData, setUserData] = useState(null);
  const name=  localStorage.getItem("username")

    useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://127.0.0.1:8000/api/user?username=${name}`);
      setUserData(response.data);
      console.log(userData)
    };

    fetchData();
  }, [name]);
  // const udata = new Udoctor();
  return (
    <>
<div className='main-profile'>
    <CCard style={{ width: '18rem' }}>
<CCardImage orientation="top" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"/>
<CCardBody>
  <CCardTitle>Doctor details</CCardTitle>
  <CCardText>
  {/* <div>
  <p>Name: {userData.id}</p>
  <p>Username: {userData.username}</p>
  <p>First Name: {userData.first_name}</p>
  <p>Last Name: {userData.last_name}</p>
  <p>Email: {userData.email}</p>
  </div> */}
   

  </CCardText>

  <CButton href="#">Go somewhere</CButton>

</CCardBody>

</CCard>

</div>

    </>
  )
}

export default Doctor




// function Udoctor() {
//   const [userData, setUserData] = useState(null);
//   const userId = localStorage.getItem("username");

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await axios.get(`http://127.0.0.1:8000/api/user?username=${userId}`);
//       setUserData(response.data);
//       console.log(userData)
//     };

//     fetchData();
//   }, [userId]);

//   return (
//     <>
//       {userData && (
//         <div className='main-profile'>
//           <CCard style={{ width: '18rem' }}>
//             <CCardImage orientation="top" src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" />
//             <CCardBody>
//               <CCardTitle>Doctor details</CCardTitle>
//               <CCardText>
//                 <p>Name: {userData.name}</p>
//                 <p>first_name: {userData.first_name}</p>
//                 <p>LastName: {userData.last_name}</p>
//                 <p>Email: {userData.email}</p>
//               </CCardText>
//               <CButton href="#">Go somewhere</CButton>
//             </CCardBody>
//           </CCard>
//         </div>
//       )}
//     </>
//   );
// }


// export default Udoctor;



// {
//   udata.userData.map((data,index) =>(
//     <div key={data.id}>
//       <p>data.id</p>
//       <p>data.username</p>
//       <p>data.email</p>
//       <p>data.first_name</p>
//       <p>data.last_name</p>
//     </div>
//   ))
// }