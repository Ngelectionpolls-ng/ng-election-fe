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

import { AppContext } from "contexts/App";
import { DashboardContext } from "contexts/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {getInitials, ellipsify, logout} from 'helpers';
import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, Camera, Check} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";


export default function ResultEntry(){

    const [addingResult, setAddingResult] = useState(false);
    const [openPoliticalParty, setOpenPoliticalParty] = React.useState(false)
    const [politicalParty, setPoliticalParty] = React.useState("")

    const parties = [
        {
            value: "apc",
            label: "APC",
        },
        {
            value: "pdp",
            label: "PDP",
        },
        {
            value: "nnpp",
            label: "NNPP",
        },
        {
            value: "lp",
            label: "LP",
        },
    ];
   
    const {
        capturing, setCapturing, 
        capturingVideo, setCapturingVideo,
        captured, setCaptured,
        enteringResult, setEnteringResult
    } = useContext(DashboardContext);

    useEffect(() => {

    }, []);

    return (
        <div  className={`${enteringResult ? 'block' : 'hidden'} fixed -top-2 left-0 z-10 text-white rounded-xl 
                            shadow-xl drop-shadow-xl flex flex-col items-center w-full h-full`}>
                
            <div className="relative w-[480px] h-[800px] text-center bg-black 
                                rounded-xl flex flex-col items-center justify-center">
                
                <div className="absolute top-0 left-0 w-full flex justify-between p-4 self-start">
                    {/* Election select */}
                    <Select className="px-2 border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" onValueChange={(e) => {console.log(e);}} >
                        <SelectTrigger className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0 w-auto" >
                            <SelectValue placeholder="Select election" />
                        </SelectTrigger>
                        <SelectContent className="px-2 border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                            <SelectGroup className="px-2">
                                <SelectItem value="presidential-election">Presidential Election</SelectItem>
                                <SelectItem value="gubernatorial-election">Gubernatorial Elections</SelectItem>
                                <SelectItem value="house-of-assembly-election">House of Assembly Election</SelectItem>
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
                        <>
                            <div className="text-white self-center p-4 grid grid-cols-2 grid-rows-4 gap-4 gap-y-12 mt-20 w-full text-xs">

                                <Input type="text" placeholder="No. of registered voters" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />

                                <Input type="text" placeholder="No. of accredited voters" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />

                                <Input type="text" placeholder="No. of rejected voters" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />

                                <Input type="text" placeholder="No. of spoiled voters" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />

                                <Input type="text" placeholder="No. of valid voters" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />

                                <Input type="text" placeholder="No. of unused ballot papers" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />

                                <Popover open={openPoliticalParty} onOpenChange={setOpenPoliticalParty}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openPoliticalParty}
                                            className="w-full justify-between rounded text-gray-500 text-xs h-12 focus:border-white"
                                        >
                                            {value
                                                ? parties.find((party) => party.value === value)?.label
                                                : "Select political party..."}
                                            <ChevronDown className="opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-full p-0">
                                        <Command>
                                            <CommandInput placeholder="Search political parties..." className="h-12" />
                                            <CommandList>
                                                <CommandEmpty>No parties found.</CommandEmpty>
                                                <CommandGroup>
                                                    {parties.map((party) => (
                                                        <CommandItem
                                                            key={party.value}
                                                            value={party.value}
                                                            onSelect={(currentValue) => {
                                                                setValue(currentValue === value ? "" : currentValue)
                                                                setOpenPoliticalParty(false)
                                                            }}
                                                        >
                                                        {party.label}
                                                        <Check
                                                            className={cn(
                                                            "ml-auto",
                                                                value === party.value ? "opacity-100" : "opacity-0"
                                                            )}
                                                        />
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>

                                <Input type="text" placeholder="Votes allocated to party" onChange={(e) => {}} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 h-12
                                                focus:border-b focus:border-0 bg-white rounded text-black w-full" 
                                />
                            </div>
                            
                            <div className="w-full grow flex flex-col justify-end items-center py-4 ">
                                <Button className="bg-green-900 w-[200px] text-white text-xs rounded px-4" onClick={() => setAddingResult(true)}>Submit</Button>
                            </div>
                        </>
                        
                    )
                }
                

            </div>                
        </div>
    )

}