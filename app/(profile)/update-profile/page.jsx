"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";

import { GetStates, GetStateLGAs, 
        GetLGAWards, GetWardPollingUnits,
        GetPoliticalParties } from "services/profile/api";

import { useToast } from "hooks/use-toast";
import { useRouter } from 'next/navigation';

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

    const [submitting, setSubmitting] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const router = useRouter();
    const {toast} = useToast();

    const [ngStates, setNgStates] = useState([{id: 'state_0', name: 'Select a state'}]);
    const [lgas, setLgas] = useState([{id: 'lga_0', name: 'Select a state first'}]);
    const [wards, setWards] = useState([{id: 'ward_0', name: 'Select a LGA first'}]);
    const [pollingUnits, setPollingUnits] = useState([{id: 'pollingunit_0', name: 'Select a ward first'}]);
    const [politicalParties, setPoliticalParties] = useState([{id: 'political_party_0', name: 'Select a political party'}]);


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

    const getAllStates = async () => {
        setError(null);
        setFetching(true);
        const response = await GetStates();
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the stattes
            const states = response.data.data.states;
            setNgStates(states);
            
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

    const getPoliticalParties = async () => {
        setError(null);
        setFetching(true);
        const response = await GetPoliticalParties();
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the stattes
            const politicalParties = response.data.data.parties;
            setPoliticalParties(politicalParties);
            
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

    const getStateLGAs = async (state_id) => {
        setError(null);
        setFetching(true);
        const response = await GetStateLGAs(state_id);
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the stattes
            const stateLgas = response.data.data;
            setLgas(stateLgas);
            
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

    const getLGAWards = async (lga_id) => {
        setError(null);
        setFetching(true);
        const response = await GetLGAWards(lga_id);
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the stattes
            const lgaWards = response.data.data;
            setWards(lgaWards);
            
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

    const getWardPollingUnits = async (ward_id) => {
        setError(null);
        setFetching(true);
        const response = await GetWardPollingUnits(ward_id);
        setFetching(false);

        console.log(response);
        if(response.status >= 200 && response.status < 300){    
            
            //we fill the states selection with all the polling units
            const wardPollingUnits = response.data.data;
            setPollingUnits(wardPollingUnits);
            
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

        getAllStates();
        getPoliticalParties();

    }, []);

    const getStateId = (value) => {
        const entry = ngStates.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    const getLGAId = (value) => {
        const entry = lgas.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    const getWardId = (value) => {
        const entry = wards.find((array_entry) => array_entry.name == value);
        return entry.id;
    }
    

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center">
                    <SiteIcon className="absolute mx-auto top-0"/>
                    <h1 className="text-2xl font-bold text-gray-800">Update your profile</h1>

                    <div className="w-[450px] flex flex-col space-y-3 text-left">
                        
                        <Label className="">State</Label>
                        <Select onValueChange={(e) => getStateLGAs(getStateId(e))}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a state" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        ngStates.map((ngState, index) => (
                                            <SelectItem key={index + '-' + ngState.id} value={ngState.name}>{ngState.name}</SelectItem>
                                        ))                                        
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">LGA</Label>
                        <Select onValueChange={(e) => getLGAWards(getLGAId(e))}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a LGA" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        lgas.map((ward, index) => (
                                            <SelectItem key={index + '-' + ward.id} value={ward.name}>{ward.name}</SelectItem>
                                        ))                                        
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">Electoral ward</Label>
                        <Select onValueChange={(e) => getWardPollingUnits(getWardId(e))}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a ward" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        wards.map((ward, index) => (
                                            <SelectItem key={index + '-' + ward.id} value={ward.name}>{ward.name}</SelectItem>
                                        ))                                        
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>

                        <Label className="">Polling unit</Label>
                        <Select onValueChange={(e) => console.log(e)}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder="Select a polling unit" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    {
                                        pollingUnits.map((pollingUnit, index) => (
                                            <SelectItem key={index + '-' + pollingUnit.id} value={pollingUnit.name}>{pollingUnit.name}</SelectItem>
                                        ))                                        
                                    }
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
                                {
                                        politicalParties.map((politicalParty, index) => (
                                            <SelectItem key={index + '-' + politicalParty.id} value={politicalParty.name}>{politicalParty.name}</SelectItem>
                                        ))                                        
                                    }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        
                        {
                            submitting ? (
                                <Button className="text-white/50 rounded-full w-full px-8 py-2 mt-4 h-12 bg-gray-700">Continuing to Dashboard...</Button>
                            ) : (
                                <Button className="text-white rounded-full w-full px-8 py-2 mt-8 h-12 " onClick={() => setSubmitting(true)}><Link href="/dashboard">Continue to Dashboard</Link></Button>
                            )
                        }                        
                            
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