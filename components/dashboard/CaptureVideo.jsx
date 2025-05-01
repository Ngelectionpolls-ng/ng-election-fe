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
import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, Camera, Undo2, Save} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";
import { SaveElectionResult } from "services/results/api";
import { GetPoliticalParties } from "services/profile/api";
import { getImage, titleCase, getElection} from "helpers";
import { AppContext } from 'contexts/App';
import camera from "components/commons/Camera";
import { SaveImage } from "services/images/api";
import { useToast } from "hooks/use-toast";

export default function CaptureVideo(){
    
    const {toast} = useToast();
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [addingResult, setAddingResult] = useState(false);
    const [openPoliticalParty, setOpenPoliticalParty] = React.useState(false);
    const [politicalParties, setPoliticalParties] = React.useState([]);
    const [value, setValue] = React.useState("");

    const { elections, currentElection, setCurrentElection, 
            imageCaptured, setImageCaptured,
            fileCaptured, setFileCaptured } = useContext(AppContext);

    const {
        capturing, setCapturing, 
        capturingVideo, setCapturingVideo,
        captured, setCaptured,
        enteringResult, setEnteringResult,
        resultImage, setResultImage,
        reportImage, setReportImage,
        captureFor, setCaptureFor,
        reporting, setReporting
    } = useContext(DashboardContext);

    useEffect(() => {
    }, [fileCaptured]);

    const capture = () => {
        switch(captureFor){
            case 'report': ; break;
            case 'result': ; break;
            default: return;
        }
    }

    const stopVideo = async () => {
        camera.stopCamera();
        setCapturingVideo(false);
        setCapturing(false);
        setCaptured(false);
    }

    const takePhoto = () => {
        camera.takeSnapshot();        
        setImageCaptured(camera.canvas.toDataURL('image/png'));
        camera.canvas.toBlob(function(blob) {
            console.log("blob", blob);
            setFileCaptured(blob);
        });
        setCapturingVideo(false);
        setCapturing(true);
        setCaptured(true);
    }

    const discard = () => {
        setCaptured(false);
        setCapturingVideo(true);
        camera.startCamera(800, 500);
    }

    const save = () => {
        setCaptured(false);
        setCapturingVideo(false);
        if(process.env.NEXT_PUBLIC_IMAGE_PROFILE != 'live'){
            const image = getImage("result");
            setImage(image);
        }else{
            setImage(imageCaptured);
            //we call a cloud service to save image here
            saveImage(fileCaptured);
            // saveImage(imageCaptured);
        }
        camera.stopCamera();
        redirect();
    }

    const setImage = (image) => {
        switch(captureFor){
            case "result": setResultImage(image); break;
            case "report": setReportImage(image); break;
            default: setReportImage(image);
        }
    }

    const redirect = () => {
        switch(captureFor){
            case "result": returnToResultEntry(); break;
            case "report": goToAddReportDetail(); break;
            default: goToAddReportDetail();
        }
    }

    const returnToResultEntry = () => {
        // setCaptureFor("");
        setCapturingVideo(false);
        setCaptured(false);
        setEnteringResult(true);
    }

    const goToAddReportDetail = () => {
        setCapturing(false);
        //we will do more here...
        setReporting(true);
    }

    const saveImage = async (file) => {
    
        setError(null);
        setFetching(true);
        const response = await SaveImage(file);
        setFetching(false);

        console.log('image response', response);
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

    return (
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
                <div id="captured" className={`${captured ? 'block' : 'hidden'} absolute top-10 z-2 w-[500px]`}>
                </div>
                
                {/* <video id="video" width="800" height="500"  autoPlay className="mx-auto my-auto bg-black"></video> */}
                {/* Capture button */}
                <div className={`w-full absolute bottom-0 flex justify-center z-[99999]`}>
                    <span className={`${capturingVideo ? 'flex' : 'hidden' } w-16 h-16 bg-red-600 hover:bg-red-900 shadow-xl rounded-full 
                            justify-center cursor-pointer flex items-center text-white justify-center" title="Capture`} onClick={takePhoto}>
                        <Camera className="w-5 h-5"/>
                    </span>

                    <div className={`${captured ? 'flex' : 'hidden' } flex w-[130px] h-16 space-x-2 p-2 rounded-full bg-black`}>

                        <span onClick={discard} 
                                className="hover:bg-white/10 h-12 w-12 flex justify-center items-center rounded-full">
                            <Undo2 className="w-5 h-5" />
                        </span>
                        <span onClick={save} 
                                className="hover:bg-white/10 h-12 w-12 flex justify-center items-center rounded-full">
                            <Save className="w-5 h-5" />
                        </span>

                    </div>

                </div>
            </div>                
        </div>
    )

}