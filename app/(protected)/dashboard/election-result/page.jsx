"use client"

import React, {useContext, useState, useEffect} from "react";
import ProfileSummary from "components/dashboard/ProfileSummary";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import DashboardMain from "components/commons/DashboardMain";
import { AppContext } from "contexts/App";
import { cn } from "lib/utils"
import { Input } from "components/ui/input"
import { Separator } from "components/ui/separator"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "components/ui/carousel"


import { GetStates, GetStateLGAs, 
    GetLGAWards, GetWardPollingUnits,
    GetPoliticalParties } from "services/profile/api";

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
  
import { useToast } from "hooks/use-toast";
import Error from "components/commons/Error";
import { makeSlug, titleCase } from "helpers";
import {ChevronDown, Check, Eye, ChevronRight, ArrowLeft} from "lucide-react";
import RecentEyewitnessActivities from "components/dashboard/RecentEyewitnessActivities";
import WardResults from "components/dashboard/WardResults";
import LGAResults from "components/dashboard/LGAResults";
import StateResults from "components/dashboard/StateResults";
import NationalResults from "components/dashboard/NationalResults";

export default function ElectionResult(){

    const {user, currentElection, setCurrentElection} = useContext(AppContext);
    
    const [selectedState, setSelectedState] = useState(null);
    const [selectedLGA, setSelectedLGA] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [selectedPollingUnit, setSelectedPollingUnit] = useState(null);

    const [states, setStates] = useState([{label:"Select a state", value: ""}]);
    const [openStateElections, setOpenStateElections] = useState(false);
    const [stateValue, setStateValue] = useState(null);
    const [lgas, setLgas] = useState([{label:"Select a lga", value: ""}]);
    const [openLgaElections, setOpenLgaElections] = useState(false);
    const [lgaValue, setLgaValue] = useState(null);
    const [wards, setWards] = useState([{label:"Select a ward", value: ""}]);
    const [openWardElections, setOpenWardElections] = useState(false);
    const [wardValue, setWardValue] = useState(null);
    const [pollingUnits, setPollingUnits] = useState([{label:"Select a polling unit", value: ""}]);
    const [openPollingUnitElections, setOpenPollingUnitElections] = useState(false);
    const [pollingUnitValue, setPollingUnitValue] = useState(null);

    //Results
    const [stateResults, setStateResults] = useState([]);
    const [lgaResults, setLgaResults] = useState([]);
    const [wardResults, setWardResults] = useState([]);
    const [pollingUnitResults, setPollingUnitResults] = useState([]);

    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const router = useRouter();
    const {toast} = useToast();

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

            displayStateResult(lgaResult);  
            
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

            displayLGAResult(wardResult);   
                                                                                    
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

            displayWardResult(pollingUnitResults)
            
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

    const displayStateResult = (lgaResult) => {
        setLgaValue(null);
        setWardValue(null);
        setPollingUnitValue(null);

        // Get state result
        // getLGAResults(state_id);

        // let's create fake results for now
        let results = [];
        console.log('lgaResult', lgaResult);
        lgaResult.forEach(lga => {
            results.push({
                candidates : [
                    { name: 'Bola Tinubu', acronym: 'APC', votes: 3000, color: 'bg-green-600', image: '/assets/images/apc.png' },
                    { name: 'Abubakar Atiku', acronym: 'PDP', votes: 3000, color: 'bg-pink-600', image: '/assets/images/pdp.png' },
                    { name: 'Peter Obi', acronym: 'LP', votes: 29000, color: 'bg-yellow-600', image: '/assets/images/apc.png' },
                    { name: 'Rabiu Kwankwaso', acronym: 'NNPP', votes: 90, color: 'bg-green-400', image: '/assets/images/pdp.png'}
                ],
                lga: lga,
                stats: {total_accredited: 12345, total_valid: 12345, total_votes: 12345, total_rejected: 2345},
                activity: {created_at: '10 mins', likes: '10k', views: '50k', shares: '2k'}    
            });
        });

        setLgaResults(results);
    }

    const displayLGAResult = (wardResults) => {
        setWardValue(null);
        setPollingUnitValue(null);
        //Get lga result

        //lets make fake results
        let results = [];
        console.log('wardResults', wardResults);
        wardResults.forEach(ward => {
            results.push({
                candidates : [
                    { name: 'Bola Tinubu', acronym: 'APC', votes: 3000, color: 'bg-green-600', image: '/assets/images/apc.png' },
                    { name: 'Abubakar Atiku', acronym: 'PDP', votes: 3000, color: 'bg-pink-600', image: '/assets/images/pdp.png' },
                    { name: 'Peter Obi', acronym: 'LP', votes: 29000, color: 'bg-yellow-600', image: '/assets/images/apc.png' },
                    { name: 'Rabiu Kwankwaso', acronym: 'NNPP', votes: 90, color: 'bg-green-400', image: '/assets/images/pdp.png'}
                ],
                ward: ward,
                stats: {total_accredited: 12345, total_valid: 12345, total_votes: 12345, total_rejected: 2345, status: 'Complete', report: 'Successful'},
                activity: {created_at: '10 mins', likes: '10k', views: '50k', shares: '2k'}    
            });
        });

        setWardResults(results);
    }

    const displayWardResult = (pollingUnitResults) => {
        setPollingUnitValue(null);
        // get ward result

        //lets make fake results
        let results = [];
        console.log('pollingUnitResults', pollingUnitResults);
        pollingUnitResults.forEach(pollingUnit => {
            results.push({
                candidates : [
                    { name: 'Bola Tinubu', acronym: 'APC', votes: 300, color: 'bg-green-600', image: '/assets/images/apc.png' },
                    { name: 'Abubakar Atiku', acronym: 'PDP', votes: 300, color: 'bg-pink-600', image: '/assets/images/pdp.png' },
                    { name: 'Peter Obi', acronym: 'LP', votes: 290, color: 'bg-yellow-600', image: '/assets/images/apc.png' },
                    { name: 'Rabiu Kwankwaso', acronym: 'NNPP', votes: 10, color: 'bg-green-400', image: '/assets/images/pdp.png'}
                ],
                pollingUnit: pollingUnit,
                stats: {total_accredited: 1345, total_valid: 135, total_votes: 1345, total_rejected: 45, status: 'Complete', report: 'Successful'},
                activity: {created_at: '10 mins', likes: '1k', views: '500', shares: '100'},   
                issues: [
                    {details: "Bad things happened in the polling unit. You don't want to know."}
                ]
            });
        });

        setPollingUnitResults(results);
    }

    const displayPollingUnitResults = (pollingunit_id) => {
        // get polliing unit results
    }

    const unsetStateResults = () => {
        setStateValue(null);
        setLgaValue(null);
        setWardValue(null);
        setPollingUnitValue(null);
    }

    const candidates = [
        { name: 'Bola Tinubu', acronym: 'APC', votes: 343000, color: 'bg-green-600', image: '/assets/images/apc.png' },
        { name: 'Abubakar Atiku', acronym: 'PDP', votes: 223000, color: 'bg-pink-600', image: '/assets/images/pdp.png' },
        { name: 'Peter Obi', acronym: 'LP', votes: 1129000, color: 'bg-yellow-600', image: '/assets/images/apc.png' },
        { name: 'Rabiu Kwankwaso', acronym: 'NNPP', votes: 4890, color: 'bg-green-400', image: '/assets/images/pdp.png' },
    ];

    const other_candidates = [
        { name: 'Bola Tinubu', acronym: 'BPC', votes: 43000, color: 'bg-green-600', image: '/assets/images/apc.png' },
        { name: 'Abubakar Atiku', acronym: 'ADP', votes: 23000, color: 'bg-pink-600', image: '/assets/images/pdp.png' },
        { name: 'Peter Obi', acronym: 'NLP', votes: 29000, color: 'bg-yellow-600', image: '/assets/images/apc.png' },
        { name: 'Rabiu Kwankwaso', acronym: 'CNPP', votes: 54890, color: 'bg-green-400', image: '/assets/images/pdp.png' },
        { name: 'Rabiu Hasan', acronym: 'WAPP', votes: 57790, color: 'bg-purple-400', image: '/assets/images/apc.png' },
    ];

    
    useEffect(() => {
        getAllStates();
    }, []);

    return (
        <main className="flex-1 flex bg-gray-50">

            <DashboardMain >

                <div className="w-full p-4 bg-white flex flex-col space-y-2 rounded-xl shadow-xl">
                    {
                        stateValue && (                             
                            <Button onClick={unsetStateResults} 
                                className="p-1 flex items-center justify-center rounded-full bg-transparent hover:bg-black/5 w-20 h-10 cursor-pointer">
                                <ArrowLeft className="w-4 h-4" /> <span className="text-xs font-semibolld">Back</span>
                            </Button>
                        )
                    }           
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
                                                                        setOpenStateElections(false)
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
                                                                        setOpenLgaElections(false)
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
                                                                        setOpenWardElections(false)
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
                        
                        <span className="text-gray-900 text-xs">{"September 12, 2023"}</span>
                    </div>

                    <Error error={error} />

                    {
                        !stateValue && (
                            <NationalResults candidates={candidates} />
                        )
                    }
                    
                    {
                        stateValue && !lgaValue && (
                            <StateResults stateValue={stateValue} lgas={lgas} lgaResults={lgaResults} />
                        )
                    }
                        
                    {
                        stateValue && lgaValue && !wardValue && (
                            <LGAResults lgaValue={lgaValue} wards={wards} wardResults={wardResults} />
                        )
                    }

                    {
                        stateValue && lgaValue && wardValue && (
                            <WardResults wardValue={wardValue} pollingUnits={pollingUnits} pollingUnitResults={pollingUnitResults} />
                        )
                    }                

                </div>

                {
                    !stateValue && (
                        <>
                            <h6 className="text-sm font-semibold pt-4">Other candidates</h6>
                            
                            {/* Other candidate carousel */}
                            <div className="w-full md:w-[800px] flex justify-center">
                                <Carousel
                                    opts={{
                                        align: "start",
                                    }}
                                    className="w-full"
                                    >
                                    <CarouselContent className="w-full">
                                        {other_candidates.map((item, index) => (
                                            <CarouselItem key={index} className="p-2 basis-1/2 md:basis-1/4">
                                                <div className="w-[180px] shadow-xl flex space-x-4 rounded-xl bg-white p-4">
                                                    <img src={item.image} alt=""  className="w-12 h-12 rounded-full" />
                                                    <div className="flex flex-col justify-center space-y-1 h-12 w-[100px] max-w-[100px]">
                                                        <h6 className="text-[10px]">{item.name}</h6>
                                                        <p className="text-xs">{item.acronym}</p>
                                                        <p className="text-sm font-bold text-gray-900">{item.votes}</p>
                                                    </div>            
                                                </div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious />
                                    <CarouselNext />
                                </Carousel>
                            </div>
                        </>
                    )
                }                

                <RecentEyewitnessActivities />
                
            </DashboardMain>

            

            <ProfileSummary />

        </main>
       
    );

}