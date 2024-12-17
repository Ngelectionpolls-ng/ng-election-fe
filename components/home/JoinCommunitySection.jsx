"use client"

import React, { useState, useEffect } from "react"
import { ChevronRight } from "lucide-react"
import Error from "components/commons/Error"
import Link from "next/link"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
  } from "components/ui/dialog"

  import { Button } from "components/ui/button"
  import { Label } from "components/ui/label"
  import { Input } from "components/ui/input"
  
import {RegisterSubscriber} from "services/auth/api"
import { useToast } from "hooks/use-toast"
import { useRouter } from 'next/navigation'


function JoinCommunitySection() {

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("");
    const [subscriberRegistered, setSubscriberRegistered] = useState(false);
    const router = useRouter();
    const {toast} = useToast();

    const subscribeEmaiil = async () => {
        setSubmitting(true);
        if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email)){
            setError("Invalid email address");
            setSubmitting(false);
            return;
        }

        setError(null);
        const response = await RegisterSubscriber(email);
        setSubmitting(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            setSubscriberRegistered(true);
            setEmail("");

            toast({
                variant: 'positive',
                description: response.data.message
            });
            setTimeout(() => {
                location.reload();
            }, 5000);
            
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

    return (
        <section className="w-screen flex justify-center py-16">
            <div className="flex flex-col lg:flex-row w-full md:w-[1124px] ">
                <div className="bg-green-900 w-full lg:w-1/2">
                    <div className="p-4 md:p-8">
                        <h3 className="tracking-[12.3px] text-2xl md:text-4xl text-white text-center font-bold py-2">ONE NAIJA FOR</h3>
                        <div className="p-3 bg-white text-3xl md:text-[40px] text-green-900 text-center font-bold">ELECTORAL REFORM</div>
                    </div>
                </div>
                <div className="h-28 flex-col md:flex-row md:h-full flex justify-between items-center border-[1.5px] border-gray-400 rounded-b-md lg:rounded-bl-none lg:rounded-r-md w-full lg:w-1/2 px-8 pb-4">
                   
                    <Dialog className="">
                        <DialogTrigger asChild>
                            <Button variant="ghost" className="flex flex-col md:flex-row gap-3 w-full justify-between items-center cursor-pointer">
                                <div className="mt-4 lg:m-0">
                                    <h3 className="text-green-900 text-2xl font-bold underline">Join the Discussion</h3>
                                </div>
                                <div><ChevronRight color="#285D2D" className="w-8 h-8 hidden md:block" size={22} strokeWidth={3} /></div>
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="w-full p-4 pt-10 md:w-[600px]">
                            {
                                
                                    <div className="flex flex-col space-y-2">
                                        <Error error={error} />
                                        {
                                            subscriberRegistered && <p className="text-xs text-white bg-green-700 p-4 rounded-xl">A mail has been sent to the email address you provided  for you  to Verify your email account </p>
                                        }
                                        <div className="flex w-full border-2 rounded-xl h-12 border-green-800 items-center">
                                            {
                                                submitting ? (
                                                    <Button className="w-1/2 rounded-xl text-white/50 text-white h-full bg-gray-700">Submitting</Button>                                            
                                                ) : (
                                                    <Button className="w-1/2 rounded-xl bg-green-900 text-white h-full" onClick={subscribeEmaiil}>Click to Subscribe</Button>
                                                )
                                            }
                                            <Input type="email" onChange={(e) => {setError(null); setEmail(e.target.value)}} placeholder="Enter your email address" className="h-full w-1/2"/>
                                        </div>
                                        <p className="text-sm text-gray-800">I already have a subscribed account <Link  href="/auth/login"><span className="font-bold text-black">Login</span></Link></p>
                                    </div>    
                                
                            }
                                                    
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
    )
}

export default JoinCommunitySection
