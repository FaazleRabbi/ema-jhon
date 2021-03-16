import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../header/cart/Cart';
import greddingImg from '../../images/giphy.gif'

const Review = () => {
    const [cart, setCart] = useState([])
    const [orderDone,setOrderDone] = useState(false)
    const placeOrder = ()=>{
        setCart([])
        setOrderDone(true)
        processOrder();
    }
    const removeItem = (key) =>{
        const newCart = cart.filter(cart => cart.key !==  key)
        setCart(newCart)
        removeFromDatabaseCart(key)
    }
    useEffect(()=>{
        const dbData = getDatabaseCart();
        const keys = Object.keys(dbData);
        const CartProduct =  keys.map(key =>{ 
            const product = fakeData.find(product => product.key ===key)
            product.quantity = dbData[key]
            return product;
        })
        setCart(CartProduct)
        console.log('cartProduct',CartProduct)
    },[])



    
    return (
        <div className="d-flex ">
            <div className='col-9'>
            {
                cart.map(cart=><ReviewItem 
                    cartItem={cart}
                    removeItem = {removeItem}
                    ></ReviewItem>)
            }
            {
                orderDone && <img src={greddingImg} alt=""/>
            }
            </div>
            <div className="col-3">
                <Cart products={cart}>
                    <button onClick={placeOrder} className="btn btn-primary">
                        Place Order
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;