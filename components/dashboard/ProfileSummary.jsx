"use client"

import { AppContext } from "contexts/App";
import React, {useContext, useState, useEffect} from "react";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "components/ui/tooltip";

import Error from "components/commons/Error";

import { Separator } from "components/ui/separator";

import { ellipsify, getProfilePercentages } from "helpers";

import RadialChart from "components/dashboard/RadialChart";

import { GetProfile } from "services/profile/api";


export default function ProfileSummary(){

    const {user} = useContext(AppContext);
    const [fetching, setFetching] = useState(false);
    const [percentages, setPercentages] = useState({contact: 0, general: 0, account: 0});
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [role, setRole] = useState(null);
    const [photo, setPhoto] = useState(null);
    const [posts, setPosts] = useState(0);
    const [points, setPoints] = useState(0);
    const [error, setError] = useState(null);



    const getProfile = async (user_id) => {
        
        setError(null);
        setFetching(true);
        const response = await GetProfile(user_id);
        setFetching(false);

        console.log(response);
        if(response?.status >= 200 && response?.status < 300){
            const profile = response.data;

            setPhoto(profile.photo);
            profile.name && setName(profile.name ?? "");
            profile.role && setRole(profile.role ?? "");
            profile.phone && setPhone(profile.phone ?? "0-- ---- ---- ");
            profile.email && setEmail(profile.email ?? "");

            setPosts(profile.posts);
            setPoints(profile.points);

            setPercentages(getProfilePercentages(profile));
            
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
        user && getProfile(user.id);
    }, [user]);

    return (
        <div className="hidden md:block md:w-[280px] ">
            <div className='w-full h-[550px] bg-white rounded-xl shadow-md shadow-black/50 
                            flex flex-col items-center space-y-4 p-4'>
                
                <Error error={error} />
                
                <div className="relative">
                    <img src={photo} className="w-24 h-24 rounded-full bg-slate-500" alt="" />                        
                </div>
                <h4 className="text-xs font-semibold">{name}</h4>
                <p className="text-xs italic">{role}</p>

                <div className="flex space-x-4 w-full">

                    <div className="w-1/2 rounded-xl shadow-md 
                            border border-black/10 flex flex-col space-y-1 p-2 py-3 items-center">
                        <span className="text-xs font-semibold">{posts}</span>
                        <span className="text-xs">Posts</span>
                    </div>

                    <div className="w-1/2 rounded-xl shadow-md 
                            border border-black/10 flex flex-col space-y-1 p-2 py-3 items-center">
                        <span className="text-xs font-semibold">{points}</span>
                        <span className="text-xs">Points</span>
                    </div>

                </div>
                
                <Separator />
                            
                <div className="flex w-full space-x-4 items-center">
                    <div className="w-10 h-10 border border-black/10 rounded-full flex justify-center items-center text-green-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-5 h-5">
                            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <span className="font-semibold text-xs">
                        {phone ?? "0-- ---- ----"}
                    </span>
                </div>

                <div className="flex w-full space-x-4 items-center">
                    <div className="w-10 h-10 border border-black/10 rounded-full flex justify-center items-center text-green-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-5 h-5">
                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                        </svg>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger>
                                <span className="font-semibold text-xs">
                                    {ellipsify(email ?? "", 15)}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>{email ?? ""}</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>                        
                </div>

                <div className="w-full pt-4 flex justify-between">

                    <RadialChart title={"Contact info setup"} color={"orange"} percent={percentages.contact} />

                    <RadialChart title={"General info setup"} color={"green"} percent={percentages.general} />

                    <RadialChart title={"Account info setup"} color={"blue"} percent={percentages.account} />

                </div>

            </div>
        </div>
    );
}