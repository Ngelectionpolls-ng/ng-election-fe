"use client"

import Link from "next/link";
import SiteIcon from "../../../components/commons/SiteIcon";




export default function EmailVerified(){

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1104px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <div className="grow"></div>
                    <div className="w-[450px] pb-[100px] text-center">
                        <h1 className="text-2xl font-bold text-gray-800">Your email has been verified successfully</h1>
                        <p className="text-sm text-gray-800 text-center w-[450px] mb-8">You can now login to your account.</p>
                        
                        <Link href="/auth/login" className="text-white w-full rounded-full mt-8 px-44 py-2 h-12 bg-green-900">Login</Link>

                    </div>

                    
                    {/* <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800">Don't have an account? <Link  href="/auth/signup"><span className="font-bold text-black">Create Account</span></Link></p>
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div> */}
                    
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">                    
                    <img src={'/assets/auth/Good team-pana.png'} alt="" className="w-full" /> 
                </div>
            </div>            
        </main>
    );

}