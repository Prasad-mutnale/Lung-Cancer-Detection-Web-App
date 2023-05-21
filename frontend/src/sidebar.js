import React from "react";
 import "./App.scss";

 const sidebar =()=>
 {
    return (
        <div id="sidenav" class="d-flex flex-column flex-shrink-0 p-3 bg-light">
        <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
          <svg class="bi me-2" width="40" height="32"></svg>
          <span class="fs-4">Sidebar</span>
        </a>
        <hr/>
        <ul class="nav nav-pills flex-column mb-auto">
          <li class="nav-item">
            <a href="#" class="nav-link active" aria-current="page">
              <svg class="bi me-2" width="16" height="16"></svg>
              Home
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"></svg>
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"></svg>
              Orders
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"></svg>
              Products
            </a>
          </li>
          <li>
            <a href="#" class="nav-link link-dark">
              <svg class="bi me-2" width="16" height="16"></svg>
              Customers
            </a>
          </li>
        </ul>
        <div class="divider"></div>
        <div class="dropdown">
          <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2"/>
            <strong>mdo</strong>
          </a>
          <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
            <li><a class="dropdown-item" href="#">New project...</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    );
 }

export default sidebar;