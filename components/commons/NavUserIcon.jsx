
import React, {useContext, useEffect} from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "components/ui/dropdown-menu"
import Link from "next/link";
import { AppContext } from "contexts/App";
import { DashboardContext } from "contexts/Dashboard";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { getInitials, ellipsify, logout } from 'helpers';
import { ChevronDown } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function NavUserIcon(){

    const {isLoggedIn, user, setLoading} = useContext(AppContext);
    const {setActiveMenu} = useContext(DashboardContext);
    const router = useRouter();

    return (
        <div className="flex items-center min-w-[180px] cursor-pointer p-1 rounded-full">
            <Avatar>
                <AvatarImage src={user?.photo} />
                <AvatarFallback>{getInitials(user?.name)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center">
                <span className="text-xs mx-2 font-semibold">{ellipsify(user?.name)}</span>
                <span className="text-xs mx-2 italic">{ellipsify(user?.role)}</span>
            </div>
            
            
            <DropdownMenu className="ml-auto mr-2">
                <DropdownMenuTrigger>
                    <div className="rounded-full w-6 h-6 hover:bg-white/50 flex justify-center items-center flex-col">
                        <ChevronDown className="w-4 h-4" />                                    
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem><Link onClick={() => {setLoading(true); setActiveMenu(constants.PROFILE)}} href="/dashboard/my-account-info" >My Account</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link onClick={() => setLoading(true)} href="/dashboard" >Dashboard</Link></DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div> 
    );
}