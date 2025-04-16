"use client"

import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import SiteIcon from "components/commons/SiteIcon";
import Error from "components/commons/Error";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Label } from "components/ui/label";

import { GetProfile, GetStates, GetStateLGAs, 
        GetLGAWards, GetWardPollingUnits, UpdateProfile,
        GetPoliticalParties } from "services/profile/api";

import { useToast } from "hooks/use-toast";
import { useRouter } from 'next/navigation';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "components/ui/select";
 
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {ShieldCheck} from "lucide-react";
import {AppContext} from "contexts/App";


const formSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email(),
    password: z.string().min(8)
});


export default function ProfileUpdate(){

    const [submitting, setSubmitting] = useState(false);
    const [fetching, setFetching] = useState(false);
    const [error, setError] = useState(null);
    const [updating, setUpdating] = useState(false);
    const router = useRouter();
    const {toast} = useToast();

    const [ngStates, setNgStates] = useState([{id: 'state_0', name: 'Select a state'}]);
    const [lgas, setLgas] = useState([{id: 'lga_0', name: 'Select a state first'}]);
    const [wards, setWards] = useState([{id: 'ward_0', name: 'Select a LGA first'}]);
    const [pollingUnits, setPollingUnits] = useState([{id: 'pollingunit_0', name: 'Select a ward first'}]);
    const [politicalParties, setPoliticalParties] = useState([{id: 'political_party_0', name: 'Select a political party'}]);

    const [selectedState, setSelectedState] = useState(null);
    const [selectedLga, setSelectedLga] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);
    const [selectedPollingunit, setSelectedPollingunit] = useState(null);
    const [selectedParty, setSelectedParty] = useState(null);

    const {user, setLoading} = useContext(AppContext);

    const getProfile = async (user_id) => {
            
        setError(null);
        setUpdating(true);
        const response = await GetProfile(user_id);
        setUpdating(false);

        console.log('Profile', response);
        if(response?.status >= 200 && response?.status < 300){

            const profile = response.data;
            if(
                profile.state.name != null && 
                profile.lga.name != null && 
                profile.ward.name != null && 
                profile.pollingunit.name != null 
                && user?.role.toLowerCase() == 'pollingUnitAgent'.toLowerCase() 
                && profile.party.name != null
            ){
                setLoading(true);
                router.push('/dashboard');
            }else{
                profile.state.name && setSelectedState(profile.state.name);
                profile.lga.name && setSelectedLga(profile.lga.name);
                profile.ward.name && setSelectedWard(profile.ward.name);
                profile.pollingUnit.name && setSelectedPollingunit(profile.pollingUnit.name);
                profile.party.name && setSelectedParty(profile.party.name);
            }
            
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
        
        setLoading(false);
        getAllStates();
        getPoliticalParties();
        user && getProfile(user.id);

    }, [user]);

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

    const getPollingUnitId = (value) => {
        const entry = pollingUnits.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    const getPartyId = (value) => {
        const entry = politicalParties.find((array_entry) => array_entry.name == value);
        return entry.id;
    }

    const update = async (field, value, setCallback) => {

        //call the update endpoint and set editing false
        setError(null);
        setUpdating(true);
        const response = await UpdateProfile(user?.id, {[field]:value});
        setUpdating(false);

        if(response.status >= 200 && response.status < 300){
            toast({
                variant: 'positive',
                description: "Updated successfully"
            });
            getProfile(user?.id);
            
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

        setCallback();
    }
    

    return (
        <main className="w-screen flex justify-center">
            <div className="w-full md:w-[1124px] flex py-16 space-x-8">
                <div className="w-full md:w-1/2 space-y-4 flex flex-col items-center">
                    <SiteIcon className="absolute mx-auto top-0"/>
                    <h1 className="text-2xl font-bold text-gray-800">Update your profile</h1>

                    <div className="w-[450px] flex flex-col space-y-3 text-left">
                        
                        <Label className="">State</Label>
                        <Select onValueChange={(e) => {
                            update('state', getStateId(e), () => setSelectedState(e));
                            getStateLGAs(getStateId(e));
                        }}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder={selectedState ?? "Select a state"} />
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
                        <Select onValueChange={(e) => {
                            update('lga', getLGAId(e), () => setSelectedLga(e));
                            getLGAWards(getLGAId(e))
                        }}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder={selectedLga ?? "Select a LGA"} />
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
                        <Select onValueChange={(e) => {
                            update('ward', getWardId(e), () => setSelectedWard(e));
                            getWardPollingUnits(getWardId(e))
                        }}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder={selectedWard ?? "Select a ward"} />
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
                        <Select onValueChange={(e) => {
                                update('pollingunit', getPollingUnitId(e), () => setSelectedPollingunit(e));
                            }}>
                            <SelectTrigger className="w-full h-10">
                                <SelectValue placeholder={selectedPollingunit ?? "Select a polling unit"} />
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

                        {
                            user?.role.toLowerCase() == 'pollingUnitAgent'.toLowerCase() && (
                                <>
                                    <Label className="">Political party</Label>
                                    <Select className="mb-8" onValueChange={(e) => {
                                            update('party', getPartyId(e), () => setSelectedParty(e));
                                        }}>
                                        <SelectTrigger className="w-full h-10">
                                            <SelectValue placeholder={selectedParty ?? "Select a political party"} />
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
                                </>        
                            )
                        }                        
                        
                        {
                            submitting ? (
                                <Button className="text-white/50 rounded-full w-full px-8 py-2 mt-4 h-12 bg-gray-700">Continuing to Dashboard...</Button>
                            ) : (
                                <Button className="text-white rounded-full w-full px-8 py-2 mt-8 h-12 " onClick={() => {setSubmitting(true); setLoading(true); location = '/dashboard';}}>Continue to Dashboard</Button>
                            )
                        }                        
                            
                    </div>

                    <div className="flex flex-col w-full space-y-4">
                        <p className="text-sm text-center text-gray-800"><ShieldCheck className="inline h-4"/> By logging in you agree to <Link  href="/terms-of-service"><span className="font-bold text-black">Terms of Service</span></Link> and <Link  href="/privacy-policy"><span className="font-bold text-black">Privacy Policy</span></Link></p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative hidden md:flex flex-col justify-center  ">
                    <img src={'/assets/auth/Team spirit-pana.png'} alt="" className="w-full scale-125" /> 
                </div>
            </div>            
        </main>
    );

}