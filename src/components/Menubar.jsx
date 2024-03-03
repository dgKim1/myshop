import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import AllProducts from '../pages/AllProducts';
import { FaCartShopping } from "react-icons/fa6";
import { HiPencilAlt } from "react-icons/hi";
import { login, logout, userChange } from '../api/firebaseAPI';
import Profile from '../ui/Profile';

export default function Menubar() {
    const [user,setUser] = useState();
    useEffect(()=>{
        userChange((user)=>{
            setUser(user);
        });
    },[]);
     const handleLogin = () => {
        login().then(setUser);
    }

    const handleLogout = ()=>{
        logout().then(setUser);
    }
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
                {
                    user&&<Profile user={user}/>
                }
                {user&&<button onClick={handleLogout}>Logout</button>}
                {!user&&<button onClick={handleLogin}>Login</button>}
            </nav>
        </header>
    );
}




