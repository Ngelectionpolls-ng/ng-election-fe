"use client"

import React, {useContext, useEffect, useState} from 'react'
import Image from 'next/image'
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
  
  import {
      Select,
      SelectContent,
      SelectGroup,
      SelectItem,
      SelectLabel,
      SelectTrigger,
      SelectValue,
  } from "components/ui/select"

import { cn } from "lib/utils"
import { Input } from "components/ui/input"
import { Button } from "components/ui/button"

import { AppContext } from "contexts/App";
import { DashboardContext } from "contexts/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {getInitials, ellipsify, logout} from 'helpers';
import {ChevronDown, Check} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";
import Messages from "components/commons/Messages";

function DashboardNavBar() {
    
    const {isLoggedIn, user, setLoading, elections, currentElection, setCurrentElection} = useContext(AppContext);
    const {activeMenu, setActiveMenu} = useContext(DashboardContext);
    const router = useRouter();

    const [openElections, setOpenElections] = useState(false);
    const [election, setElection] = useState(currentElection);
    const [value, setValue] = useState(null);

    const proccessElections = () => {
        if(elections){
            elections.forEach(election => {
                election.label = election.name;
                election.value = election.name;
            });
        }
    }
    


    useEffect(() => {
        setLoading(false);
        proccessElections();
    }, [elections]);
    
    return (        
        
        <div className="flex items-center justify-between px-4 py-4 h-16 w-full">

            <div className="w-[250px] font-semibold">
               {/* {activeMenu} Page */}
                <Popover open={openElections} onOpenChange={setOpenElections}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={openElections}
                            className="w-full justify-between rounded text-black text-xs h-9"
                        >
                            {value
                                ? elections.find((election) => election.value === value)?.label
                                : "Select an Election"}
                            <ChevronDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                        <Command>
                            <CommandInput placeholder="Select Election" className="h-9" />
                            <CommandList>
                                <CommandEmpty>No elections found.</CommandEmpty>
                                <CommandGroup>
                                    {elections.map((an_election) => (
                                        <CommandItem
                                            key={an_election.value}
                                            value={an_election.value}
                                            onSelect={(currentValue) => {
                                                setValue(currentValue === value ? "" : currentValue);
                                                setCurrentElection(currentValue);
                                                setOpenElections(false)
                                            }}
                                        >
                                        {an_election.label}
                                        <Check
                                            className={cn(
                                            "ml-auto",
                                            value === an_election.value ? "opacity-100" : "opacity-0"
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

            <div className="hidden md:flex w-[450px] h-8 rounded-full bg-slate-200 justify-between p-1">
                <span className="w-[20px]"></span>
                <Input type="text" placeholder="Search something here..." className="h-full w-[400px] focus:outline-slate-200 focus:border-slate-200 focus-visible:ring-none focus-visible:ring-0"/>
                <div className="cursor-pointer h-6 w68 flex items-center justify-center rounded-full hover:bg-black/10 mr-2" onClick={() => {}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                        <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                    </svg>
                </div>
            </div>
            
            <div className="hidden md:flex space-x-8 ">  
                <Messages />
                <Notifications />              
                <NavUserIcon />                                          
            </div>   
            
            <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>             
            
        </div>

    )
}

export default DashboardNavBar
