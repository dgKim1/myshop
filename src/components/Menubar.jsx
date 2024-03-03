import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiShop } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { HiPencilAlt } from "react-icons/hi";
import { login, logout, userChange } from '../api/firebaseAPI';
import Profile from '../ui/Profile';
import Button from '../ui/Button';

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
        <header className='flex justify-between items-center border-b pt-2 pb-4 border-bgcolor'>
            <Link to="/" className='flex items-center'>
            <CiShop className='text-4xl text-bgcolor'/>
            <h1 className='font-bold text-4xl text-bgcolor'>MyShop</h1>
            </Link>
            <nav className='flex items-center'>
                <Link to="/best30" className='text-xl text-bgcolor mr-4 hover:scale-105 hover:brightness-110'>
                    <h1>best30</h1>
                </Link>
                <Link to="/products" className='text-xl text-bgcolor mr-4 hover:scale-105 hover:brightness-110'>
                    <h1>AllProducts</h1>
                </Link>
                <Link to="/basket" className='text-xl text-bgcolor mr-4 hover:scale-105 hover:brightness-110'>
                    <FaCartShopping/>
                </Link>
                <Link to="/products/new" className='text-xl text-bgcolor mr-4 hover:scale-105 hover:brightness-110'>
                    <HiPencilAlt/>
                </Link>
                {
                    user&&<Profile user={user}/>
                }
                {user&&<Button onClick={handleLogout} text="LogOut"/>}
                {!user&&<Button onClick={handleLogin} text="LogIn"/>}
            </nav>
        </header>
    );
}




