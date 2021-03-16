import React, { useState,useEffect} from 'react';
import Cart from '../header/cart/Cart';
import data from '../../fakeData'
import fakeData from '../../fakeData'
import './Shop.css';
import 'bootstrap/dist/css/bootstrap.css';
import Product from '../product/Product';
import { addToDatabaseCart,getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';


const Shop = () => {
    const products = data.slice(0,10)

    const [CartProducts, setCartProducts] =  useState([])
    const addProductHandle = (product)=>{
        const newProducts = [...CartProducts, product]
        setCartProducts(newProducts)
        const sameProduct = CartProducts.filter(CartProduct => CartProduct.key === product.key)
        product.quantity = sameProduct.length;
        addToDatabaseCart(product.key,sameProduct.length)
    }

    
    useEffect(()=>{ 
        const dbData = getDatabaseCart();
        const keys = Object.keys(dbData);
        const CartProduct =  keys.map(key =>{ 
            const product = data.find(product => product.key ===key)
            product.quantity = dbData[key]
            return product;
        })
        setCartProducts(CartProduct)
        console.log('cartProduct',CartProduct)
    },[])
    return (
        <div className='shop'>
            <Product addProductHandle={addProductHandle}
                products ={products}
                addBtn = {true}
            ></Product>
            <Cart products = {CartProducts}>
            <Link to='/order'>
                <button className="btn btn-primary align-item-center">Review your order </button>
            </Link>
            </Cart>
        </div>
    );
};

export default Shop;