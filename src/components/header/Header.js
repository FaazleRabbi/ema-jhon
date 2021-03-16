import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <div className='link bg-primary'>
                <Link className="text-light h6 m-3" to="/shop">Shop</Link>
                <Link className="text-light h6 m-3" to="/order">Order Review</Link>
                <Link className="text-light h6 m-3" to="/inventory">Manage Inventory</Link>
                <Link className="text-light h6 m-3" to="/signin">Sign In</Link>
                <Link className="text-light h6 m-3" to="/signout">Sign Out</Link>
            </div>
        </div>
    );
};

export default Header;