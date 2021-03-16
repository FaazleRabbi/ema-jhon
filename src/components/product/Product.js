import React from 'react';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const products = props.products;
    const addProductHandle =props.addProductHandle;
    const addBtn =props.addBtn;
    return (
        <div>
            {/* <h1>This is details page</h1> */}
            <div>
                {
                    products.map(pd => {
                        const {img, name, price, seller, stock,key } = pd;
                        return(
                            <div className="product">
                                <img src={img}/>
                                <div>
                                    <h5> <Link to={'/product/'+key} >{name}</Link> </h5>
                                    <p><small>by:{seller}</small></p>
                                    <h6>Price: ${price}</h6>  
                                    <p><small>only {stock} left in stock - order soon</small></p>
                                    {addBtn && <button onClick={ () => addProductHandle(pd)} className="btn btn-primary">Add to cart</button>}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Product;