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
import { Textarea } from "components/ui/textarea";

 
import { cn } from "lib/utils"
import { Button } from "components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components/ui/popover"

import { DashboardContext } from "contexts/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {getInitials, ellipsify, logout} from 'helpers';
import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, Camera, Check} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";
import { SaveElectionResult } from "services/results/api";
import { GetPoliticalParties } from "services/profile/api";
import { getImage, titleCase } from "helpers";
import { AppContext } from 'contexts/App';
import { getElection } from "helpers";
import camera from "components/commons/Camera";
import Error from "components/commons/Error";
import ResultProgress from "components/dashboard/ResultProgress";
import { Label } from 'components/ui/label'


export default function ReportEntry(){

    const {user, setLoading} = useContext(AppContext);
    
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [addingResult, setAddingResult] = useState(false);
    const [previewingResult, setPreviewingResult] = useState(false);
    const [openPoliticalParty, setOpenPoliticalParty] = React.useState(false);
    const [politicalParties, setPoliticalParties] = React.useState([]);
    const [partyValue, setPartyValue] = React.useState("");
    const [party, setParty] = React.useState(null);

    const { elections, currentElection, setCurrentElection,
            longitude, latitude
     } = useContext(AppContext);

    const {
        capturing, setCapturing, 
        capturingVideo, setCapturingVideo,
        resultImage, setResultImage,
        reportImage, setReportImage,
        enteringResult, setEnteringResult,
        captureFor, setCaptureFor,
        reporting, setReporting
    } = useContext(DashboardContext);
  

    const [data, setData] = useState(
        {
            caption: null,
            image: null,
            dateTime: "2023-11-07T12:00:00Z",
            location: "Nigeria",
            latitude: 0,
            longitude: 0,
            userRole: null
        }
    )

    const saveElectionResult = async () => {
        
        setAddingResult(true); 
        setError(null);
        setFetching(true);
        const response = await SaveElectionResult(data);
        setFetching(false);
        setAddingResult(false);

        console.log('reports', response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the activities now            
            
        }else{

            if(response.response.data.message){
                setError(response.response.data.message);
                toast({
                    variant: 'destructive',
                    description: response.response.data.message
                });
            }else{
                toast({
                    variant: 'destructive',
                    description: 'Something went wrong. Please try again'
                });
            }
        }
    }
    
    useEffect(() => {        
        setData({...data, userRole: user?.role, image: reportImage, 
                    longitude: longitude, latitude: latitude});
    }, [user, reportImage, longitude, latitude]);

    
    return (
        <div  className={`${reporting ? 'block' : 'hidden'} fixed -top-2 left-0 z-10 text-white rounded-xl 
                            shadow-xl drop-shadow-xl flex flex-col items-center w-full h-full bg-white/70`}>
                
            {
                
                <div className="relative w-[640px] h-[800px] text-center bg-black 
                                rounded-xl flex flex-col p-4 overflow-y-auto">
                
                    <div className="flex flex-col space-y-2 relative mt-12">
                        <span className="w-10 h-10 bg-white/10 rounded-full flex 
                                    justify-center items-center cursor-pointer 
                                    hover:bg-black/50 absolute right-2 -top-12" 
                                onClick={() => setReporting(false)} >
                            <X className="text-white"/>
                        </span>

                        <div className="flex space-x-4">
                            {/* <Input type="text" value={data.caption} placeholder="Add a comment..." onChange={(e) => setData({...data, caption: e.target.value})} 
                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b 
                                        focus-visible:border-1 focus:border-green-900 pl-0 bg-white text-black px-2 flex-1 rounded-xl h-44" 
                            /> */}
                            <Textarea placeholder="Add a comment..." className="w-full rounded bg-slate-100 h-12 text-black" />
                            
                            <Button className="rounded-xl text-xs h-10 text-white" onChange={(e) => setData({...data, caption: e.target.value})}>Submit</Button>

                        </div>

                        

                        <img src={data.image} className="w-full" alt="" />

                    </div>                        

                </div>
                
            }                
        </div>
    )

}