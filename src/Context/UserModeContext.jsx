import React, { createContext,useState } from 'react';
import { userChange,login,logout } from '../api/firebaseAPI';

export const isUserContext = createContext();

export function IsUserProvider({children}) {
    const [user, setUser] = useState();
    const handleUserState = ()=>{
        userChange((user)=>{
            setUser(user);
        });
    }
    const handleLogin = () => {
        login().then(setUser);
      };
    
    const handleLogout = () => {
        logout().then(setUser);
      };
    return (
        <isUserContext.Provider value={{user,handleUserState,handleLogout,handleLogin}}>
            {children}
        </isUserContext.Provider>
    );
}

