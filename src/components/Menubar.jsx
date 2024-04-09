import React, { useEffect, useState } from "react";
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

export default function Menubar() {
  const [user, setUser] = useState();
  const [checkAdmin, setCheckAdmin] = useState();
  useEffect(() => {
    userChange((user) => {
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then(setUser);
  };

  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <header className="flex justify-between items-center border-b pt-2 pb-4 border-bgcolor">
      <Link to="/" className="flex items-center mr-header">
        <CiShop className="text-4xl text-bgcolor" />
        <h1 className="font-bold text-4xl text-bgcolor">MyShop</h1>
      </Link>
      <nav className="flex items-center">
        <Link
          to="/best30"
          className="text-xl text-bgcolor hover:scale-105 hover:brightness-110 mr-10px"
        >
          <h1>best30</h1>
        </Link>
        <Link
          to="/products"
          className="text-xl text-bgcolor hover:scale-105 hover:brightness-110 mr-10px"
        >
          <h1>AllProducts</h1>
        </Link>
        <Link
          to="/basket"
          className="text-xl text-bgcolor hover:scale-105 hover:brightness-110 mr-10px"
        >
          <FaCartShopping />
        </Link>
        {user && <Profile user={user} />}
        {user &&
          isAdmin(user.uid).then((check) => {
            setCheckAdmin(check);
          }) &&
          checkAdmin && (
            <Link
              to="/products/new"
              className="text-xl text-bgcolor hover:scale-105 hover:brightness-110 mr-10px"
            >
              <FaCloudUploadAlt />
            </Link>
          )}
        {user && <Button onClick={handleLogout} text="LogOut" />}
        {!user && <Button onClick={handleLogin} text="LogIn" />}
      </nav>
    </header>
  );
}
