"use client"

import React, {useContext, useEffect, useState} from "react";
import { isMobile, navItems, subItems, itemIds } from "helpers";
import { ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "components/ui/dropdown-menu"
import Link from "next/link";


export default function MobileLinks(){

    const [openedMenu, setOpenedMenu] = useState(null);

    const handleClick = (item) => {
        if(openedMenu === item){
            setOpenedMenu(null);
        }else{
            setOpenedMenu(item);
        }
    }

    return (
        <div className="fixed right-2 top-16 z-10 w-full shadow-lg rounded bg-white flex flex-col space-y-8 px-4 py-8">
            <span className="font-semibold text-xs text-green-900">Menu</span>

            {
                navItems.map((item, index) => (
                    <>
                        <div className="bg-slate-100 w-full shadow-md rounded-lg cursor-pointer" onClick={() => handleClick(item)} >
                            <div className="rounded-lg px-4 hover:bg-white/50 flex justify-between items-center h-9">
                                <span className="text-sm">{item}</span> <ChevronDown className="w-5 h-5" />                                    
                            </div>
                        </div>
                        {
                            openedMenu == item && (
                                <div className={`w-full flex flex-col space-y-4 transition-all duration-200`}>
                                    {
                                        subItems[index].map((subItem, index2) => (
                                        <div key={index2} className="w-full px-4">
                                            <Link href={itemIds[index2]} >{subItem}</Link>
                                        </div>                                
                                        ))
                                    }
                                </div>
                            )
                        }
                        
                    </>
                ))
            }

        </div>
    )
}