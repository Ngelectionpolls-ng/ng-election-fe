"use client"

import React, {createContext, useEffect, useState} from "react";
import {constants} from "helpers";

const DashboardContext = createContext();

const DashboardProvider = ({children}) => {
    
    const [activeMenu, setActiveMenu] = useState(null);

    return (
        <DashboardContext.Provider value={{activeMenu, setActiveMenu}}>
            {children}
        </DashboardContext.Provider>
    )
}

export {DashboardContext, DashboardProvider};