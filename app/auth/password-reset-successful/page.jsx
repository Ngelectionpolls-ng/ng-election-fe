"use client"

import React, {useState, useContext, useEffect } from "react";
import { AppContext } from "contexts/App"
import SiteIcon from "../../../components/commons/SiteIcon";
import { Button } from "components/ui/button"
import { useRouter } from 'next/navigation'



export default function PasswordResetSuccessful(){

    const router = useRouter();

    const {setLoading} = useContext(AppContext);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <div className="grow"></div>
                    <div className="w-[450px] pb-[100px] text-center">
                        <h1 className="text-2xl font-bold text-gray-800">Successful Password Reset</h1>
                        <p className="text-sm text-gray-800 text-center w-[450px] mb-8">You can now use your new password to login to your account.</p>
                        
                        <Button className="text-white rounded-full w-full px-8 py-2 mt-4 h-12" onClick={() => {setLoading(true); router.push('/auth/login')}}>Login</Button>
                    </div>

                    
                    {/* <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800">Don't have an account? <Link  href="/auth/signup"><span className="font-bold text-black">Create Account</span></Link></p>
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div> */}
                    
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">                    
                    <img src={'/assets/auth/Done-rafiki.png'} alt="" className="w-full scale-1110" /> 
                </div>
            </div>            
        </main>
    );

}