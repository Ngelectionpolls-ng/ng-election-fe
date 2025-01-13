"use client"

import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "contexts/App";
import { useRouter } from "next/navigation";
import DashboardNavBar from 'components/commons/DashboardNavBar';
import Sidebar from 'components/commons/Sidebar';
import { SessionProvider } from "contexts/Session";

export default function Layout({children}){

    const router = useRouter();

    const {user, setLoading} = useContext(AppContext);

    useEffect(() => {
        setLoading(false);
    }, []);


    return (
        <main className="w-screen">
             
            <SessionProvider>                
                <div className="flex w-screen">
                    <Sidebar />
                    <div className="flex-1 h-screen overflow-y-scroll">
                        <DashboardNavBar />
                        {children}   
                    </div>                        
                </div>                              
            </SessionProvider>                                 
        </main>
    );

}