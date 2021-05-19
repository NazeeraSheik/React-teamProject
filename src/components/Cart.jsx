
import React from 'react';
import Cartitems from './Cartitems.jsx';
import Rightdiv from './Righdiv.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return(
   
    <div class="container-fluid">
    <div class="row">
    <div class="col-md-10 col-11 mx-auto">
    <div class="row mt-5 gx-3">
  
    <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
       <Cartitems/>
    </div>
    
  
    <Rightdiv/>
    </div>
    </div>
    </div>
    </div>
  );
}

export default App;
