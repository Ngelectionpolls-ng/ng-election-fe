"use client"

import React, {useState, useContext, useEffect } from "react";
import { AppContext } from "contexts/App"
import Link from "next/link";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import { Button } from "components/ui/button"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "components/ui/form"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "components/ui/input-otp"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {ShieldCheck} from "lucide-react";


import {VerifyOTP, RequestNewCode} from "services/auth/api"
import { useToast } from "hooks/use-toast"
import { useRouter } from 'next/navigation'
import { useSearchParams } from "next/navigation";


const formSchema = z.object({    
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});


export default function VerifyOTPForm(){

    const [submitting, setSubmitting] = useState(false);
    const [requesting, setRequesting] = useState(false);
    const [error, setError] = useState(null);
    const [id, setId] = useState(null);
    const [email, setEmail] = useState(null);
    const router = useRouter();
    const {toast} = useToast();
    const searchParams = useSearchParams();

    const {setLoading} = useContext(AppContext);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          pin: "",
        },
    })

    async function onSubmit(data) {
        console.log(data);

        setError(null);
        setSubmitting(true);
        const response = await VerifyOTP(id, data.pin);
        setSubmitting(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){            
            
            toast({
                variant: 'positive',
                description: response.data.message ?? "Email verified successfully"
            });
            setTimeout(() => {
                setLoading(true);
                router.push('/auth/email-verified');
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

    const resentVerificationEmail = async (email, channel) => {

        if(requesting || submitting) return;
        event.preventDefault();

        setError(null);
        setRequesting(true);
        const response = await RequestNewCode(email.replace(' ', '+'), channel);
        setRequesting(false);

        if(response.status >= 200 && response.status < 300){            
            
            toast({
                variant: 'positive',
                description: response.data.message
            });
            
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
        setId(searchParams.get('id'));
        setEmail(searchParams.get('email'));
    }, []);

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <h1 className="text-2xl font-bold text-gray-800">Verify your account</h1>
                    <p className="text-sm text-gray-800 text-center w-[400px]">We sent a code to your email. Input the code to complete registration</p>

                    <div className="w-[400px] mt-12">
                        <Error error={error} />
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
                                <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Enter code</FormLabel>
                                    <FormControl>
                                        <InputOTP maxLength={6} {...field}>
                                        <InputOTPGroup className="w-full flex justify-between">
                                            <InputOTPSlot index={0} className="w-12 h-12 rounded border-2 border-green-500 shadow-md" />
                                            <InputOTPSlot index={1} className="w-12 h-12 rounded border-2 border-green-500 shadow-md" />
                                            <InputOTPSlot index={2} className="w-12 h-12 rounded border-2 border-green-500 shadow-md" />
                                            <InputOTPSlot index={3} className="w-12 h-12 rounded border-2 border-green-500 shadow-md" />
                                            <InputOTPSlot index={4} className="w-12 h-12 rounded border-2 border-green-500 shadow-md" />
                                            <InputOTPSlot index={5} className="w-12 h-12 rounded border-2 border-green-500 shadow-md" />
                                        </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>
                                        Didn't get the code? <Button variant="ghost"><span className="font-bold text-black" onClick={() => resentVerificationEmail(email, "registration")} >Click to Resend</span></Button>
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                        
                                {
                                    submitting ? (
                                        <Button disabled className="text-white/50 rounded-full w-full px-8 py-2 mt-4 h-12 bg-gray-700">Verifying...</Button>
                                    ) : (
                                        <Button type="submit" className="text-white rounded-full w-full px-8 py-2 mt-4 h-12">Verify</Button>
                                    )
                                }
                            </form>
                        </Form>

                    </div>

                    
                    <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div>
                    
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">                    
                    <img src={'/assets/auth/Authentication-pana.png'} alt="" className="w-full scale-110" /> 
                </div>
            </div>            
        </main>
    );

}