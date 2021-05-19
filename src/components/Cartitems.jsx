import React from 'react';
import Carts from "./Carts.jsx";
class Cartitems extends React.Component{
    render(){
        return(
            <div>
            <Carts name="cartitem1" image="https://img.icons8.com/nolan/96/monitor.png"  domain="Single Web Hosting" cost1="$99" cost2="$89" cost3="$59" id1="text-box1" id2="itemval1"/>
            <hr/>
            <Carts name="cartitem2" domain="Email Hosting" image="https://img.icons8.com/nolan/50/email.png" cost1="$121" cost2="$77" cost3="$59" id1="text-box2" id2="itemval2"/>
            <hr/>
            <Carts name="cartitem3" domain="Cloud hosting" image="https://img.icons8.com/cute-clipart/50/000000/cloud.png" cost1="$111" cost2="$99" cost3="$49" id1="text-box3" id2="itemval3"/>
        
      </div>
        );
    }
}
export default Cartitems;