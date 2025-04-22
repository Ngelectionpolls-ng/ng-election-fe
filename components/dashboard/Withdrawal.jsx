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
import { Label } from 'components/ui/label';
import { GetWalletInfo, ProcessWithdrawal, 
         GetTransactionHistory, WalletConversions } from "services/wallet/api";


export default function Withdrawal({withdrawing, setWithdrawing, cash}){
    
    const [error, setError] = useState(null);
    const {user} = useContext(AppContext);

    const [fetching, setFetching] = useState(false);
    const [posts, setPosts] = useState(0);
    const [points, setPoints] = useState(0);
    const [totalEarned, setTotalEarned] = useState(0);
    const [withdrawn, setWithdrawn] = useState(0);
    const [voucherNumber, setVoucherNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");

    const [data, setData] = useState({
        // userId: null,
        withdrawalType: "cash",
        amount: "0",
        merchant: null,
        phone: null
    });

    useEffect(() => {
        // setData({...data, userId: user?.id, phone: user?.phone});
        setData({...data, phone: user?.phone});
    }, [user]);

    const validateWithdrawal = () => {
        if(parseInt(cash) < 100){
            setError("You don't have enough cash");
            return false;
        }

        if(!data.merchant){
            setError("Please select a merchant");
            return false;
        }

        if(!data.amount){
            setError("Please select an amount");
            return false;
        }

        if(parseInt(data.amount) > parseInt(cash)){
            setError("The amount is greater than the balance");
            return false;
        }

        return true;
    }

    
    const processWithdrawal = async (data) => {
        if(!validateWithdrawal()) return; 
        setError(null);
        setFetching(true);
        const response = await ProcessWithdrawal(data);
        setFetching(false);

        

        console.log('withdrawal response', response);
        if(response.status >= 200 && response.status < 300){

            const details = response.data.data.details;
            setVoucherNumber(details.pin);
            setExpiryDate(details.expiryDate ?? 'N/A');
            
            setWithdrawing(false);
            setWithdrawn(true);

        }else{

            console.log(response);

            setError(response.message[0]);

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

    return (
        <>

            {/* //For withdrawal */}
            <div  id="generate-voucher" className={`fixed top-0 left-0 z-10 bg-black/70 rounded-xl 
                    ${withdrawing ? 'flex' : 'hidden'} flex-col items-center justify-center w-full h-full`} 
                             onClick={(e) => e.target.id == 'generate-voucher' && setWithdrawing(false)}>
                
                <div  className="w-4/5 min-w-[800px] bg-white shadow-xl py-4 px-8 rounded-xl flex space-x-4">
                    <div className="flex-1">
                        <h4 className="text-black/80 font-bold">Generate a Voucher</h4>
                        <Error error={error} />
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
                                    <h6 className="text-xs text-gray-500">Available Balance</h6>
                                    <span className="text-xs text-black font-semibold">{cash}</span>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Merchant Name</h6>
                                    <Select onValueChange={(e) => {setError(null); setData({...data, merchant: e}); console.log('merchant', e)}} className="h-8 text-xs">
                                        <SelectTrigger className="h-8 bg-slate-200 w-[150px] text-xs" >
                                            <SelectValue placeholder="Select Merchant" />
                                        </SelectTrigger>
                                        <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b">
                                            <SelectGroup>
                                                <SelectItem value="mtn">MTN</SelectItem>
                                                <SelectItem value="etisalat">Etisalat</SelectItem>
                                                <SelectItem value="airtel">Airtel</SelectItem>
                                                <SelectItem value="glo">Glo</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                
                            </div>

                            <div className="flex flex-col space-y-4 w-1/3">
                                
                                <div className="flex flex-col space-y-2">
                                    <Button className="text-white rounded-full w-4/5 px-8 h-10 bg-green-900" onClick={() => {console.log('data', data); processWithdrawal(data)}}>
                                        <Plus className="text-[6px] text-white"/> Generate
                                    </Button>                                            
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Select Amount</h6>
                                    <Select onValueChange={(e) => {setError(null); setData({...data, amount: e}); console.log('amount', e)}} className="h-8 text-xs">
                                        <SelectTrigger className="h-8 bg-slate-200 w-[150px] text-xs" >
                                            <SelectValue placeholder="Select Amount" />
                                        </SelectTrigger>
                                        <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b">
                                            <SelectGroup>
                                                <SelectItem value="100">100</SelectItem>
                                                <SelectItem value="200">200</SelectItem>
                                                <SelectItem value="500">500</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
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

            {/* For voucher */}
            <div  id="voucher" className={`fixed top-0 left-0 z-10 bg-black/70 rounded-xl 
                    ${withdrawn ? 'flex' : 'hidden'} flex-col items-center justify-center w-full h-full`} 
                            //  onClick={(e) => e.target.id == 'voucher' && setWithdrawn(false)}
                             >
               
                <div  className="w-4/5 min-w-[800px] bg-white shadow-xl py-4 px-8 rounded-xl flex relative">
                    
                    <span className="w-10 h-10 bg-black/90 rounded-full flex 
                                justify-center items-center cursor-pointer 
                                hover:bg-black/50 absolute right-2 top-2" 
                            onClick={() => setWithdrawn(false)} >
                        <X className="text-white"/>
                    </span>

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
                                    <span className="text-xs text-black font-semibold">N{data.amount}</span>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <h6 className="text-xs text-gray-500">Merchant Name</h6>
                                    <span className="text-xs text-black font-semibold">{data.merchant}</span>
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
                        <span className="text-white/50 text-xs">{voucherNumber}</span>
                        <span className="text-white text-xl">₦{data.amount}</span>
                        <div className="w-full justify-between flex items-center">
                            <span className="text-xs text-white/80">
                                {user?.name}
                            </span>
                            <img src="/assets/icons/mastercard.png" alt="" className="h-8" />
                        </div>
                    </div>                     
                
                </div>

            </div>
        
        </>
        

    );

}