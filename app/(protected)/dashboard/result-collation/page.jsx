"use client"

import ProfileSummary from "components/dashboard/ProfileSummary";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import DashboardMain from "components/commons/DashboardMain";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "components/ui/tooltip"

import { ellipsify } from "helpers";


export default function ResultCollation(){

    const router = useRouter();

    const results = [];

    const activities = [
        {
            image: "/assets/images/list-1.png",
            pollingUnit: "polling unit 1",
            ward: "ward 1",
            lga: "LGA 1",
            state: "State 1",
            message: "There was a little conflict between some ballot box snatchers and the civilians at ikutekpene south axis",
            created_at: "10 mins",
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
            created_at: "10 mins",
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
            created_at: "10 mins",
            views: '40k',
            likes: '20k'
        }        
    ];

    return (
        <main className="flex-1 p-4 flex bg-black/2">

            <DashboardMain >

                <div className="w-full flex justify-between">
                    <span className="text-gray-900 text-xs font-semibold">{"Name of polling unit"}</span>
                    <span className="text-gray-900 text-xs">{"September 12, 2023"}</span>
                </div>
                { 
                    !results.length ? (
                        <div className="w-full flex flex-col items-center space-y-2 py-4">
                            <p className="text-center text-md md:w-1/2">
                                Input Result Here as soon as Vote Count Commences 
                            </p>

                            <img src={"/assets/images/undraw_download_sa8g.png"} alt="Empty results page" className="w-[90%] md:w-[60%]" />

                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-center space-y-2 py-4 h-full">
                            <span className="font-semibold text-gray-900">Results</span>
                        </div>
                        
                    )
                    
                }   

                <div className="w-full overflow-x-scroll flex flex-wrap md:flex-nowrap space-y-4 md:space-x-6">
                    {
                        activities.map((activity, index) => {
                            return (
                                
                                <div className="py-2 my-1 flex flex-col space-y-2 w-full md:w-[250px] p-4 rounded-xl shadow-xl bg-white" key={`activity-${index}`}>
                                    <p className="text-sm font-semibold text-gray-800">
                                        {activity.pollingUnit}, {activity.ward}, {activity.lga}, {activity.state}
                                    </p>
                                    <img src={activity.image} alt="" className="w-full h-[120pxx] mr-1 rouunded-xl" />
                                    <div className="flex flex-col space-y-2">
                                        <span className="text-sm font-semibold text-gray-800">
                                            {activity.pollingUnit}, {activity.ward}, {activity.lga}, {activity.state}
                                        </span>
                                        <p className="text-md text-gray-800">
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <TooltipTrigger>                                                
                                                        <p className="w-full text-sm text-left">{ellipsify(activity.message, 50)} </p>                          
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className="w-60">{activity.message}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </p>

                                        <div className="pt-4 flex  space-x-4">
                                            <div className="text-[10px] text-gray-800 w-[150px] flex space-x-1">
                                                <p className="flex space-x-1 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600 fill-current">
                                                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{activity.created_at}</span>
                                                </p>
                                            </div>
                                            <div className="text-xs text-black w-[50px] flex space-x-1">
                                                <p className="flex space-x-1 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600 fill-current">
                                                        <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{activity.views}</span>
                                                </p>
                                            </div>
                                            <div className="text-xs text-gray-800 w-[50px] flex space-x-1">
                                                <div className="flex space-x-1 items-center px-2 py-1 cursor-pointer rounded-full hover:bg-slate-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-green-800 fill-current">
                                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                    </svg>
                                                    <span>{activity.likes}</span>
                                                </div>
                                            </div>
                                            <div className="text-xs text-gray-800 w-[50px] flex space-x-1">
                                                <div className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-slate-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-800 fill-current">
                                                        <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <p className="text-sm font-semibold text-gray-800">
                                       {activity.state}, Nigeria
                                    </p>
                                </div>
                                

                            );
                        })
                    }
                </div>         
                
            </DashboardMain>

            <ProfileSummary />
        </main>
       
    );

}