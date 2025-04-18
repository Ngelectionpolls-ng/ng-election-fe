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

import { DashboardContext } from "contexts/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import {getInitials, ellipsify, logout} from 'helpers';
import {ChevronDown, Plus, Video, Image, FileInput, PenLine, X, Camera, Check} from "lucide-react";
import { useRouter } from 'next/navigation';
import NavUserIcon from "components/commons/NavUserIcon";
import Notifications from "components/commons/Notifications";
import { AppContext } from 'contexts/App';
import Error from "components/commons/Error";
import { Label } from 'components/ui/label'


export default function Voucher({withdrawn, setWithdrawn}){
    
    const [error, setError] = useState(null);
    const {user} = useContext(AppContext);

    const [posts, setPosts] = useState(0);
    const [cash, setCash] = useState(0);
    const [points, setPoints] = useState(0);
    const [totalEarned, setTotalEarned] = useState(0);
    const [withdrawn, setWithdrawn] = useState(0);

    const [data, setData] = useState({
        userId: null,
        withdrawalType: "cash",
        amount: 0,
        merchant: null,
        phone: null
    });

    useEffect(() => {
        setData({...data, userId: user?.id, phone: user?.phone});
    }, [user]);

    

    return (

        <div  id="voucher" className={`fixed top-0 left-0 z-10 bg-black/70 rounded-xl 
                    ${withdrawn ? 'flex' : 'hidden'} flex-col items-center justify-center w-full h-full`} 
                            //  onClick={(e) => e.target.id == 'voucher' && setWithdrawn(false)}
                             >

                <div  className="w-4/5 min-w-[800px] bg-white shadow-xl py-4 px-8 rounded-xl flex">
                    <div className="flex-1">
                        <h4 className="text-black/80 font-bold">Voucher Details</h4>

                        <div className="flex mt-8">

                            <div className="flex flex-col space-y-4 w-1/3">

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Account holder</h6>
                                    <span className="text-xs text-black font-semibold">{user?.name}</span>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Phone Number</h6>
                                    <span className="text-xs text-black font-semibold">{user?.phone}</span>
                                </div>
                                
                            </div>

                            <div className="flex flex-col space-y-4 w-1/3">
                                
                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Amount</h6>
                                    <span className="text-xs text-black font-semibold">N{amount}</span>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Merchant Name</h6>
                                    <span className="text-xs text-black font-semibold">{merchant}</span>
                                </div>
                                
                            </div>

                            <div className="flex flex-col space-y-4 w-1/3">
                                
                            <div className="flex flex-col space-y-4 w-1/3">
                                
                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Voucher Number</h6>
                                    <span className="text-xs text-black font-semibold">{voucherNumber}</span>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Expiry Date</h6>
                                    <span className="text-xs text-black font-semibold">{expiryDate}</span>
                                </div>
                                
                            </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="w-[300px] rounded-xl bg-purple-700 text-white text-sm h-[180px] p-4 flex flex-col order-1 md:order-2 justify-center space-y-4">
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

            </div>

    );

}