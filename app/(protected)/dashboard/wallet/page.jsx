"use client"

import React, { useContext, useState, useEffect } from "react";
import ProfileSummary from "components/dashboard/ProfileSummary";
import { Button } from "components/ui/button";
import { useRouter } from "next/navigation";
import DashboardMain from "components/commons/DashboardMain";
import { AppContext } from "contexts/App";
import { Layers2, Waypoints, BriefcaseBusiness, MoveUp, MoveDown, Plus } from "lucide-react";
import { getTime } from "helpers";
import RadialChart from "components/dashboard/RadialChart";
import Barchart from "components/dashboard/Barchart";
import { GetWalletInfo, ProcessWithdrawal, 
         GetTransactionHistory, WalletConversions } from "services/wallet/api";
import Error from "components/commons/Error";
import Withdrawal from "components/dashboard/Withdrawal";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";


export default function Wallet(){

    const router = useRouter();
    const {user} = useContext(AppContext);

    const [activeWalletFilter, setActiveWalletFilter] = useState('today');
    const [error, setError] = useState(null);
    const [fetching, setFetching] = useState(false);
    const [withdrawing, setWithdrawing] = useState(false);
    const [withdrawn, setWithdrawn] = useState(false);
    const [posts, setPosts] = useState(0);
    const [cash, setCash] = useState(0);
    const [points, setPoints] = useState(0);
    const [totalEarned, setTotalEarned] = useState(0);
    

    const activities = [];

    const status_colors = [
        {status: 'completed', color: 'text-green-700'},
        {status: 'pending', color: 'text-gray-600'},
        {status: 'cancelled', color: 'text-red-700'}
    ]

    const pointsDate = [
        { date: "1", points: 186 },
        { date: "2", points: 305 },
        { date: "3", points: 237 },
        { date: "4", points: 73 },
        { date: "5", points: 209 },
        { date: "6", points: 214 },
        { date: "7", points: 186 },
        { date: "8", points: 305 },
        { date: "9", points: 237 },
        { date: "10", points: 73 },
        { date: "11", points: 209 },
        { date: "12", points: 214 },
        { date: "13", points: 186 },
        { date: "14", points: 305 },
        { date: "15", points: 237 },
        { date: "16", points: 73 },
        { date: "17", points: 209 },
        { date: "18", points: 214 },
        { date: "19", points: 186 },
        { date: "20", points: 305 },
        { date: "21", points: 237 },
        { date: "22", points: 73 },
        { date: "23", points: 209 },
        { date: "24", points: 214 },
        { date: "25", points: 186 },
        { date: "26", points: 305 },
        { date: "27", points: 237 },
        { date: "28", points: 73 },
        { date: "29", points: 209 },
        { date: "30", points: 214 },
    ];

    const walletActivity = [
        {
            datetime: '2024-01-01 10:10:10', type: 'withdrawal', amount: '3000', status: 'pending'
        },
        {
            datetime: '2024-02-01 10:10:10', type: 'topup', amount: '56000', status: 'completed'
        },
        {
            datetime: '2024-02-03 10:10:10', type: 'withdrawal', amount: '5050', status: 'cancelled'
        },
        {
            datetime: '2024-04-03 10:10:10', type: 'topup', amount: '6050', status: 'completed'
        },
        {
            datetime: '2024-02-01 10:10:10', type: 'withdrawal', amount: '3000', status: 'pending'
        },
    ];

    useEffect(() => {
        getWalletInfo(user?.id);
    }, []);

    const getWalletInfo = async (user_id) => {
        setError(null);
        setFetching(true);
        const response = await GetWalletInfo(user_id);
        setFetching(false);

        console.log('reports', response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the activities now  
            const resp = response.data;
            setPosts(resp.posts);
            setCash(resp.cash);
            setPoints(resp.pointBalance);
            setTotalEarned(resp.totalEarned);
            setWithdrawn(resp.withdrawn);
            
            
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

    const handleWalletFilterChange = (filter) => {
        if(filter != activeWalletFilter){
            setActiveWalletFilter(filter);
            //Then do filter calls or local filter
        }
    }

    return (
        <main className="flex-1 p-4 flex">

            <DashboardMain>
               

                <div className="w-full flex justify-between mb-4">
                    <span className="text-gray-900 text-xs font-semibold">{"Name of polling unit"}</span>
                    <span className="text-gray-900 text-xs">{"September 12, 2023"}</span>
                </div>
                
                <Error error={error} />

                <div className="w-full flex justify-between items-center">
                    <div className="w-[300px] flex flex-col space-y-1">
                        <span className="text-gray-900 text-md font-semibold">{user?.name}</span>
                        <span className="text-green-900 text-md font-semibold">{user?.role}</span>
                    </div>
                    
                    <Button className="text-white rounded-full w-autoo px-8 py-2 mt-4 h-12 bg-green-900" onClick={() => setWithdrawing(true)}>Make a Withdrawal</Button>
                </div>

                <div className="w-full flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-4 py-4">

                    <div className="flex-1 flex flex-col items-center space-y-4 order-2 md:order-1 mt-8 md:mt-4">

                        <div className="w-full flex flex-col space-y-8 md:space-y-0 md:flex-row items-center">

                            <div className="flex w-full md:w-1/4 space-x-2">
                                <div className="flex justify-center items-center">
                                    <Layers2 />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Posts</span>
                                    <span className="text-sm font-semibold text-gray-900">{posts}</span>                                
                                </div>
                            </div>

                            <div className="flex w-full md:w-1/4 space-x-2">
                                <div className="flex justify-center items-center">
                                    <Waypoints />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Points Balance</span>
                                    <span className="text-sm font-semibold text-gray-900">{points}</span>                                
                                </div>
                            </div>

                            <div className="flex w-full md:w-1/4 space-x-2">
                                <div className="flex justify-center items-center">
                                    <BriefcaseBusiness />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Points Withdrawn</span>
                                    <span className="text-sm font-semibold text-gray-900">{withdrawn}</span>                                
                                </div>
                            </div>
                            
                            <div className="flex w-full md:w-1/4 space-x-2">
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                                    </svg>
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <span className="text-sm text-gray-500">Total Points Earned</span>
                                    <span className="text-sm font-semibold text-gray-900">{totalEarned}</span>                                
                                </div>
                            </div>

                        </div>

                        <h6 className="text-gray-500 text-xs self-start">Spending distribution</h6>

                        <div className="w-full md:w-3/4 flex space-x-16 md:justify-between self-start">

                            <RadialChart title={"Airtime recharge"} subtitle={"N1,500"} color={"orange"} percent={68} />

                            <RadialChart title={"Data recharge"} subtitle={"N1,000"} color={"green"} percent={31} />

                            <RadialChart title={"Others"} subtitle={"N500"} color={"blue"} percent={7} />

                        </div>

                    </div>

                    <div className="w-[320px] rounded-xl bg-purple-700 text-white text-sm h-[200px] p-4 flex flex-col order-1 md:order-2 justify-center space-y-4">
                        <span className="text-white/50 text-xs">Main Wallet</span>
                        <span className="text-white text-xl">₦{cash}</span>
                        <div className="w-full justify-between flex items-center">
                            <span className="text-xs text-white/80">
                                {user?.name}
                            </span>
                            <img src="/assets/icons/mastercard.png" alt="" className="h-8" />
                        </div>
                    </div>

                </div>

                <div className="w-full py-4 flex flex-col md:flex-row space-y-4 md:space-x-2 md:space-y-0">
                    <div className="w-full md:w-1/2">
                        <Barchart data={pointsDate} color={"rgba(10, 65, 30, 0.8)"} />
                    </div>
                    <div className="w-full md:w-1/2 border border-gray-200 rounded-xl p-4">
                        <div className="w-full flex justify-between items-center">
                            <div className="w-1/3 flex flex-col space-y-2">
                                <span className="text-sm font-semibold">
                                    Wallet Activity
                                </span>
                                <span className="text-xs">
                                    {
                                        activeWalletFilter == 'today' &&  "Today's activities"
                                    }
                                    {
                                        activeWalletFilter == 'weekly' &&  "Activities over the last 7 days"
                                    }
                                    {
                                        activeWalletFilter == 'weekly' &&  "Activities over the last month"
                                    }
                                </span>
                            </div>
                            <div className="w-1/2 flex space-x-1 py-8 text-xs font-semibold">
                                <span onClick={() => handleWalletFilterChange('monthly')} className={`cursor-pointer  ${activeWalletFilter == 'monthly' ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'} 
                                                    flex justify-center items-center h-8 rounded-full px-4 py-2`}>
                                    Monthly
                                </span>
                                <span onClick={() => handleWalletFilterChange('weekly')} className={`cursor-pointer  ${activeWalletFilter == 'weekly' ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'} 
                                                    flex justify-center items-center h-8 rounded-full px-4 py-2`}>
                                    Weekly
                                </span>
                                <span onClick={() => handleWalletFilterChange('today')} className={`cursor-pointer  ${activeWalletFilter == 'today' ? 'text-white bg-gray-900' : 'text-gray-900 bg-white'} 
                                                    flex justify-center items-center h-8 rounded-full px-4 py-2`}>
                                    Today
                                </span>
                            </div>
                        </div>
                        {
                            walletActivity.map((activity, index) => (
                                <div className="w-full p-4 flex justify-between items-center hover:shadow-2xl hover:drop-shadow-2xl cursor-pointer hover:scale-105" key={index}>
                                    <div className="w-10 h-10 border border-green-900 rounded flex justify-center items-center">
                                        {
                                            activity.type == 'withdrawal' ? (
                                                <MoveDown className="text-green-900" />
                                            ) : (
                                                <MoveUp />
                                            )
                                        }
                                    </div>
                                    {
                                        <span className="text-sm font-semibold w-[100px] ml-6">
                                            {
                                                activity.type == 'withdrawal' ? (
                                                    'Withraw'
                                                ) : (
                                                    'Topup'
                                                )
                                            }
                                        </span>
                                    }
                                    <span className="text-sm w-[100px]">
                                        {
                                            getTime(activity.datetime)
                                        }
                                    </span>

                                    <span className="text-sm w-[100px]">
                                        {
                                            activity.type == 'withdrawal' ? (
                                                -activity.amount
                                            ) : (
                                                activity.amount
                                            )
                                        }
                                    </span>

                                    {
                                        <span className={`text-sm w-[100px] ${status_colors.find(s => s.status == activity.status)['color']}`}>
                                            {
                                                activity.status
                                            }
                                        </span>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
                        
                
            </DashboardMain>

            <Withdrawal withdrawing={withdrawing} setWithdrawing={setWithdrawing} cash={`${cash}`} />
             

        </main>
       
    );

}