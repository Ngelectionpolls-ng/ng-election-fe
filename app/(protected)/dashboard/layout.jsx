"use client"

import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "contexts/App";
import { useRouter } from "next/navigation";
import NavBar from 'components/home/NavBar';
import Sidebar from 'components/commons/Sidebar';
import { SessionProvider } from "contexts/Session";
import { DashboardProvider } from "contexts/Dashboard";

export default function Layout({children}){

    const router = useRouter();

    const {user, setLoading} = useContext(AppContext);

    useEffect(() => {
        setLoading(false);
    }, []);


    return (
        <main className="w-screen flex justify-center">
             
            <SessionProvider>
                <DashboardProvider>
                    <div className="flex w-full">
                        <Sidebar />
                        {children}   
                    </div>
                </DashboardProvider>                 
            </SessionProvider>                                 
        </main>
    );

}