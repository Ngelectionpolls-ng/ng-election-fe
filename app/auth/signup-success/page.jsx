"use client"

import React, {useState, useContext, useEffect } from "react";
import { AppContext } from "contexts/App"
import Link from "next/link";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import {RequestNewCode} from "services/auth/api";
import { Button } from "components/ui/button";
import { useToast } from "hooks/use-toast";
import { useRouter } from 'next/navigation';


export default function VerificationEmailSent(){

    const [email, setEmail] = useState(localStorage.getItem('email'));
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const {toast} = useToast();
    const router = useRouter();

    const {setLoading} = useContext(AppContext);

    const resentVerificationEmail = async (email, channel) => {

        setSubmitting(true);
        const response = await RequestNewCode(email, channel);
        setSubmitting(false);

        if(response.status >= 200 && response.status < 300){            
            
            toast({
                variant: 'positive',
                description: response.data.message
            });
            setTimeout(() => {
                router.push('/auth/login');
            }, 1000);
            
        }else{

            if(response.response.data.message){
                setError(response.response.data.message);
                toast({
                    variant: 'destructive',
                    description: response.response.data.message
                });
            }else{
                toast({
                    variant: 'destructive',
                    description: 'Something went wrong. Please try again'
                });
            }
        }

    }

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <div className="grow"></div>
                    <div className="w-[350px] pb-[100px] text-center flex flex-col items-center space-y-4">
                        <Error error={error} />
                        <h1 className="text-2xl font-bold text-gray-800">You’re almost done</h1>
                        <p className="text-sm text-gray-800 text-center mb-8">We just sent an email to <span className="text-blue-700">{email}</span> containing an activation link and a code. Click on the link and enter the code to finish setting up your account..</p>
                        
                        <div className="bg-gray-200 h-0.5 w-full"></div>

                        <p className="text-sm text-gray-800 text-center mb-8">Didn't recieve an email?  <Button variant="ghost" onClick={() => !submitting && resentVerificationEmail(email, "registration")} ><span className="font-bold text-blue-699">Click to Resend</span></Button></p>
                        
                        {/* <Button onClick={() => {setLoading(true); router.push("/auth/login"); }} className="text-white w-full rounded-full mt-8 px-4 py-2 h-12 bg-green-900">Login</Button> */}

                    </div>

                    
                    {/* <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800">Don't have an account? <Link  href="/auth/signup"><span className="font-bold text-black">Create Account</span></Link></p>
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div> */}
                    
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">                    
                    <img src={'/assets/auth/Good team-pana.png'} alt="" className="w-full scale-110" /> 
                </div>
            </div>            
        </main>
    );

}