"use client"

import React, {createContext, useEffect, useState} from "react";
import {constants} from "helpers";

const DashboardContext = createContext();

const DashboardProvider = ({children}) => {
    
    const [activeMenu, setActiveMenu] = useState(null);
    const [capturing, setCapturing] = useState(false);
    const [capturingVideo, setCapturingVideo] = useState(false);
    const [captured, setCaptured] = useState(false);
    const [enteringResult, setEnteringResult] = useState(false);

    return (
        <DashboardContext.Provider value={{activeMenu, setActiveMenu, capturing, setCapturing, 
                                            capturingVideo, setCapturingVideo, captured, setCaptured,
                                            enteringResult, setEnteringResult}}>
            {children}
        </DashboardContext.Provider>
    )
}

export {DashboardContext, DashboardProvider};