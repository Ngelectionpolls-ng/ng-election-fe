"use client"

import {AuthProvider} from "contexts/Auth";

export default function RootLayout({children}){
    return (
         <main>
            <AuthProvider>
                {children}  
            </AuthProvider>
         </main>        
    );
}