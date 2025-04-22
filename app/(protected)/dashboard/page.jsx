"use client"

import React, { useEffect } from "react";
import ProfileSummary from "components/dashboard/ProfileSummary";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import DashboardMain from "components/commons/DashboardMain";


export default function Dashboard(){

    const router = useRouter();
    const activities = [];

    useEffect(() => {
        
    }, []);

    return (
        <main className="flex-1 p-4 flex">

            <DashboardMain >

                <div className="w-full flex justify-between">
                    <span className="text-gray-900 text-xs font-semibold">{"Name of polling unit"}</span>
                    <span className="text-gray-900 text-xs">{"September 12, 2023"}</span>
                </div>
                { 
                    !activities.length ? (
                        <div className="w-full flex flex-col items-center space-y-2 py-4">
                            <p className="text-center text-md md:w-1/2">
                                You have no recorded activities, and you have made 0 earnings 
                            </p>

                            <img src={"/assets/images/Post-cuate.png"} alt="Empty activity" className="w-[90%] md:w-[75%]" />

                        </div>
                    ) : (
                        <div className="w-full flex flex-col items-center space-y-2 py-4 h-full">
                            <span className="font-semibold text-gray-900">Activities</span>
                        </div>
                        
                    )
                    
                }            
                
            </DashboardMain>

            <ProfileSummary />
        </main>
       
    );

}