"use client"

import Link from "next/link";
import SiteIcon from "../../../components/commons/SiteIcon";
import { Button } from "../../../components/ui/button"
import { toast } from "../../../hooks/use-toast"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../../../components/ui/form"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "../../../components/ui/input-otp"

 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {ShieldCheck} from "lucide-react";


const formSchema = z.object({    
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});


export default function VerifyOTP(){

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
          pin: "",
        },
    })

    function onSubmit(data) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
    }

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1104px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center px-4 pt-12">
                    <SiteIcon />
                    <h1 className="text-2xl font-bold text-gray-800">Verify your account</h1>
                    <p className="text-sm text-gray-800 text-center w-[450px]">We sent a code to your email. Input the code to complete registration</p>

                    <div className="w-[450px] mt-12">
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
                                            <InputOTPSlot index={0} className="w-12 h-12 rounded" />
                                            <InputOTPSlot index={1} className="w-12 h-12 rounded" />
                                            <InputOTPSlot index={2} className="w-12 h-12 rounded" />
                                            <InputOTPSlot index={3} className="w-12 h-12 rounded" />
                                            <InputOTPSlot index={4} className="w-12 h-12 rounded" />
                                            <InputOTPSlot index={5} className="w-12 h-12 rounded" />
                                        </InputOTPGroup>
                                        </InputOTP>
                                    </FormControl>
                                    <FormDescription>
                                        Didn't get the code? <Button variant="ghost"><span className="font-bold text-black">Click to Resend</span></Button>
                                    </FormDescription>
                                    <FormMessage />
                                    </FormItem>
                                )}
                                />
                        
                                <Button type="submit" className="text-white rounded-full w-full px-8 py-2 mt-4 h-12">Verify</Button>
                            </form>
                        </Form>

                    </div>

                    
                    <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div>
                    
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">                    
                    <img src={'/assets/auth/Authentication-pana.png'} alt="" className="w-full" /> 
                </div>
            </div>            
        </main>
    );

}