"use client"

import GoogleButton from "components/commons/GoogleButton";
import Image from "next/image";
import SiteIcon from "../../../components/commons/SiteIcon";
import { Button } from "../../../components/ui/button"
import { Input } from "../../../components/ui/input"
import { Label } from "../../../components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../components/ui/tabs"

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "../../../components/ui/form"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"


const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8)
});


export default function Signup(){

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            role: "eyewitness"
        },
    });

    function onSubmit(values) {
        console.log(values)
    }

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1104px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-gray-800">Sign up</h1>
                    <p className="text-sm text-gray-800">Create an account to get started with us</p>

                    <Tabs defaultValue="eyewitness" className="w-[450px]">
                        <TabsList className="grid w-full grid-cols-2 h-13 p-1 rounded-lg my-8">
                            <TabsTrigger value="eyewitness" active className="py-2 rounded-lg">Eyewitness</TabsTrigger>
                            <TabsTrigger value="agent" className="py-2 rounded-lg">Polling Unit Agent</TabsTrigger>
                        </TabsList>
                        <TabsContent value="eyewitness" className="flex flex-col space-y-4">
                            
                            {SignupForm("eyewitness")}
                        </TabsContent>
                        <TabsContent value="agent" className="flex flex-col space-y-4">
                            
                            {SignupForm("agent")}
                        </TabsContent>
                    </Tabs>
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col items-center  ">
                    <SiteIcon className="absolute mx-auto top-0"/>
                    <img src={'/assets/auth/Sign up-pana.png'} alt="" className="w-full" /> 
                </div>
            </div>            
        </main>
    );

    function SignupForm({role="eyewitness"}){
        return (
            <>
                <GoogleButton />
                <div className="h-10 flex items-center w-full justify-center relative" >
                    <div className="h-0.5 bg-gray-900 w-full"></div>
                    <h1 className="text-gray-800 text-center w-10 h-10 bg-white item-center absolute top-2 font-bold text-sm">OR</h1>
                </div>
                <Form {...form} className="flex justify-left flex-col">
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Full Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter you full name" {...field} />
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
                                <FormDescription></FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="role"
                            render={({ role }) => (
                                <FormItem>
                                <FormLabel></FormLabel>
                                <FormControl>
                                    <Input type="hidden" {...role} />
                                </FormControl>
                                <FormDescription></FormDescription>
                                <FormMessage />
                                </FormItem>
                            )}
                        />
                                               
                        
                        <Button type="submit" className="text-white rounded-xl px-8 py-2 mt-4">Submit</Button>
                    </form>
                </Form>
            </>
        );            
            
    }
}