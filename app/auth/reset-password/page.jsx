"use client"

import React, {useState, useContext, useEffect } from "react";
import { AppContext } from "contexts/App"
import Link from "next/link";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { useSearchParams } from "next/navigation";

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
import {ShieldCheck, Eye, EyeOff} from "lucide-react";

import {ResetPassword} from "services/auth/api"
import { useToast } from "hooks/use-toast"
import { useRouter } from 'next/navigation'

const formSchema = z.object({    
    password: z.string().min(8),
    password_confirmation: z.string().min(8)
});


export default function ResetPasswordForm(){

    const [submitting, setSubmitting] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [error, setError] = useState(null);   
    const [id, setId] = useState(null); 
    const router = useRouter();
    const {toast} = useToast();
    const searchParams = useSearchParams();

    const {setLoading} = useContext(AppContext);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            password_confirmation: ""
        },
    });

    async function onSubmit(values) {
        console.log(values);
        
        setSubmitting(true);
        if(values.password != values.password_confirmation){
            setError("Passwords don't match");
            setSubmitting(false);
            return;
        }

        setError(null);        
        const response = await ResetPassword(id, values.password);
        setSubmitting(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){            
            
            toast({
                variant: 'positive',
                description: response.data.message
            });
            setTimeout(() => {
                setLoading(true);
                router.push('/auth/password-reset-successful');
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
        setId(searchParams.get('id'));
    }, []);

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <h1 className="text-2xl font-bold text-gray-800">Reset Password</h1>
                 

                    <div className="min-w-[300px] md:w-[450px]">
                        <Error error={error} />
                        <Form {...form} className="flex justify-left flex-col w-full">
                            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
                                
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl className="-mt-2">
                                            <div className="relative">
                                                <Input type={passwordVisible ? "text" : "password"} placeholder="Enter your password" {...field} className="h-12" />
                                                {
                                                    passwordVisible ? (
                                                        <Eye className="z-10 absolute right-3 my-auto w-5 top-3 text-gray-500 cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)} />
                                                    ) : (
                                                        <EyeOff className="z-10 absolute right-3 my-auto w-5 top-3 text-gray-500 cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)} />
                                                    )
                                                    
                                                }
                                                
                                            </div>  
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                /> 

                                <FormField
                                    control={form.control}
                                    name="password_confirmation"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Confirm Password</FormLabel>
                                        <FormControl className="-mt-2">
                                            <div className="relative">
                                                <Input type={confirmPasswordVisible ? "text" : "password"} placeholder="Confirm your password" {...field} className="h-12" />
                                                {
                                                    passwordVisible ? (
                                                        <Eye className="z-10 absolute right-3 my-auto w-5 top-3 text-gray-500 cursor-pointer" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
                                                    ) : (
                                                        <EyeOff className="z-10 absolute right-3 my-auto w-5 top-3 text-gray-500 cursor-pointer" onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)} />
                                                    )
                                                    
                                                }
                                                
                                            </div>  
                                        </FormControl>
                                        <FormDescription></FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                /> 

                                {/* <div className="w-full my-4 text-right">
                                    <p className="text-sm text-gray-800"><Link  href="/auth/forgot-password"><span className="font-bold text-black">Forgot Password?</span></Link></p>
                                </div>                                                */}
                                
                                {
                                    submitting ? (
                                        <Button disabled className="text-white/50 rounded-full w-full px-8 py-2 mt-4 h-12 bg-gray-700">Resseting Password...</Button>
                                    ) : (
                                        <Button type="submit" className="text-white rounded-full w-full px-8 py-2 mt-4 h-12">Reset</Button>
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
                    <img src={'/assets/auth/Reset password-cuate.png'} alt="" className="w-full scale-110" /> 
                </div>
            </div>            
        </main>
    );

}