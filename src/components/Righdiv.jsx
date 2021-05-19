import React from 'react';
import Totalamt from './Totalamt.jsx';
import Discount from './Discount.jsx';
import Contact from './Contact.jsx';

class Rightdiv extends React.Component{
    render(){
        return(
            <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <Totalamt/>
                <Discount/>
                <Contact/>
            </div>
            
        );
    }
}
export default Rightdiv;



