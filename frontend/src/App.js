import logo from './logo.svg';

import './App.scss';
import Navbar from './Navbar';
import Sidebar from './sidebar';
import Footer from './footer';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Patient from './components/Patient';
import Login from './components/Login';
import Signup from './components/Signup';
import Doctor from './components/Doctor';
import Patientdata from './components/Patientdata';
import Search from './components/Search';
import Doctor2 from './components/Doctor2';
import Services from './components/Services';
import Editpatient from './components/Editpatient';


const  App =()=> {

return (
  
     <>
     <Router>
     <div class="mb-4"><Navbar/></div>
     <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='about' element={< About />}></Route>
            <Route exact path='patient_form' element={< Patient />}></Route>
            <Route exact path='login' element={<Login />}></Route>
            <Route exact path='register' element={<Signup />}></Route>
            <Route exact path='/doctor_profile' element={<Doctor2 />}></Route>
            <Route exact path='/patientdata' element={<Patientdata />}></Route>
            <Route exact path='/search' element={<Search />}></Route>
            <Route exact path='/services' element={<Services/>}></Route>
            <Route exact path='/editpatient/:id' element={<Editpatient/>}></Route>

          </Routes>
     </Router>

      </>
 
      );
      
  
}

export default App;
