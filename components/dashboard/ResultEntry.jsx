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


export default function ResultEntry(){
    
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [addingResult, setAddingResult] = useState(false);
    const [previewingResult, setPreviewingResult] = useState(false);
    const [openPoliticalParty, setOpenPoliticalParty] = React.useState(false);
    const [politicalParties, setPoliticalParties] = React.useState([]);
    const [partyValue, setPartyValue] = React.useState("");
    const [party, setParty] = React.useState(null);

    const { elections, currentElection, setCurrentElection } = useContext(AppContext);

    const {
        capturing, setCapturing, 
        capturingVideo, setCapturingVideo,
        resultImage, setResultImage,
        enteringResult, setEnteringResult,
        captureFor, setCaptureFor
    } = useContext(DashboardContext);
    
    // const candidates = [
    //     { name: 'Bola Tinubu', acronym: 'APC', votes: 343000, color: 'bg-green-600', image: '/assets/images/apc.png' },
    //     { name: 'Abubakar Atiku', acronym: 'PDP', votes: 223000, color: 'bg-pink-600', image: '/assets/images/pdp.png' },
    //     { name: 'Peter Obi', acronym: 'LP', votes: 1129000, color: 'bg-yellow-600', image: '/assets/images/apc.png' },
    //     { name: 'Rabiu Kwankwaso', acronym: 'NNPP', votes: 4890, color: 'bg-green-400', image: '/assets/images/pdp.png' },
    // ];

    const [data, setData] = useState(
        {
            candidates: [],
            electionId: currentElection?.id,
            partyId: null,
            pollingunitValidVotes: 0, 
            registeredVoters: 0,
            accreditedVoters: 0,
            rejectedVotes: 0,
            spoiledVotes: 0,            
            validVotes: 0,
            unusedBallotPapers: 0,
            statementOfResult: process.env.IMAGE_PROFILE != "live" ? getImage("result") : null
        }
    )//this will represent the party's votes

    const startNewResult = () => {
        setData({...data, partyId: null, pollingunitValidVotes: 0});
        setPreviewingResult(false);
    }

    const validateResult = (data) => {
        if(!data.electionId){
            setError("Election ID cannot be empty");
            return false;
        } 
        if(!data.partyId){
            setError("Party ID cannot be empty");
            return false;
        }
        if(!parseInt(data.registeredVoters)){
            setError("Registered voters cannot be 0");
            return false;
        }
        if(!parseInt(data.accreditedVoters)){
            setError("Acceredited voters cannot be 0");
            return false;
        }
        if(parseInt(data.accreditedVoters) > parseInt(data.registeredVoters)){
            setError("Acceredited voters cannot be greater than registered voters");
            return false;
        }
        if(parseInt(data.rejectedVotes) > parseInt(data.registeredVoters)){
            setError("Rejected votes cannot be greater than registered voters");
            return false;
        }
        if(parseInt(data.validVotes) > parseInt(data.registeredVoters)){
            setError("Valid votes cannot be greater than registered voters");
            return false;
        }
        if(parseInt(data.pollingunitValidVotes) > parseInt(data.accreditedVoters)){
            setError("Party's votes cannot be greater than accredited voters");
            return false;
        }

        return true;        
    }

    const getPoliticalParties = async () => {
        setError(null);
        setFetching(true);
        const response = await GetPoliticalParties();
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the stattes
            const politicalParties = response.data.data.parties;
            politicalParties.forEach(element => {
                element.value = element.name;
                element.label = element.name;
            });
            setPoliticalParties(politicalParties);
            
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

    const addCandidate = (party) => {
        console.log('party', party);
        console.log(data); 
        console.log('candidates', data.candidates); 
        let candidates = data.candidates;
        const candidate = candidates.find((c) => c.partyId == party.id);              
        if(!candidate){  
            candidates.push({ name: 'Peter Obi', acronym: party.acronym, votes: data.pollingunitValidVotes, color: party.color, image: '/assets/images/apc.png', partyId: party.id });
            console.log('candidates', candidates);
        }else{
            candidate['votes'] = data.pollingunitValidVotes;
        }
        setParty(party);
        console.log('candidates', candidates);
        console.log('candidate found', candidate);
        setData({...data, candidates: candidates, partyId: party.id});
    }

    const previewElectionResult = async () => {
        let candidates = data.candidates;
        const candidate = candidates.find((c) => c.partyId == party.id);              
        if(!candidate){  
            candidates.push({ name: 'Peter Obi', acronym: party.acronym, votes: data.pollingunitValidVotes, color: party.color, image: '/assets/images/apc.png', partyId: party.id });
            console.log('candidates', candidates);
        }else{
            candidate['votes'] = data.pollingunitValidVotes;
        }
        console.log('candidates', candidates);
        console.log('candidate found', candidate);
        setData({...data, candidates: candidates, partyId: party.id});
        console.log(data)
        if(!validateResult(data)) return;
        setPreviewingResult(true);
    }

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
        getPoliticalParties();
        setData({...data, electionId: currentElection?.id});
    }, [currentElection]);

    const streamVideo = async () => {
        setCapturingVideo(true);
        camera.startCamera(800, 500);
        camera.takeSnapshot();
    }

    const openCaptureImage = () => {
        setCaptureFor("result");
        setEnteringResult(false);
        streamVideo();
    }

    return (
        <div  className={`${enteringResult ? 'block' : 'hidden'} fixed -top-2 left-0 z-10 text-white rounded-xl 
                            shadow-xl drop-shadow-xl flex flex-col items-center w-full h-full`}>
                
            {
                
                    <div className="relative w-[550px] h-[800px] text-center bg-black 
                                    rounded-xl flex flex-col items-center justify-center">
                    
                        <div className="absolute top-0 left-0 w-full flex justify-between p-6 self-start">
                            {/* Election select */}
                            <Select className="px-2 border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" 
                                    onValueChange={(e) => {console.log(e); setCurrentElection(getElection(e, elections))}} >
                                <SelectTrigger className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0 w-auto" >
                                    <SelectValue placeholder="Select election" />
                                </SelectTrigger>
                                <SelectContent className="px-2 border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                    <SelectGroup className="px-2">
                                        {
                                            elections && elections.map((election, index) => (
                                                <SelectItem key={election.id} value={election.name}>{election.name}</SelectItem>
                                            ))
                                        }
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* Cancel */}
                            <div className="w-10 h-10 bg-white/40 hover:bg-gray-200 group
                                        cursor-pointer text-white rounded-full flex justify-center items-center space-x-1" 
                                    onClick={() => {setCapturing(false); setEnteringResult(false)}}>
                                <X className="w-5 h-5 group-hover:text-black" />
                            </div>
                        </div>

                        {
                            !addingResult ? (
                                <Button className="bg-white hover:bg-white/40 text-black hover:text-white text-xs rounded px-4 self-center" onClick={() => setAddingResult(true)}>Add Result</Button>
                            ) : (
                                    !previewingResult ? (
                                        ResultAddition()
                                    ) : (
                                        ResultPreview()
                                    )
                                
                            )
                        }
                        

                    </div>
                
            }                
        </div>
    )

    function ResultAddition(){
        return (
            <>
                <div className="text-white self-center p-6 grid grid-cols-2 grid-rows-4 gap-4 gap-y-8 mt-24 w-full text-xs relative">
                    
                    <div className="col-span-2 absolute w-full -top-8 px-4" ><Error error={error} /></div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">No. of registered voters</Label>
                        <Input type="number" value={data.registeredVoters} placeholder="No. of registered voters" 
                                onChange={(e) => {setData({...data, registeredVoters: e.target.value}); setError(false)}} 
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full mt-4" 
                        />
                    </div>
                    
                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">No. of accredited voters</Label>
                        <Input type="number" value={data.accreditedVoters} placeholder="No. of accredited voters" 
                                onChange={(e) => {setData({...data, accreditedVoters: e.target.value}); setError(false)}}
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full mt-4" 
                        />
                    </div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">No. of rejected voters</Label>
                        <Input type="number" value={data.rejectedVotes} placeholder="No. of rejected voters" 
                                onChange={(e) => {setData({...data, rejectedVotes: e.target.value}); setError(false)}}
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                        />
                    </div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">No. of spoiled voters</Label>
                        <Input type="number" value={data.spoiledVotes} placeholder="No. of spoiled voters" 
                                onChange={(e) => {setData({...data, spoiledVotes: e.target.value}); setError(false)}}
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                        />
                    </div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">No. of valid votes</Label>
                        <Input type="number" value={data.validVotes} placeholder="No. of valid votes" 
                                                onChange={(e) => { 
                                                    setData({...data, validVotes: e.target.value}); setError(false);
                                                }}
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                        />
                    </div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">No. of unused ballot papers</Label>
                        <Input type="number" value={data.unusedBallotPapers}  placeholder="No. of unused ballot papers" 
                                onChange={(e) => {setData({...data, unusedBallotPapers: e.target.value}); setError(false)}} 
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                        />
                    </div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">Political Party</Label>                        
                        <Popover open={openPoliticalParty} onOpenChange={setOpenPoliticalParty}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={openPoliticalParty}
                                    className="w-full justify-between rounded text-gray-500 text-sm h-12 focus:border-white"
                                >
                                    {partyValue
                                        ? politicalParties.find((party) => party.value === partyValue)?.label
                                        : "Select political party..."}
                                    <ChevronDown className="opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Search political parties..." className="h-12 text-sm" />
                                    <CommandList>
                                        <CommandEmpty>No parties found.</CommandEmpty>
                                        <CommandGroup>
                                            {politicalParties.map((party) => (
                                                <CommandItem className="text-xs" 
                                                    key={party.id}
                                                    value={party.name}
                                                    onSelect={(currentValue) => {
                                                        setPartyValue(currentValue === partyValue ? "": currentValue);
                                                        setData({...data, partyId: party.id});
                                                        addCandidate(party);
                                                        setOpenPoliticalParty(false);
                                                    }}
                                                >
                                                <span className="w-8 flex mr-1 items-center"><img src={party.logo} alt="" className="mr-2 h-4" /></span> {`${titleCase(party.name)}, (${party.acronym.toUpperCase()})`}
                                                <Check
                                                    className={cn(
                                                    "ml-auto",
                                                        partyValue === party.value ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="flex flex-col space-y-0.5">
                        <Label className="text-[12px] text-gray-200 w-full text-left">Votes allocated to party</Label>                        
                        <Input type="text" value={data.pollingunitValidVotes} placeholder="Votes allocated to party" 
                            onChange={(e) => {setData({...data, pollingunitValidVotes: e.target.value})}} 
                            className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                        focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                        />
                    </div>

                    {
                        resultImage ? (
                            <div className="w-full h-[72px] relative overflow-y-hidden">
                                <div className="w-8 h-8 bg-white/40 hover:bg-gray-400 group
                                            cursor-pointer text-black rounded-full flex justify-center items-center space-x-1
                                            absolute z-10 top-1 right-1" 
                                        onClick={() => {setResultImage(null)}}>
                                    <X className="w-4 h-4 group-hover:text-black" />
                                </div>
                                <img src={`${resultImage}`} alt="" className="w-full"/>
                            </div>
                        ) : (
                            <Button className="bg-red-900 w-full h-12 text-white text-xs rounded px-4" onClick={() => openCaptureImage()}>
                                <Camera className="w-5 h-5"/> Add image
                            </Button>
                        )
                    }

                </div>
                
                <div className="w-full grow flex flex-col justify-end items-center py-4 ">
                    <Button className="bg-green-900 w-[200px] text-white text-xs rounded px-4" onClick={() =>{previewElectionResult()}}>Add</Button>
                </div>
            </>
        )
    }

    function ResultPreview(){

        return (
            <div className="flex flex-col space-y-4 w-full h-full p-6 mt-16">
                <div className="flex w-full justify-end">
                    <Button className="bg-white hover:bg-white/40 text-black hover:text-white text-xs rounded px-4 self-center" onClick={() => startNewResult()}>Add Result</Button>
                </div>

                <div className="rounded p-4 bg-white w-full h-[500px]">

                    <ResultProgress data={data} type={'small'} />

                </div>

                <div className="w-full grow flex flex-col justify-end items-center py-4 ">
                    <Button className="bg-green-900 w-[200px] text-white text-xs rounded px-4" onClick={() =>{saveElectionResult()}}>Submit</Button>
                </div>
            </div>
        );
        
    }

}