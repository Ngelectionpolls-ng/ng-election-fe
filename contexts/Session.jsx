"use client"

import React, {createContext, useEffect, useState} from "react";

const SessionContext = createContext();

const SessionProvider = ({children}) => {

    useEffect(() => {
        let token = localStorage.getItem('token');
        if(!token && window.location.pathname != '/'){
            window.location  = '/auth/login'; 
        }        
    }, []);

    return (
        <SessionContext.Provider value={{}}>
            {children}
        </SessionContext.Provider>
    )
}

export {SessionContext, SessionProvider};