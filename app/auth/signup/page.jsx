"use client"

import {useState} from "react"
import GoogleButton from "components/commons/GoogleButton"
import Link from "next/link";
import SiteIcon from "components/commons/SiteIcon"
import Error from "components/commons/Error"
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "components/ui/tabs"

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
import {ShieldCheck} from "lucide-react"

import {Signup} from "services/auth/api"
import { useToast } from "hooks/use-toast"
import { useRouter } from 'next/navigation'

const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8)
});


export default function SignupForm(){

    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [role, setRole] = useState('iwitness');
    const router = useRouter();
    const {toast} = useToast();

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: ""
        },
    });

    async function onSubmit(values) {
        console.log(values);
        
        setError(null);
        setSubmitting(true);
        const response = await Signup(role, values);
        setSubmitting(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){            
            
            localStorage.setItem('email', values.email);
            toast({
                variant: 'positive',
                description: response.data.message
            });
            setTimeout(() => {
                router.push('/auth/signup-success');
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
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center">
                    <SiteIcon className="absolute mx-auto top-0 mb-8"/>
                    <h1 className="text-2xl font-bold text-gray-800 mt-8">Sign up</h1>
                    <p className="text-sm text-gray-800">Create an account to get started with us</p>

                    <Tabs defaultValue="iwitness" className="w-[450px]">
                        <TabsList className="grid w-full grid-cols-2 h-13 p-1 rounded-lg my-8">
                            <TabsTrigger value="iwitness" active className="py-2 rounded-lg" onClick={() => setRole('iwitness')} >Eyewitness</TabsTrigger>
                            <TabsTrigger value="agent" className="py-2 rounded-lg" onClick={() => setRole('agent')}>Polling Unit Agent</TabsTrigger>
                        </TabsList>
                        <TabsContent value="iwitness" className="flex flex-col space-y-4">                            
                            {SignupForm("iwitness")}
                        </TabsContent>
                        <TabsContent value="agent" className="flex flex-col space-y-4">                            
                            {SignupForm("agent")}
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center justify-center ">                    
                    <img src={'/assets/auth/Sign up-pana.png'} alt="" className="w-full scale-125" /> 
                </div>
            </div>            
        </main>
    );

    function SignupForm({role="iwitness"}){
        return (
            <>
                <GoogleButton />
                <div className="h-10 flex items-center w-full justify-center relative" >
                    <div className="h-0.5 bg-gray-900 w-full"></div>
                    <h1 className="text-gray-800 text-center w-10 h-10 bg-white item-center absolute top-2 font-bold text-sm">OR</h1>
                </div>
                <Error error={error} />
                <Form {...form} className="flex justify-left flex-col">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter your full name" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="Enter your email address" {...field} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl className="-mt-2">
                                    <Input type="password" placeholder="Create your password" {...field} />
                                </FormControl>
                                <FormDescription className="italic text-xs ">Should contain at lease 1 uppercase, 1 lowercase and 1 special character</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />                                               
                        
                        {
                            submitting ? (
                                <Button disabled className="text-white/50 rounded-full w-full px-8 py-2 mt-4 h-12 bg-gray-700">Creating...</Button>
                            ) : (
                                <Button type="submit" className="text-white rounded-full w-full px-8 py-2 mt-4 h-12">Create Account</Button>
                            )
                        }
                    </form>
                </Form>
                <div className="flex flex-col w-full space-y-4">
                    <p className="text-sm text-center text-gray-800">Have an account? <Link  href="/auth/login"><span className="font-bold text-black">Login</span></Link></p>
                    <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                </div>
            </>
        );            
            
    }
}