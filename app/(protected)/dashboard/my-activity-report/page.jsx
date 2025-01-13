
"use client"

import React, {useContext, useEffect, useState} from "react";
import { cn } from "lib/utils"
import { Button } from "components/ui/button"
import { Separator } from "components/ui/separator"

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
import ProfileSummary from "components/dashboard/ProfileSummary";

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
            status: 'pending'
        },
        {
            image: "/assets/images/list-2.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            status: 'approved'
        },
        {
            image: "/assets/images/list-1.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            status: 'rejected'
        },
        {
            image: "/assets/images/list-2.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            status: 'approved'
        },
        {
            image: "/assets/images/list-1.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            status: 'rejected'
        },
        {
            image: "/assets/images/list-2.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins ago",
            status: 'approved'
        },
    ];

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <main className="flex-1 p-4 flex">

            <DashboardMain >
                {/* header */}
                <div className="w-full flex flex-col space-y-2 md:flex-row justify-between items-center self-start">

                    <span className="text-sm font-semibold text-gray-800">
                        Updates on Your Report
                    </span>
                
                    <div className="flex space-x-12 items-center">

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

                <div className="py-4 flex flex-col">
                    {
                        activities.map((activity, index) => {
                            return (
                                <>
                                    <div className="py-2 my-1 flex flex-col md:flex-row space-y-2 md:space-x-2 ">
                                        <img src={activity.image} alt="" className="w-full md:w-[200px] h-[120pxx] mr-1 rouunded-xl" />
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
                                                        {
                                                            activity.status == 'pending' && 
                                                                <span className="text-xs text-gray-600 font-semibold">Pending</span>                                                         
                                                        }
                                                        {
                                                            activity.status == 'approved' && 
                                                                <span className="text-xs text-green-600 font-semibold">Approved</span>                                                         
                                                        }
                                                        {
                                                            activity.status == 'rejected' && 
                                                                <span className="text-xs text-red-500 font-semibold">Rejected</span>                                                         
                                                        }
                                                        
                                                    </p>
                                                </div>
                                                <div className="text-xs text-gray-800 w-[100px] flex space-x-1">
                                                    <p className="flex space-x-1 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600 fill-current">
                                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                                        </svg>
                                                        <span>{activity.created_at}</span>
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