import React, { useState } from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../product/Product';

const Details = () => {
    const {productKey} =useParams()
    console.log(productKey)
    const products = [];
    const product =  fakeData.find(product => product.key === productKey)
    products.push(product)
    console.log(products)
    return (
        <div>
            {/* <h1>This is root details</h1> */}
            <Product addBtn={false} products = {products}></Product>
        </div>
    );
};

export default Details;