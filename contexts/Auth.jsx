"use client"

import React, {createContext, useEffect, useState} from "react";
import { useSearchParams } from "next/navigation";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const searchParams = useSearchParams();


    useEffect(() => {
        let storedUser = localStorage.getItem('user');
        if(storedUser != undefined && storedUser != null){
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
            setToken(localStorage.getItem('token'));            
            // console.log(JSON.parse(storedUser));
            if(searchParams.get('redirect')){
                window.location = searchParams.get('redirect');
            }else{
                window.location = '/';
            }
        }       
        
    }, []);

    return (
        <AuthContext.Provider value={{user, token, isLoggedIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProvider};