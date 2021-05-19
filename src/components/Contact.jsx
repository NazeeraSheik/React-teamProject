import React from 'react'

import { BrowserRouter, Route, Switch,Link } from 'react-router-dom';
export default function Contact() {
    return (
        <div>
              <div class="card">
        <img class="card-img-top" src="https://assets.pcmag.com/media/images/625942-best-web-hosting-services.jpg?thumb=y&width=810&height=456" alt="Card image cap"/>
        <div class="card-body">
          <p class="card-text">Welcome to the world where we help u to publish your websites....Happy hosting.</p>
        </div>
      </div>
      <br/>
      <div class="card">
        
        <div class="card-body">
            <img src="https://img.icons8.com/nolan/64/new-contact.png"/>
          <p class="card-text">Of You have any queries contact us here.</p>
          <Link to="/Contactus" className="button button2">Contactus Here</Link>
          <Link to="/" className="btn">Move to Home Page</Link>
          
        </div>
      </div>
    </div>
        
    )
}
