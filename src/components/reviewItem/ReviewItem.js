import React from 'react';

const ReviewItem = (props) => {
    const products = props.cartItem;
    const {name,quantity,key,price}=products;
    const removeItem = props.removeItem;
    return (
        <div className="m-1 ml-5  p-2 bg-light shadow-lg rounded">
            <h5>{name}</h5>
            <p>Quantity : {quantity}</p>
            <p><small>${price}</small></p>
            <button className='btn btn-warning' onClick={ () =>removeItem(key)} > Remove</button>
        </div>
    );
};

export default ReviewItem;