
"use client"

import React, {useContext, useEffect, useState} from "react";
import { cn } from "lib/utils"
import { Button } from "components/ui/button"
import { Separator } from "components/ui/separator"
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

import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, ChartColumnBig, Check, Clock} from "lucide-react";

import { useRouter } from "next/navigation";
import { AppContext } from "contexts/App";
import DashboardMain from "components/commons/DashboardMain";
import ProfileSummary from "components/commons/ProfileSummary";

export default function MyActivityReport(){

    const router = useRouter();
    const {setLoading} = useContext(AppContext);

    const [openPollingUnits, setOpenPollingUnits] = useState(false);
    const [pollingUnit, setPollingUnit] = useState("");
    const [value, setValue] = useState(null);

    const pollingUnits = [
        {
            label: "polling unit 1",
            value: "polling-unit-1"
        },
        {
            label: "polling unit 2",
            value: "polling-unit-2"
        },
        {
            label: "polling unit 3",
            value: "polling-unit-3"
        }
    ];

    const activities = [
        {
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
    }, []);

    return (
        <main className="flex-1 p-4 flex">

            <DashboardMain >
                {/* header */}
                <div className="w-full flex justify-between items-center self-start">

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
                                    {pollingUnit
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
                                                    pollingUnit === apollingUnit.value ? "opacity-100" : "opacity-0"
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
                            <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b h-9">
                                <SelectGroup>
                                    <SelectItem value="all-updates">All Updates</SelectItem>
                                    <SelectItem value="today">Today</SelectItem>
                                    <SelectItem value="last-month">Last month</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                    </div>
                </div>         

                <div className="py-4 flex flex-col">
                    {
                        activities.map((activity, index) => {
                            return (
                                <>
                                    <div className="py-2 my-1 flex space-x-2">
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
                                                    <p className="flex space-x-1 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-800 fill-current">
                                                            <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                        </svg>
                                                        <span>{activity.likes}</span>
                                                    </p>
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