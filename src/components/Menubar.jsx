import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CiShop } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaCloudUploadAlt } from "react-icons/fa";
import {
  adminUser,
  isAdmin,
  login,
  logout,
  userChange,
} from "../api/firebaseAPI";
import Profile from "../ui/Profile";
import Button from "../ui/Button";
import {isUserContext} from '../Context/UserModeContext';

export default function Menubar() {
  const {user,handleUserState,handleLogin,handleLogout} = useContext(isUserContext);
  const [checkAdmin, setCheckAdmin] = useState();

  useEffect(() => {
    handleUserState();
  }, []);
  
  return (
    <>
    <header className="flex justify-between items-center py-25 bg-bgcolor">
      <nav className="flex items-center ml-header">
        <Link
          to="/best10"
          className={`text-xl text-white hover:scale-125 hover:brightness-110 mr-15`}

        >
          <h1 className="text-white">best10</h1>
        </Link>
        <Link
          to="/products"
          className="text-xl text-white hover:scale-125 hover:brightness-110 mr-15"
        >
          <h1 className="text-white">AllProducts</h1>
        </Link>
        <Link
          to="/basket"
          className="text-xl text-white hover:scale-125 hover:brightness-110 mr-15"
        >
          <FaCartShopping className="text-white"/>
        </Link>
        {user && <Profile user={user} />}
        {user &&
          isAdmin(user.uid).then((check) => {
            setCheckAdmin(check);
          }) &&
          checkAdmin && (
            <Link
              to="/products/new"
              className="text-xl text-white hover:scale-125 hover:brightness-110 mr-15"
            >
              <FaCloudUploadAlt 
              className="text-white" 
              />
            </Link>
          )}
        {user && <Button onClick={handleLogout} text="LogOut" className="mr-15"/>}
        {!user && <Button onClick={handleLogin} text="LogIn" className="mr-15"/>}
      </nav>
    </header>
    <div className='flex justify-center'>
      <Link 
      to="/" 
      className="flex items-center py-15 mr-0">
        <CiShop className="text-4xl text-bgcolor h-40 w-40" />
        <h1 className="font-bold text-3xl text-bgcolor">MyShop</h1>
      </Link>
    </div>
    </>
  );
}
