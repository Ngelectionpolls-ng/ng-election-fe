"use client"

import React, {useContext, useEffect, useState} from 'react'
import Link from 'next/link'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "components/ui/dropdown-menu"

import { Button } from "components/ui/button"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "components/ui/select"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "components/ui/tooltip"

import { Input } from "components/ui/input"

import { AppContext } from "contexts/App";
import { DashboardContext } from "contexts/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {getInitials, ellipsify, logout} from 'helpers';
import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, Camera} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";
import camera from "components/commons/Camera";
import ResultEntry from "components/dashboard/ResultEntry";
import ReportEntry from "components/dashboard/ReportEntry";
import CaptureVideo from "components/dashboard/CaptureVideo";

function DashboardMain({children}) {

    const {
        capturing, setCapturing, 
        capturingVideo, setCapturingVideo,
        captured, setCaptured,
        enteringResult, setEnteringResult,
        addingResult, setAddingResult,
        captureFor, setCaptureFor,
        reporting, setReporting
    } = useContext(DashboardContext);
    
    const {isLoggedIn, user, setLoading} = useContext(AppContext);
    const {activeMenu, setActiveMenu} = useContext(DashboardContext);
    const router = useRouter();

    let video  = null;


    useEffect(() => {
        setLoading(false);
    }, []);

    const streamVideo = async () => {
        setCapturingVideo(true);
        camera.startCamera(800, 500);
        // camera.takeSnapshot();
    }
   
    
    return (        
        
        <div className="flex space-y-2 flex-col p-4 relative h-grow flex-1">
            {children}

            <div className={`fixed left-0 -top-2 z-5 w-full h-full bg-white/80 ${capturing ? 'block' : 'hidden'}`}
                onClick={() => setCapturing(false)}>
            </div>
            
            <div className="fixed right-8 md:right-[320px] bottom-8 z-10 w-14 h-14 bg-green-900 hover:bg-gray-800 
                                cursor-pointer text-white rounded-full shadow-xl drop-shadow-xl flex justify-center items-center"
                onClick={() => setCapturing(!capturing)} >    
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>                                                
                            <Plus className="w-5 h-5" />                            
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Click to capture result</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div> 

            <div className={`fixed right-8 md:right-[320px] bottom-24 z-10
                            transition-all duration-500 ease-in-out
                            flex flex-col space-y-2 items-right ${capturing ? 'block h-36' : 'hidden'}`}>
                {/* Video stream */}
                {/* <div className="flex items-center justify-end space-x-2" onClick={streamVideo}>
                    <span className="text-black text-xs">Video Stream</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <Video className="w-5 h-5" />
                    </div>
                </div> */}
                {/* Image capture */}
                <div className="flex items-center justify-end space-x-2" onClick={() => {setCaptureFor("report"); streamVideo()}}>
                    <span className="text-black text-xs">Capture Activity</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <Image className="w-5 h-5" />
                    </div>
                </div>
                {/* Input result */}
                <div className="flex items-center justify-end space-x-2" onClick={() => setEnteringResult(true)}>
                    <span className="text-black text-xs">Input Result</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <FileInput className="w-5 h-5" />
                    </div>
                </div>
                {/* Write */}
                {/* <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Write</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center space-x-1">
                        <PenLine className="w-5 h-5" />
                    </div>
                </div> */}
                
            </div>
            
            {/* Capturing video */}
            <CaptureVideo />
                           
            {/* Entering result */}
            <ResultEntry />

            {/* entering report */}
            <ReportEntry />
                           
        </div>



    )
}

export default DashboardMain
