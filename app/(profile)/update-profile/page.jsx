"use client"

import Link from "next/link";
import Image from "next/image";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import { Button } from "components/ui/button"
import { Input } from "components/ui/input"
import { Label } from "components/ui/label"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "components/ui/select"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {ShieldCheck} from "lucide-react";


const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8)
});


export default function UpdateProfile(){

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
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center">
                <   SiteIcon className="absolute mx-auto top-0"/>
                    <h1 className="text-2xl font-bold text-gray-800">Update your profile</h1>

                    <div className="w-[450px] flex flex-col space-y-3 text-left">
                        <Label className="">State</Label>
                        <Select>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a state" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="abia">Abia</SelectItem>
                                    <SelectItem value="banana">Adamawa</SelectItem>
                                    <SelectItem value="blueberry">Akwa Ibom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">LGA</Label>
                        <Select>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a LGA" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="abia">Abia</SelectItem>
                                    <SelectItem value="banana">Adamawa</SelectItem>
                                    <SelectItem value="blueberry">Akwa Ibom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">Electoral ward</Label>
                        <Select>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a ward" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="abia">Abia</SelectItem>
                                    <SelectItem value="banana">Adamawa</SelectItem>
                                    <SelectItem value="blueberry">Akwa Ibom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">Electoral ward</Label>
                        <Select>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a ward" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="abia">Abia</SelectItem>
                                    <SelectItem value="banana">Adamawa</SelectItem>
                                    <SelectItem value="blueberry">Akwa Ibom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">Polling unit</Label>
                        <Select>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a polling unit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="abia">Abia</SelectItem>
                                    <SelectItem value="banana">Adamawa</SelectItem>
                                    <SelectItem value="blueberry">Akwa Ibom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">Political party</Label>
                        <Select className="mb-8">
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a political party" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="abia">Abia</SelectItem>
                                    <SelectItem value="banana">Adamawa</SelectItem>
                                    <SelectItem value="blueberry">Akwa Ibom</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        
                        <Button className="text-white rounded-full w-full px-8 py-2 mt-8 h-12">Continue to Dashboard</Button>

                    </div>

                    
                    

                    <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col justify-center  ">
                    <img src={'/assets/auth/Team spirit-pana.png'} alt="" className="w-full" /> 
                </div>
            </div>            
        </main>
    );

}