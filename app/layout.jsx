"use client"

import "./globals.css";
import { Suspense } from "react";
import { Toaster } from "components/ui/toaster";
import {AppProvider} from "contexts/App";
import Loading from "components/commons/Loading";
import { DashboardProvider } from "contexts/Dashboard";

export default function RootLayout({children}){

    return (
        <html lang="en">
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
                <link rel="icon" href="/favicon.png" type="image/x-icon"/>
            </head>
            <body style={{fontFamily: "Poppins", fontWeight: "400", fontStyle: "normal", boxSizing: "border-box"}} className="w-screen">      
                <AppProvider>
                    <DashboardProvider>
                        <Suspense>
                            {children}   
                        </Suspense>  
                    </DashboardProvider>                     
                    <Loading />                  
                </AppProvider>                                                       
                <Toaster />                
            </body>
        </html>
    );
}