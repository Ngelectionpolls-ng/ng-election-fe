"use client"

import React, {createContext, useEffect, useState} from "react";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    const getToken = () => {
        if(user){
            return user.token;
        }
        return null;
    }

    const getUser = () => {
        return user;
    }

    const isLoggedIn = () => {
        if(user){
            return true;
        }
        return false;
    }

    useEffect(() => {
        setUser(localStorage.getItem('user'));
    }, []);

    return (
        <AuthContext.Provider value={{getUser, getToken, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};