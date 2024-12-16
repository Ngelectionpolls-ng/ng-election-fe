"use client"

import React, {useContext} from 'react'

import { SessionContext } from "contexts/Session";

function Sidebar() {
    

    
    return (
        <div className="w-8 md:w-[200px] bg-green-800 h-screen shadow py-16 ml-2">
            <span className="text-white">Sidebar</span>
        </div>    
    )
}

export default Sidebar
