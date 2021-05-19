import React from 'react';
import Totalamt from './Totalamt.jsx';
import Discount from './Discount.jsx';
import Contact from './Contact.jsx';


export default function Cart(props) {
    function increaseValue(){
      var count=parseInt(prompt("enter value among 1,2,3"));
      var cartValue=document.getElementById(props.id1).textContent
      var cartVal=parseInt(cartValue)
      var itemvalue=document.getElementById(props.id2).textContent
      var itemcost=parseFloat(itemvalue)
      var total=document.getElementById('product_total_amt').textContent
      var prod_amt=parseFloat(total)
      var Totalamt=document.getElementById('total_cart_amt').textContent
      var tot_amt=parseFloat(Totalamt)


      if(count==1 || count==2 || count==3){
          if(cartVal==5){
              alert("You Cannot Add Morethan 5 items ");
          }
          else{
          cartVal=cartVal+1
          document.getElementById(props.id1).innerHTML=cartVal
          if(count==1){
            document.getElementById(props.id2).innerHTML=itemcost+99;
            document.getElementById("product_total_amt").innerHTML=prod_amt+99;
            document.getElementById("total_cart_amt").innerHTML=tot_amt+99+50;

          }
          else if(count==2){
                document.getElementById(props.id2).innerHTML=itemcost+199;
                document.getElementById("product_total_amt").innerHTML=prod_amt+199;
                document.getElementById("total_cart_amt").innerHTML=tot_amt+199+50;
    
              }
              else if(count==3){
                document.getElementById(props.id2).innerHTML=itemcost+299;
                document.getElementById("product_total_amt").innerHTML=prod_amt+299;
                document.getElementById("total_cart_amt").innerHTML=tot_amt+299+50;
    
              }    
          
            }
        }
        
    }
    function decreaseValue(){
        var count=parseInt(prompt("enter value among 1,2,3"));
        var cartValue=document.getElementById(props.id1).textContent
        var cartVal=parseInt(cartValue)
        var itemvalue=document.getElementById(props.id2).textContent
        var itemcost=parseFloat(itemvalue)
        var total=document.getElementById('product_total_amt').textContent
        var prod_amt=parseFloat(total)
        var Totalamt=document.getElementById('total_cart_amt').textContent
        var tot_amt=parseFloat(Totalamt)
  
  
        if(count==1 || count==2 || count==3){
            if(cartVal==0){
                alert("You Cannot have 0 items ");
            }
            else{
            cartVal=cartVal-1
            document.getElementById(props.id1).innerHTML=cartVal
            if(count==1){
              document.getElementById(props.id2).innerHTML=itemcost-99;
              document.getElementById("product_total_amt").innerHTML=prod_amt-99;
              document.getElementById("total_cart_amt").innerHTML=tot_amt-99-50;
  
            }
            else if(count==2){
                  document.getElementById(props.id2).innerHTML=itemcost-199;
                  document.getElementById("product_total_amt").innerHTML=prod_amt-199;
                  document.getElementById("total_cart_amt").innerHTML=tot_amt-199-50;
      
                }
                else if(count==3){
                  document.getElementById(props.id2).innerHTML=itemcost-299;
                  document.getElementById("product_total_amt").innerHTML=prod_amt-299;
                  document.getElementById("total_cart_amt").innerHTML=tot_amt-299-50;
      
                }    
            
              }
              var itemvalue=document.getElementById(props.id2).textContent
              var itemcost=parseFloat(itemvalue)
              var total=document.getElementById('product_total_amt').textContent
              var prod_amt=parseFloat(total)
              var Totalamt=document.getElementById('total_cart_amt').textContent
              var tot_amt=parseFloat(Totalamt)
              var cartValue=document.getElementById(props.id1).textContent
              var cartVal=parseInt(cartValue)
              if(itemcost<0){
                document.getElementById(props.id2).innerHTML=0;
              }
              if(prod_amt<0){
                document.getElementById('product_total_amt').innerHTML=0;
              }
              if(tot_amt<0){
                document.getElementById('total_cart_amt').innerHTML=0;
              }
              
          }

    }
      
     function wish1(){
       alert("Your Item Added to WishList");
     }   
     function remove1(){
       alert("Your Item HaveBeen Removed");
     }    
    
    return (
        <div class="card p-4">
        <h2 class="py-4 font-weight-bold">{props.name}</h2>
        <div class="row">
            <div class="col-md-3 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
              <h6>{props.domain}</h6>
              <img src={props.image} alt="image"/>

            </div>
            <div class="col-md-6">
                <div class="row gx-1 align-items-center">
                    <div class="col-md-3 bg-light m-1 shadow">
                        <center>
                        <h6>1 month</h6>
                        <h2>{props.cost1}</h2>
                        <h6>/month</h6>
                        </center>
                    </div>
                    <div class="col-md-3 bg-light m-1 shadow">
                        <center>
                        <h6>12 month</h6>
                        <h2>{props.cost2}</h2>
                        <h6>month</h6>
                        </center>
                    </div>
                    <div class="col-md-3 bg-light m-1 shadow">
                        <center>
                        <h6>4 year</h6>
                        <h2>{props.cost3}</h2>
                        <h6>/month</h6>
                        </center>
                    </div>
                </div>
            </div>
             <div class="col-3">
                <ul class = "pagination">
                    <li class = "page-item"> <button class="page-link" onClick={decreaseValue}>-</button> </li>
                   
                    <li class = "page-item active"> <p class="page-link" href="#" id={props.id1}> 0 </p> </li>
                    <li class = "page-item"> <button class="page-link" onClick={increaseValue}>+ </button> </li>
                </ul>
                </div> 
                                                    
            </div>
            <br/>
            <div class="row">
            <div class="col-8 d-flex justify-content-between remove_wish">
                <button  onClick={remove1}><i class="fas fa-trash-alt"></i> REMOVE ITEM</button>
                <button onClick={wish1}><i class="fas fa-heart" ></i>MOVE TO WISH LIST </button>
                </div>
                <div class="col-4 d-flex justify-content-end price_money">
                <h3>$<span id={props.id2}>0.00 </span> </h3>
                </div>
                </div>
                
        </div>
    );
}
