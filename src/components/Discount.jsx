import React from 'react'

export default function Discount() {
    return (
        <div>
         
   

    <div class="discount_code mt-3 shadow">
    <div class="card">
    <div class="card-body">
    <a class="d-flex justify-content-between check" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Add a discount code (optional)
    <span><i class="fas fa-chevron-down pt-1"></i></span>
    </a>
    <div class="collapse" id="collapseExample">
    <div class="mt-3">
    <input type="text" name="" id="discount_code1" class="form-control font-weight-bold" placeholder="Enter the discount code"/>
    <small id="error_trw" class="text-dark mt-3">code is nazeera</small>
    </div>
    <button class="btn btn-primary btn-sm mt-3" onclick="discount_code()">Apply</button>
    </div>
    </div>
    </div>
    </div>
    
    
    </div>
    
    
    
    )
}
