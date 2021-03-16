import React, { useState } from 'react';
import './cart.css'
const cart = (props) => {
    const products = props.products;
    const totalPrice = Math.round(products.reduce((previous, newValue)=>{
        return previous+newValue.price ;
        // return previous+newValue.price * newValue.quantity
        // return newValue.quantity? previous+newValue.price + newValue.quantity : previous+newValue.price 
    }
    ,0))
    const totalShipping = Math.round(products.reduce((previous, newValue)=>previous+newValue.shipping,0))
    const tax = Math.round(totalPrice/10);
    return (
        <div className='cart '>
            <h3 className="text-center">Order Summary</h3>
            <h5 className = "text-center">Order items: {products.length}</h5>
            <div className="d-flex justify-content-between pl-3 pr-3">
                <p>Items:</p>
                <p> $ {totalPrice}</p>
            </div>
            <div className="d-flex justify-content-between pl-3 pr-3">
                <p>Shipping & Handling:</p>
                <p> $ {totalShipping} </p>
            </div>
            <div className="d-flex justify-content-between pl-3 pr-3">
                <p>Total before tax:</p>
                <p> ${totalPrice + totalShipping} </p>
            </div>
            <div className="d-flex justify-content-between pl-3 pr-3">
                <p>Estimated Tax:</p>
                <p> ${tax} </p>
            </div>
            <div className="d-flex justify-content-between p-3 text-info">
                <h5>Order Total:</h5>
                <h5> ${totalShipping + totalPrice + tax} </h5>
            </div>
            {props.children}
        </div>
    );
};
export default cart;