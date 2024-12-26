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
import {ChevronDown, Plus, Video, Image, FileInput, PenLine} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";
import Messages from "components/commons/Messages";

function DashboardMain({children}) {

    const [capturing, setCapturing] = useState(false);
    
    const {isLoggedIn, user, setLoading} = useContext(AppContext);
    const {activeMenu, setActiveMenu} = useContext(DashboardContext);
    const router = useRouter();


    useEffect(() => {
        setLoading(false);
    }, []);
    
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
                            <Plus className="w-6 h-6" />                            
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Click to capture result</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div> 

            <div className={`fixed right-8 md:right-[300px] bottom-24 z-10 translate-all duration-250
                            flex flex-col space-y-2 items-right ${capturing ? 'block' : 'hidden'}`}>
                {/* Video stream */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Video Stream</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <Video className="w-6 h-6" />
                    </div>
                </div>
                {/* Image capture */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Capture Result</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <Image className="w-6 h-6" />
                    </div>
                </div>
                {/* Input result */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Input Result</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center">
                        <FileInput className="w-6 h-6" />
                    </div>
                </div>
                {/* Write */}
                <div className="flex items-center justify-end space-x-2">
                    <span className="text-black text-xs">Write</span>
                    <div className="w-14 h-14 bg-green-900 hover:bg-gray-800 cursor-pointer text-white 
                            rounded-full shadow-xl drop-shadow-xl flex justify-center items-center space-x-1">
                        <PenLine className="w-6 h-6" />
                    </div>
                </div>
                
            </div>
                           
        </div>

    )
}

export default DashboardMain
