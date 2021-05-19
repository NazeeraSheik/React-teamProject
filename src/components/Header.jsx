import React from 'react';
import style3 from './style3.css';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
        <nav class="navbar navbar-expand-lg fixed-top navbar-scroll shadow-0" style={{backgroundColor : "#ffffff"}}>
  <div class="container">
    <a class="navbar-brand" href="#">Schemax</a>
    <button class="navbar-toggler ps-0" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
      aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="d-flex justify-content-start align-items-center">
        <i class="fas fa-bars"></i>
      </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarExample01">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
        <Link to="/" >Home</Link>
        </li>
        <li class="nav-item">
        <Link to="/AboutUs" >About US</Link>
        </li>
        <li class="nav-item">
        <Link to="/Pricing" >Pricing</Link>
        </li>
        <li class="nav-item active">
        <Link to="/Cart" >Cart</Link>
        </li>
        <li class="nav-item">
        <Link to="/Login" >Login</Link>
        </li>
        <li class="nav-item">
        <Link to="/Contactus" >Contact Us</Link>
        </li>
      </ul>
    <div style={{float:"right",position:"absolute",left:"83%"}}>
      <ul class="navbar-nav flex-row">
        <li class="nav-item">
          <a class="nav-link pe-3" href="#!">
            <i class="fab fa-youtube"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3" href="#!">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link ps-3" href="#!">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
      </div>
    </div>
  </div>
</nav>
  </div>

    );
}
