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
    const [captureFor, setCaptureFor] = useState(""); //either result or report

    const [resultImage, setResultImage] = useState(null);
    const [reportImage, setReportImage] = useState(null);
    const [reporting, setReporting] = useState(false);
    

    return (
        <DashboardContext.Provider value={{activeMenu, setActiveMenu, capturing, setCapturing, 
                                            capturingVideo, setCapturingVideo, captured, setCaptured,
                                            enteringResult, setEnteringResult, 
                                            captureFor, setCaptureFor,
                                            resultImage, setResultImage,
                                            reportImage, setReportImage,
                                            reporting, setReporting}}>
            {children}
        </DashboardContext.Provider>
    )
}

export {DashboardContext, DashboardProvider};