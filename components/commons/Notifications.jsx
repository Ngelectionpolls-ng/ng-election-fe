"use client"

import React, { useState, useContext } from "react"
import {AppContext} from"contexts/App"
import {displayCount} from "helpers";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "components/ui/tooltip"

export default function Notifications(){

    const count = 100;
    
    return (

        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <div className="flex justify-center items-center relative cursor-pointer" onClick={() => {}}>
                        {
                            count > 0 && (
                                <div className="min-w-4 h-4 p-1 rounded-full flex justify-center items-center
                                    text-white bg-red-600 absolute left-3 bottom-4 text-[8px] z-10">
                                    {
                                        displayCount(count)
                                    }
                                </div>
                            )
                        }                        
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-green-900 fill-current">
                            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z" clipRule="evenodd" />
                        </svg>  
                    </div>
                </TooltipTrigger>
                <TooltipContent>
                    <p>You have {count} pending {count == 1 ? 'notification' : 'notifications'}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
        
    );
}