"use client"

import React, {useState} from "react";
import Link from "next/link";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "components/ui/form"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {ShieldCheck} from "lucide-react";

import {ForgotPassword} from "services/auth/api"
import { useToast } from "hooks/use-toast"
import { useRouter } from 'next/navigation'

const formSchema = z.object({    
    email: z.string().email()
});


export default function ForgotPasswordForm(){

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const {toast} = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    });

    async function onSubmit(values) {
        console.log(values)
        setError(null);
        setSubmitting(true);
        const response = await ForgotPassword(values.email);
        setSubmitting(false);

        console.log(response);
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

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <h1 className="text-2xl font-bold text-gray-800">Forgot Password</h1>
                    <p className="text-sm text-gray-800 text-center w-[450px]">Enter the email address you used to create the account to receive instructions on how to reset your password</p>

                    <div className="w-[450px]">
                        
                        <Error error={error} />
                        
                        <Form {...form} className="flex justify-left flex-col w-full">
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Email/Phone</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="Enter your email address" {...field} className="h-12"/>
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                

                                <div className="w-full my-4 text-right">
                                    <p className="text-sm text-gray-800"><Link  href="/auth/login"><span className="font-bold text-black">I remember my password</span></Link></p>
                                </div>                                               
                                {
                                   submitting ? (
                                        <Button disabled className="text-white/50 rounded-full w-full px-8 py-2 mt-4 h-12 bg-gray-700">Submitting...</Button>
                                    ) : (
                                        <Button type="submit" className="text-white rounded-full w-full px-8 py-2 mt-4 h-12">Submit</Button>
                                    ) 
                                }                                
                            </form>
                        </Form>

                    </div>

                    
                    <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800">Don't have an account? <Link  href="/auth/signup"><span className="font-bold text-black">Create Account</span></Link></p>
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div>
                    
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">                    
                    <img src={'/assets/auth/Forgot password-cuate.png'} alt="" className="w-full scale-110" /> 
                </div>
            </div>            
        </main>
    );

}