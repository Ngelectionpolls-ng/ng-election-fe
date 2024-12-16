"use client"

import { useRouter } from "next/navigation";
import NavBar from 'components/home/NavBar';
import Sidebar from 'components/commons/Sidebar';
import { SessionProvider } from "contexts/Session";

export default function Layout({children}){

    const router = useRouter();

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