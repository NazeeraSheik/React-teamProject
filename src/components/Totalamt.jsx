import React from 'react'

export default function Totalamt() {
    return (
        <div>
            <div class="right_side p-3 shadow bg-white">
    <h2 class="product_name mb-5">The Total Amount Of</h2>
    <div class="price_indiv d-flex justify-content-between">
    <p>Product amount</p>
    <p>$<span id="product_total_amt">0.00</span></p>
    </div>
    <div class="price_indiv d-flex justify-content-between">
    <p>GST</p>
    <p>$<span id="shipping_charge">50.0</span></p>
    </div>
    <hr />
    <div class="total-amt d-flex justify-content-between font-weight-bold">
    <p>The total amount of (including VAT)</p>
    <p>$<span id="total_cart_amt">0.00</span></p>
    </div>
    <button class="btn btn-primary text-uppercase" onclick="checkout()">Checkout</button>
    </div> 
        </div>
    )
}
