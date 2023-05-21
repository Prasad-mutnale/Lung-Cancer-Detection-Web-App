import React from "react";
import './component.scss';
// import state from '../staute.jpg';
import avatar from "../images/doctor.jpg"
import medical from "../images/medical.jpg";
import dc1 from "../images/dc.jpg";
import dc2 from "../images/dc2.jpg"
import dc3 from "../images/dc3.jpg"
  import { Form } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.css';
const Home =()=>
{
  
    return(
      
      <div>
      <div class="car">
 <div id="myCarousel" class="carousel slide carousel-fade" data-bs-ride="carousel">
    {/* <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div> */}
    
    <div class="carousel-inner rounded-3 shadow-4-strong">
      <div class="carousel-item active">
         <img  class="bd-placeholder-img" width="100%" height="100%" src={medical}/>
       
         <div class="container" >
          <div class="carousel-caption text-start text-primary">
            <h1>LUNG CANCER DETECTION</h1>
            {/* <p>welcome to kle Technological University</p> */}
            {/* <p><a id="card"  class="btn" href="#" onClick={notify}>Login</a></p> */}
          </div>
        </div>
      </div>

      <div class="carousel-item">
         <img  class="bd-placeholder-img" width="100%" height="80%" src="../assets/statue5.jpg"/>
       
         <div class="container">
          <div class="carousel-caption text-danger">
            <h1>Coordinator</h1>
            <p>upload details of the students</p>
            <p><a id="card" class="btn" href="#">Login</a></p>
          </div>
        </div>
      </div>

      <div class="carousel-item">
        <img  class="bd-placeholder-img" width="100%" height="60%" src="../assets/statue6.jpg"/>
       
        <div class="container">
          <div class="carousel-caption text-end text-danger">
            <h1>One more for good measure.</h1>
            <p>creating knowledge with values</p>
            <p><a id="card" class="btn" href="#">sign up</a></p>
          </div>
        </div>
      </div>
    </div>
    
<br/>
<br/>
<br/>
   
    {/* <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> */}
  </div>
</div>
<div class="intro">
  <div class="container text-start text-light">
    <div class="box">
      <div>
      <h1>welcome to our platform</h1>
      <p>Dr. Stephanie Wosniack is is dedicated to providing her patients with the best possible care. 
        We at MediCare are focused on helping you. After receiving successful care for various aches and pains over the years,
         Dr. Woshiack found her calling to help others get well.</p>
         <div class="container1">
    {/* <div class="row1">
      <div class="dugc-mem">
        <a href="/lab" role="button" class="nav-op btn  btn-block text-center">
          <span><i class="fa fa-users"></i></span>
          <br/>Make apointment</a>
      </div>
      <div class="dugc-mem">
        <a href="/upload" role="button" class="nav-op btn  btn-block text-center">
          <span><i class="fa fa-user"></i></span>
          <br/>Consult Doctor</a>
      </div> */}
      {/* <div class="dugc-mem">
        <a href="/friends" role="button" class="nav-op btn  btn-block text-center">
       <span><i class="fa fa-user"></i></span>
       <br/>view Patient</a>
      </div> */}
    {/* </div> */}
  </div>
         </div>
    <div class="btImage">
    <img src="https://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2015/12/doktorka.png" alt=""/>
    </div>
    </div>
    </div>
  </div>

<div class="container">
<div class="grid-container">
{/* <div class="girdItem1"><div class="card text-bg-dark">
  <img src={avatar} class="card-img" alt="..."/>
  <div class="card-img-overlay">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div></div> */}

{/* <div class="girdItem"><div class="card mb-3" >
  <div class="row g-0">
    <div class="col-md-4">
      <img src={avatar} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="bg-primary card-body text-light">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div></div> */}

  <div class="girdItem2">
 <div class="card mb-3">
  <img src={dc1} class="card-img-top" alt="..."/>
  <div class="bg-primary card-body text-light">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
</div>
  </div>
  <div class="girdItem3">
    <div class="card">
<img src={dc2} class="card-img-bottom" alt="..."/>
  <div class="bg-primary card-body text-light">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
 
</div>
  </div>
  <div class="girdItem4">
    <div class="card">
<img src={dc3} class="card-img-bottom" alt="..."/>
  <div class="bg-primary card-body text-light">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
  </div>
 
</div>
  </div>
  {/* <div class="girdItem">
    <div class="card text-center">
  <div class="card-header">
    Featured
  </div>
  <div class="bg-primary card-body text-light">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-muted">
    2 days ago
  </div>
</div></div> */}

</div>
</div>
 <br/>
  

  </div>
    
    );

}

export default Home;
