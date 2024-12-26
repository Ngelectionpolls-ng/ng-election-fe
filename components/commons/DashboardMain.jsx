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
import camera from "components/commons/camera";

function DashboardMain({children}) {

    const [capturing, setCapturing] = useState(false);
    const [capturingVideo, setCapturingVideo] = useState(false);
    const [captured, setCaptured] = useState(false);
    
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
        camera.takeSnapshot();
    }

    const stopVideo = async () => {
        camera.stopCamera();
        setCapturingVideo(false);
        setCapturing(false);
        setCaptured(false);
    }

    const takePhoto = () => {
        camera.takeSnapshot();
        setCapturingVideo(false);
        setCapturing(true);
        setCaptured(true);
    }
    
    return (        
        
        <div className="flex-1 flex justify-center space-y-2 flex-col p-4 relative h-grow">
            {children}

            <div className={`fixed left-0 -top-2 z-5 w-full h-full bg-white/80 ${capturing ? 'block' : 'hidden'}`}
                onClick={() => setCapturing(false)}>
            </div>
            
            <div className="fixed right-8 md:right-[300px] bottom-8 z-10 w-14 h-14 bg-green-900 hover:bg-gray-800 
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

            <div className={`fixed right-8 md:right-[300px] bottom-24 z-10
                            transition-all duration-500 ease-in-out
                            flex flex-col space-y-2 items-right ${capturing ? 'block h-64' : 'hidden'}`}>
                {/* Video stream */}
                <div className="flex items-center justify-end space-x-2" onClick={streamVideo}>
                    <span className="text-black text-xs">Video Stream</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <Video className="w-5 h-5" />
                    </div>
                </div>
                {/* Image capture */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Capture Result</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <Image className="w-5 h-5" />
                    </div>
                </div>
                {/* Input result */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Input Result</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <FileInput className="w-5 h-5" />
                    </div>
                </div>
                {/* Write */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Write</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center space-x-1">
                        <PenLine className="w-5 h-5" />
                    </div>
                </div>
                
            </div>
            
            {/* Capturing video */}
            <div  className={`${capturingVideo || captured ? 'block' : 'hidden'} fixed -top-2 left-0 z-10 text-white rounded-xl 
                            shadow-xl drop-shadow-xl flex flex-col items-center w-full h-full`}>
                
                <div className="relative w-[800px] h-[500px] text-center">
                    {/* Cancel */}
                    <div className="absolute right-4 top-12 z-10 w-10 h-10 bg-white hover:bg-gray-200 cursor-pointer text-black 
                            rounded-full flex justify-center items-center space-x-1" 
                            onClick={() => stopVideo()}>
                        <X className="w-5 h-5" />
                    </div>

                    {/* Video */}
                    <div id="capture" className={`${capturingVideo ? 'block' : 'hidden'} absolute top-10 z-2`}>
                    </div>

                    {/* Picture */}
                    <div id="captured" className={`${captured ? 'block' : 'hidden'} absolute top-10 z-2 w-[600px]`}>
                    </div>
                    
                    {/* <video id="video" width="800" height="500"  autoPlay className="mx-auto my-auto bg-black"></video> */}
                    {/* Capture button */}
                    <div className={`${capturingVideo ? 'block' : 'hidden' } w-full absolute bottom-0 flex justify-center z-[99999]`}>
                        <span className="w-16 h-16 bg-red-600 hover:bg-red-900 shadow-xl rounded-full 
                                cursor-pointer flex items-center text-white justify-center" title="Capture" onClick={takePhoto}>
                        <Camera className="w-5 h-5"/>
                        </span>                          
                        
                    </div>

                </div>
                
            </div>
                           
        </div>



    )
}

export default DashboardMain
