"use client"

import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "contexts/App";
import { useRouter } from "next/navigation";
import NavBar from 'components/home/NavBar';
import Sidebar from 'components/commons/Sidebar';
import { SessionProvider } from "contexts/Session";

export default function Layout({children}){

    const router = useRouter();

    const {user, setLoading} = useContext(AppContext);

    useEffect(() => {
        setLoading(false);
    }, []);


    return (
        <main className="w-screen flex justify-center">
             
            <SessionProvider>
                <div className="flex w-full">
                    <NavBar /> 
                    <Sidebar />
                    {children}   
                </div> 
            </SessionProvider>                                 
        </main>
    );

}