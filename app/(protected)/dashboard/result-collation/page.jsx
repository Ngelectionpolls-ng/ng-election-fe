"use client"

import ProfileSummary from "components/dashboard/ProfileSummary";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import DashboardMain from "components/commons/DashboardMain";

import RecentEyewitnessActivities from "components/dashboard/RecentEyewitnessActivities";


export default function ResultCollation(){

    const router = useRouter();

    const results = [];

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

                <RecentEyewitnessActivities />   
                
            </DashboardMain>

            <ProfileSummary />
        </main>
       
    );

}