import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


import Home from './components/Home.jsx';
import Pricing from './components/Pricing.jsx';
import Cart from './components/Cart.jsx';
import Contactus from './components/Contactus.jsx';
import Login from './components/Login.jsx';
import Aboutus from './components/Aboutus.jsx';


function App() {
  return (
    <BrowserRouter>
    <Route path="/" exact strict component={Home}/>
    <Route path="/Pricing" exact strict  component={Pricing}/>
    <Route path="/Cart" exact strict  component={Cart}/>
    <Route path="/Contactus" exact strict  component={Contactus}/>
    <Route path="/Login" exact strict  component={Login}/>
    <Route path="/Aboutus" exact strict  component={Aboutus}/>
    
    

    </BrowserRouter>
  );
}

export default App;
