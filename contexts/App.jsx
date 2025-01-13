"use client"

import React, {createContext, useEffect, useState} from "react";

const AppContext = createContext();

const AppProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(false);

    const [currentElection, setCurrentElection] = useState(null);


    useEffect(() => {
        let storedUser = localStorage.getItem('user');
        if(storedUser != undefined && storedUser != null){
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
            setToken(localStorage.getItem('token'));  
        }       
        
    }, []);

    return (
        <AppContext.Provider value={{user, token, isLoggedIn, loading, 
                                     setLoading, currentElection, setCurrentElection}}>
            {children}
        </AppContext.Provider>
    )
}

export {AppContext, AppProvider};