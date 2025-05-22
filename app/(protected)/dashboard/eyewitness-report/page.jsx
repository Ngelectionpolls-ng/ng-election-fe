
"use client"

import React, {useContext, useEffect, useState} from "react";
import { cn } from "lib/utils";
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "components/ui/command";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "components/ui/popover";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";

import { GetStates, GetStateLGAs, 
    GetLGAWards, GetWardPollingUnits,
    GetPoliticalParties } from "services/profile/api";

import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, ChartColumnBig, Check, Clock} from "lucide-react";

import { useRouter } from "next/navigation";
import { AppContext } from "contexts/App";
import DashboardMain from "components/commons/DashboardMain";
import ProfileSummary from "components/dashboard/ProfileSummary";
import {GetReports} from "services/reports/api";
import Error from "components/commons/Error";
import { makeSlug, titleCase } from "helpers";

import { FacebookShareButton, WhatsappShareButton, TwitterShareButton, 
        FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";

export default function EyeWitnessReport(){

    const {user, currentElection, setCurrentElection, setLoading} = useContext(AppContext);
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const router = useRouter();

    const [states, setStates] = useState([{label:"Select a state", value: ""}]);
    const [openStateElections, setOpenStateElections] = useState(false);
    const [stateValue, setStateValue] = useState(null);
    const [lgas, setLgas] = useState([{label:"Select a lga", value: ""}]);
    const [openLgaElections, setOpenLgaElections] = useState(false);
    const [lgaValue, setLgaValue] = useState(null);
    const [wards, setWards] = useState([{label:"Select a ward", value: ""}]);
    const [openWardElections, setOpenWardElections] = useState(false);
    const [wardValue, setWardValue] = useState(null);
    const [share, setShare] = useState(null);
    
    const [pollingUnits, setPollingUnits] = useState([{label:"Select a polling unit", value: ""}]);
    const [openPollingUnitElections, setOpenPollingUnitElections] = useState(false);
    const [pollingUnitValue, setPollingUnitValue] = useState(null);

    const [openPollingUnits, setOpenPollingUnits] = useState(false);
    const [pollingUnit, setPollingUnit] = useState("");
    const [value, setValue] = useState(null);


    const activities = [
        {
            id: 1,
            image: "/assets/images/list-1.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            views: '40k',
            likes: '20k'
        },
        {
            id: 2,
            image: "/assets/images/list-2.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            views: '40k',
            likes: '20k'
        },
        {
            id: 3,
            image: "/assets/images/list-1.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            views: '40k',
            likes: '20k'
        },
        {
            id: 4,
            image: "/assets/images/list-2.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            views: '40k',
            likes: '20k'
        },
        {
            id: 5,
            image: "/assets/images/list-1.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            views: '40k',
            likes: '20k'
        },
        {
            id: 6,
            image: "/assets/images/list-2.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            views: '40k',
            likes: '20k'
        },
    ];

    useEffect(() => {
        setLoading(false);
        getAllStates();
        // states.length && getReports(states[0].id, user?.id);
        getReports();
        window.addEventListener('click', (e) => {
            if(share != null && e.target.id != 'share') setShare(null);
        }); 
    }, []);

    
    const getReports = async (stateId, iWitnessId) => {
        setError(null);
        setFetching(true);
        const response = await GetReports(stateId, iWitnessId);
        setFetching(false);

        console.log('reports fetched', response);
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

    const getAllStates = async () => {
        setError(null);
        setFetching(true);
        const response = await GetStates();
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the stattes
            const states_data = response.data.data.states;
            let statesResult = [];
            states_data.forEach(element => {
                statesResult.push({
                    label: element.name, value: makeSlug(element.name),
                    name: element.name, id: element.id
                });
            });

            setStates(statesResult);
            getReports(statesResult[0].id, user?.id)
            
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

    const getStateLGAs = async (state_id) => {
        setError(null);
        setFetching(true);
        const response = await GetStateLGAs(state_id);
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the lgas selection with all the LGAs
            const lga_data = response.data.data;
            let lgaResult = [];
            lga_data.forEach(element => {
                lgaResult.push({
                    label: element.name, value: makeSlug(element.name),
                    name: element.name, id: element.id
                });
            });

            setLgas(lgaResult);

            // displayStateResult(lgaResult);  
            
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

    const getLGAWards = async (lga_id) => {
        setError(null);
        setFetching(true);
        const response = await GetLGAWards(lga_id);
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the wards
            const ward_data = response.data.data;
            let wardResult = [];
            ward_data.forEach(element => {
                wardResult.push({
                    label: element.name, value: makeSlug(element.name),
                    name: element.name, id: element.id
                });
            });

            setWards(wardResult);

            // displayLGAResult(wardResult);   
                                                                                    
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

    const getWardPollingUnits = async (ward_id) => {
        setError(null);
        setFetching(true);
        const response = await GetWardPollingUnits(ward_id);
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the polling units
            const wardPollingUnits = response.data.data;
            setPollingUnits(wardPollingUnits);

            const polling_unit_data = response.data.data;
            let pollingUnitResults = [];
            polling_unit_data.forEach(element => {
                pollingUnitResults.push({
                    label: element.name, value: makeSlug(element.name),
                    name: element.name, id: element.id
                });
            });

            setPollingUnits(pollingUnitResults);

            // displayWardResult(pollingUnitResults)
            
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

    const getStateId = (value) => {
        const entry = states.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    const getLGAId = (value) => {
        const entry = lgas.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    const getWardId = (value) => {
        const entry = wards.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    return (
        <main className="flex-1 p-4 flex">

            <DashboardMain >
                {/* header */}
                <div className="w-full flex flex-col space-y-2 justify-between items-center self-start">

                    <Error error={error} />
                    
                    <div className="w-full justify-between flex items-center">
                       <span className="text-sm font-semibold text-gray-800">
                            Latest updates from eyewitness report
                        </span>

                        <div className="flex space-x-12 items-center">

                            <Popover open={openPollingUnits} onOpenChange={setOpenPollingUnits}>
                                <PopoverTrigger asChild>
                                    <Button
                                        variant="outline"
                                        role="combobox"
                                        aria-expanded={openPollingUnits}
                                        className="w-full justify-between rounded text-black text-xs h-9 bg-slate-200 w-[150px]"
                                    >
                                        {value
                                            ? pollingUnits.find((pollingUnit) => pollingUnit.value === value)?.label
                                            : "All polling units"}
                                        <ChevronDown className="opacity-50" />
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-full p-0">
                                    <Command>
                                        <CommandInput placeholder="Search polling units..." className="h-9" />
                                        <CommandList>
                                            <CommandEmpty>No polling units found.</CommandEmpty>
                                            <CommandGroup>
                                                {pollingUnits.map((apollingUnit) => (
                                                    <CommandItem
                                                        key={apollingUnit.value}
                                                        value={apollingUnit.value}
                                                        onSelect={(currentValue) => {
                                                            setValue(currentValue === value ? "" : currentValue)
                                                            setOpenPollingUnits(false)
                                                        }}
                                                    >
                                                    {apollingUnit.label}
                                                    <Check
                                                        className={cn(
                                                        "ml-auto",
                                                        value === apollingUnit.value ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <Select onValueChange={(e) => {console.log(e)}} className="h-9 text-xs">
                                <SelectTrigger className="h-9 bg-slate-200 w-[150px] text-xs" >
                                    <SelectValue placeholder="All Updates" />
                                </SelectTrigger>
                                <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b">
                                    <SelectGroup>
                                        <SelectItem value="all-updates">All Updates</SelectItem>
                                        <SelectItem value="today">Today</SelectItem>
                                        <SelectItem value="last-month">Last month</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                        </div> 
                    </div>
                    

                    <div className="w-full flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between font-semibold items-center">
                        {
                            !currentElection && (
                                <span className="text-gray-900 text-xs font-semibold">
                                    Select an Election
                                </span>                            
                            )
                        }                                        
                        {                            
                            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 items-center text-xs">
                                
                                {
                                    currentElection && (                                        
                                        <Popover open={openStateElections} onOpenChange={setOpenStateElections}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={openStateElections}
                                                    className="w-full justify-between rounded text-black text-xs h-8"
                                                >
                                                    {stateValue
                                                        ? states?.find((aState) => aState.value === stateValue)?.label
                                                        : "Select to view results from a state"}
                                                    <ChevronDown className="opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full p-0">
                                                <Command>
                                                    <CommandInput placeholder="Select a state" className="h-8" />
                                                    <CommandList>
                                                        <CommandEmpty>No states found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {states?.map((aState) => (
                                                                <CommandItem
                                                                    key={aState.value}
                                                                    value={aState.value}
                                                                    onSelect={(currentValue) => {
                                                                        setStateValue(currentValue === stateValue ? "" : currentValue);                                                                                                                                            
                                                                        getStateLGAs(getStateId(aState.label));                                                                          
                                                                        setOpenStateElections(false);
                                                                        setLgaValue(null);
                                                                        setWardValue(null);
                                                                        setPollingUnitValue(null);
                                                                    }}
                                                                >
                                                                {aState.label}
                                                                <Check
                                                                    className={cn(
                                                                    "ml-auto",
                                                                    stateValue === aState.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    )
                                }
                                {
                                    stateValue && (                         
                                        <Popover open={openLgaElections} onOpenChange={setOpenLgaElections}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={openLgaElections}
                                                    className="w-full justify-between rounded text-black text-xs h-8"
                                                >
                                                    {lgaValue
                                                        ? lgas.find((lga) => lga.value === lgaValue)?.label
                                                        : "Select to view results from an LGA"}
                                                    <ChevronDown className="opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full p-0">
                                                <Command>
                                                    <CommandInput placeholder="Select LGA" className="h-8" />
                                                    <CommandList>
                                                        <CommandEmpty>No LGAs found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {lgas.map((lga) => (
                                                                <CommandItem
                                                                    key={lga.value}
                                                                    value={lga.value}
                                                                    onSelect={(currentValue) => {
                                                                        setLgaValue(currentValue === lgaValue ? "" : currentValue);
                                                                        getLGAWards(getLGAId(lga.label));
                                                                        setOpenLgaElections(false);
                                                                        setWardValue(null);
                                                                        setPollingUnitValue(null);
                                                                    }}
                                                                >
                                                                {lga.label}
                                                                <Check
                                                                    className={cn(
                                                                    "ml-auto",
                                                                    lgaValue === lga.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    )
                                }
                                {
                                    lgaValue && (
                                        <Popover open={openWardElections} onOpenChange={setOpenWardElections}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={openWardElections}
                                                    className="w-full justify-between rounded text-black text-xs h-8"
                                                >
                                                    {wardValue
                                                        ? wards.find((ward) => ward.value === wardValue)?.label
                                                        : "Select to view results from a ward"}
                                                    <ChevronDown className="opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full p-0">
                                                <Command>
                                                    <CommandInput placeholder="Select Ward" className="h-8" />
                                                    <CommandList>
                                                        <CommandEmpty>No Wards found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {wards.map((ward) => (
                                                                <CommandItem
                                                                    key={ward.value}
                                                                    value={ward.value}
                                                                    onSelect={(currentValue) => {
                                                                        setWardValue(currentValue === wardValue ? "" : currentValue);
                                                                        getWardPollingUnits(getWardId(ward.label));
                                                                        setOpenWardElections(false);
                                                                        setPollingUnitValue(null);
                                                                    }}
                                                                >
                                                                {ward.label}
                                                                <Check
                                                                    className={cn(
                                                                    "ml-auto",
                                                                    wardValue === ward.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>
                                    )
                                }
                                {
                                    wardValue && (                                                                                                                           
                                        <Popover open={openPollingUnitElections} onOpenChange={setOpenPollingUnitElections}>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    role="combobox"
                                                    aria-expanded={openPollingUnitElections}
                                                    className="w-full justify-between rounded text-black text-xs h-8"
                                                >
                                                    {pollingUnitValue
                                                        ? pollingUnits.find((pollingUnit) => pollingUnit.value === pollingUnitValue)?.label
                                                        : "Select a polling unit "}
                                                    <ChevronDown className="opacity-50" />
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-full p-0">
                                                <Command>
                                                    <CommandInput placeholder="Select Ward" className="h-8" />
                                                    <CommandList>
                                                        <CommandEmpty>No Polling units found.</CommandEmpty>
                                                        <CommandGroup>
                                                            {pollingUnits.map((pollingUnit) => (
                                                                <CommandItem
                                                                    key={pollingUnit.value}
                                                                    value={pollingUnit.value}
                                                                    onSelect={(currentValue) => {
                                                                        setPollingUnitValue(currentValue === pollingUnitValue ? "" : currentValue);
                                                                        displayPollingUnitResult(pollingUnit.id);
                                                                        setOpenPollingUnitElections(false)
                                                                    }}
                                                                >
                                                                {pollingUnit.label}
                                                                <Check
                                                                    className={cn(
                                                                    "ml-auto",
                                                                    pollingUnitValue === pollingUnit.value ? "opacity-100" : "opacity-0"
                                                                    )}
                                                                />
                                                                </CommandItem>
                                                            ))}
                                                        </CommandGroup>
                                                    </CommandList>
                                                </Command>
                                            </PopoverContent>
                                        </Popover>                               
                                    )
                                }                                                                     
                            </div>                           
                        }
                        
                    </div>               
                    
                </div>         

                <div className="py-4 flex flex-col">
                    {
                        activities.map((activity, index) => {
                            return (
                                <>
                                    <div className="py-2 my-1 flex space-x-2 hover:bg-slate-50 cursor-pointer pr-2">
                                        <img src={activity.image} alt="" className="w-[200px] h-[120pxx] mr-1 rouunded-xl" />
                                        <div className="flex flex-col space-y-2">
                                            <span className="text-md font-semibold text-gray-800">
                                                {activity.pollingUnit}, {activity.ward}, {activity.lga}, {activity.state}
                                            </span>
                                            <p className="text-md text-gray-800">
                                                {activity.message}
                                            </p>

                                            <div className="pt-4 flex  space-x-4">
                                                <div className="text-xs text-gray-800 w-[100px] flex space-x-1">
                                                    <p className="flex space-x-1 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600 fill-current">
                                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{activity.created_at}</span>
                                                    </p>
                                                </div>
                                                <div className="text-xs text-gray-800 w-[100px] flex space-x-1">
                                                    <p className="flex space-x-1 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600 fill-current">
                                                            <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{activity.views}</span>
                                                    </p>
                                                </div>
                                                <div className="text-xs text-gray-800 w-[100px] flex space-x-1">
                                                    <div className="flex space-x-1 items-center px-2 py-1 cursor-pointer rounded-full hover:bg-slate-200">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-800 fill-current">
                                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                        </svg>
                                                        <span>{activity.likes}</span>
                                                    </div>
                                                </div>
                                                <div className="text-xs text-gray-800 w-[100px] flex space-x-1 relative">
                                                    <div className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-slate-200"
                                                        onClick={() => {share == activity.id ? setShare(null) : setShare(activity.id)}} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-gray-800 fill-current">
                                                            <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>

                                                    {
                                                        share == activity.id && (
                                                            <div id = "share" className="p-2 rounded-full flex space-x-3 bg-white shadow-lg absolute -top-10 l-0 z-10 ">
                                                                <WhatsappShareButton url="https://facebook.com/something">
                                                                    <WhatsappIcon size={32} round={true}/>
                                                                </WhatsappShareButton>
                                                                <FacebookShareButton url="https://facebook.com/something">
                                                                    <FacebookIcon size={32} round={true}/>
                                                                </FacebookShareButton>
                                                                <TwitterShareButton url="https://facebook.com/something">
                                                                    <TwitterIcon size={32} round={true}/>
                                                                </TwitterShareButton>
                                                            </div>)
                                                    }

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <Separator />
                                </>

                            );
                        })
                    }
                    
                </div>
                
            </DashboardMain>

            <ProfileSummary />
        </main>
    );

}