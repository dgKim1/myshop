import React from 'react';
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import AllProducts from '../pages/AllProducts';
import { FaCartShopping } from "react-icons/fa6";
import { HiPencilAlt } from "react-icons/hi";
import { Login, login } from '../api/firebaseAPI';

export default function Menubar() {
    return (
        <header className='flex justify-between items-center'>
            <Link to="/" className='flex items-center'>
            <CiShop/>
            <h1>MzShop</h1>
            </Link>
            <nav className='flex items-center'>
                <Link to="/best30">
                    <h1>best30</h1>
                </Link>
                <Link to="/products">
                    <h1>AllProducts</h1>
                </Link>
                <Link to="/basket">
                    <FaCartShopping/>
                </Link>
                <Link to="/products/new">
                    <HiPencilAlt/>
                </Link>
                <button onClick={login}>
                    Login
                </button>
            </nav>
        </header>
    );
}




