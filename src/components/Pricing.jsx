import React from 'react';
import '../App.css';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';

export default function Pricing() {
    return (
        <div>
        <div>
         <Header/>
         <br /> <br /> <br /> <br />
         
    <div className="wrapper">
    <div className="single-price">
        <h1>
            Basic
        </h1>
        <div className="price">
            <h2>
               <br/><br/> Single Web Hosting
            </h2>
        </div>
        <div className="deals">
            <h4>For 1 month- $91/month</h4>
            <h4>For 12 month- $99/month</h4>
            <h4>For 4 years- $59/month</h4>
        </div>
       <Link to="/Cart" className="button button2">Select</Link>
    </div> 
    <div className="single-price">
      <h1>
          Standard
      </h1>
      <div className="price">
          <h2><br/><br/>
          Email Hosting
          </h2>
      </div>
      <div className="deals">
          <h4>For 1 month- $99/month</h4>
          <h4>For 12 month- $89/month</h4>
          <h4>For 4 years- $59/month</h4>
      </div>
      <Link to="/Cart" className="button button2">Select</Link>
  </div> 
  <div className="single-price">
      <h1>
          Basic
      </h1>
      <div className="price">
          <h2>
              <br/><br/>
              Cloud Hosting
          </h2>
      </div>
      <div className="deals">
          <h4>For 1 month- $95/month</h4>
          <h4>For 12 month- $89/month</h4>
          <h4>For 1 month- $99/month</h4>
      </div>
      <Link to="/Cart" className="button button2">Select</Link>
  </div>

  </div>
  
  </div>

  </div>
    )
}
