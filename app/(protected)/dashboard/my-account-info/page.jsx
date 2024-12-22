
"use client"

import React, {useContext, useEffect, useState} from "react";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input"
import { AppContext } from "contexts/App";
import { DashboardContext } from "contexts/Dashboard";
import Error from "components/commons/Error";
import Link from "next/link";
import { constants, getFirstName, getLastName } from "helpers";

import { useToast } from "hooks/use-toast"
import { useRouter } from "next/navigation";
import { Camera, Pencil, Check, X } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "components/ui/select"

export default function Profile(){

    const router = useRouter();
    const {toast} = useToast();
    const {user, setLoading} = useContext(AppContext);
    const {setActiveMenu} = useContext(DashboardContext);

    const [firstName, setFirstName] = useState(null);
    const [editingFirstName, setEditingFirstName] = useState(false);

    const [lastName, setLastName] = useState(null);
    const [editingLastName, setEditingLastName] = useState(false);

    const [age, setAge] = useState('18-25');
    const [sex, setSex] = useState(null);
    const [party, setParty] = useState(null);
    const [theState, setTheState] = useState(null);
    const [LGA, setLGA] = useState(null);
    const [ward, setWard] = useState(null);

    const [occupation, setOccupation] = useState(null);
    const [editingOccupation, setEditingOccupation] = useState(false);

    const [phone, setPhone] = useState(null);
    const [editingPhone, setEditingPhone] = useState(false);

    const [whatsApp, setWhatsApp] = useState(null);
    const [editingWhatsApp, setEditingWhatsApp] = useState(false);

    const [email, setEmail] = useState(null);
    const [editingEmail, setEditingEmail] = useState(false);

    useEffect(() => {
        setLoading(false);
        setActiveMenu(constants.PROFILE);

        setFirstName(getFirstName(user?.name));
        setLastName(getLastName(user?.name));
        setEmail(user?.email);
        setPhone(user?.phone);

    }, []);

    const update = (field, setCallback) => {

        //call the update endpoint and set editing false

        setCallback();
    }

    const reset = (resetCallback, setCallback) => {

        resetCallback();
        setCallback();
    }
    

    return (
        <main className="flex-1 flex bg-black/5 p-4 space-x-4">
            <div className="flex-1 flex flex-col space-y-2">

                <div className='w-full h-full p-4 bg-white rounded-xl shadow flex flex-col'>

                    <div className="w-full flex justify-between">
                        <div className="w-full h-32 flex flex-col space-y-2">
                            <h1 className="text-xs font-semibold text-black">Edit Profile</h1>

                            <div className="relative">
                                <img src={user?.photo} className="w-24 h-24 rounded-full bg-slate-500" alt="" />
                                <div className="w-8 h-8 rounded-full bg-black/50 hover:bg-black cursor-pointer flex justify-center items-center absolute left-16 top-16">
                                    <Camera className="text-white w-5 h-5" />
                                </div>
                                
                            </div>

                        </div>
                    </div>
                    
                    <div className="flex w-full items-center space-x-2 my-2">
                        <h1 className="text-xs font-semibold text-black w-auto">GENERAL</h1>
                        <div className="h-0.5 bg-gray-200 flex-1"></div>
                    </div>

                    <div className="w-full flex flex-wrap py-3 space-x-2">

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">First Name</h4>
                            <div className="relative w-full">
                                
                                {
                                    editingFirstName ? (
                                        <>
                                            <Input type="text" value={firstName} placeholder="Enter your first name..." onChange={(e) => setFirstName(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" 
                                                />
                                            <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                    <Check className="text-gray-500 w-4 h-4" onClick={() => update(firstName, () => setEditingFirstName(false))} />
                                                </div>
                                                <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                    <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setFirstName(getFirstName(user?.name)), () => setEditingFirstName(false))} />
                                                </div>
                                            </div>
                                        </>                                        
                                        
                                    ) : (
                                        <>
                                            <Input type="text" value={firstName} placeholder="Enter your first name..." onChange={(e) => setFirstName(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0"  
                                                readonly={"readonly"} />
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingFirstName(true)} />
                                            </div>
                                        </>
                                        
                                    )
                                }
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Last Name</h4>
                            <div className="relative w-full">
                                
                                {
                                    editingLastName ? (
                                        <>
                                            <Input type="text" value={lastName} placeholder="Enter your last name..." onChange={(e) => setLastName(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" 
                                                />
                                            <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                    <Check className="text-gray-500 w-4 h-4" onClick={() => update(lastName, () => setEditingLastName(false))} />
                                                </div>
                                                <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                    <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setLastName(getLastName(user?.name)), () => setEditingLastName(false))} />
                                                </div>
                                            </div>
                                        </>
                                        
                                        
                                    ) : (
                                        <>
                                            <Input type="text" value={lastName} placeholder="Enter your last name..." onChange={(e) => setLastName(e.target.value)} 
                                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" 
                                                    readonly="readonly" />
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingLastName(true)} />
                                            </div>
                                        </>
                                        
                                    )
                                }
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Age</h4>
                            <div className="relative w-full">                                
                                <Select onValueChange={(e) => {console.log(e); setAge(e)}} >
                                    <SelectTrigger className="w-full" >
                                        <SelectValue placeholder="Select your age group" />
                                    </SelectTrigger>
                                    <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                        <SelectGroup>
                                            <SelectItem value="18-25">18-25</SelectItem>
                                            <SelectItem value="26-35">26-35</SelectItem>
                                            <SelectItem value="35-49">35-49</SelectItem>
                                            <SelectItem value="51-64">50-64</SelectItem>
                                            <SelectItem value="65+">65+</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>                            
                        </div>

                    </div>

                    <div className="w-full flex flex-wrap py-3 space-x-2">

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Sex</h4>
                            <div className="relative w-full">                                
                                
                                <Select onValueChange={(e) => {console.log(e); setSex(e)}} >
                                    <SelectTrigger className="w-full" >
                                        <SelectValue placeholder="Select your sex" />
                                    </SelectTrigger>
                                    <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                        <SelectGroup>
                                            <SelectItem value="male">Male</SelectItem>
                                            <SelectItem value="female">Female</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Occupation</h4>
                            <div className="relative w-full">                                
                                {
                                    editingOccupation ? (
                                        <>
                                            <Input type="text" value={occupation} placeholder="Enter occupation..." onChange={(e) => setOccupation(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" 
                                                />
                                            <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                    <Check className="text-gray-500 w-4 h-4" onClick={() => update(occupation, () => setEditingOccupation(false))} />
                                                </div>
                                                <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                    <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setOccupation(user?.occupation), () => setEditingOccupation(false))} />
                                                </div>
                                            </div>
                                        </>                                        
                                        
                                    ) : (
                                        <>
                                            <Input type="text" value={occupation} placeholder="Enter occupation..." onChange={(e) => setOccupation(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0"  
                                                readonly={"readonly"} />
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingOccupation(true)} />
                                            </div>
                                        </>                                        
                                    )
                                }
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Party Affiliation</h4>
                            <div className="relative w-full">                                
                                
                                <Select onValueChange={(e) => {console.log(e); setParty(e)}} >
                                    <SelectTrigger className="w-full" >
                                        <SelectValue placeholder="Select your party" />
                                    </SelectTrigger>
                                    <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                        <SelectGroup>
                                            <SelectItem value="apc">APC</SelectItem>
                                            <SelectItem value="pdp">PDP</SelectItem>
                                            <SelectItem value="lp">LP</SelectItem>
                                            <SelectItem value="nnpp">NNPP</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                
                            </div>                            
                        </div>

                    </div> 

                    <div className="flex w-full items-center space-x-2 my-2">
                        <h1 className="text-xs font-semibold text-black w-auto">CONTACT</h1>
                        <div className="h-0.5 bg-gray-200 flex-1"></div>
                    </div>  

                    <div className="w-full flex flex-wrap py-3 space-x-2">

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Mobile</h4>
                            <div className="relative w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-5 h-5 absolute left-0 top-2">
                                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                                </svg>
                                
                                {
                                    editingPhone ? (
                                        <>
                                            <Input type="text" value={phone} placeholder="Enter your mobile..." onChange={(e) => setPhone(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-8" 
                                                />
                                            <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1 bg-white">                                                
                                                <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                    <Check className="text-gray-500 w-4 h-4" onClick={() => update(phone, () => setEditingPhone(false))} />
                                                </div>
                                                <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                    <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setPhone(user?.phone), () => setEditingPhone(false))} />
                                                </div>
                                            </div>
                                        </>                                        
                                        
                                    ) : (
                                        <>
                                            <Input type="text" value={phone} placeholder="Enter your mobile..." onChange={(e) => setPhone(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-8"  
                                                readonly={"readonly"} />
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingPhone(true)} />
                                            </div>
                                        </>
                                        
                                    )
                                }
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">WhatsApp</h4>
                            <div className="relative w-full">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-5 h-5 absolute left-0 top-2">
                                    <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 0 1-.533-.074.75.75 0 0 1-.44-1.223 3.73 3.73 0 0 0 .814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 0 1-4.246.997Z" clipRule="evenodd" />
                                </svg>
                                
                                {
                                    editingWhatsApp ? (
                                        <>
                                            <Input type="text" value={whatsApp} placeholder="WhatsApp number..." onChange={(e) => setWhatsApp(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-8" 
                                                />
                                            <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                    <Check className="text-gray-500 w-4 h-4" onClick={() => update(whatsApp, () => setEditingWhatsApp(false))} />
                                                </div>
                                                <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                    <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setWhatsApp(user?.whatsApp), () => setEditingWhatsApp(false))} />
                                                </div>
                                            </div>
                                        </>
                                        
                                        
                                    ) : (
                                        <>
                                            <Input type="text" value={whatsApp} placeholder="WhatsApp number..." onChange={(e) => setWhatsApp(e.target.value)} 
                                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-8" 
                                                    readonly="readonly" />
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingWhatsApp(true)} />
                                            </div>
                                        </>
                                        
                                    )
                                }
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Email</h4>
                            <div className="relative w-full">

                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 w-5 h-5 absolute left-0 top-2">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                
                                {
                                    editingEmail ? (
                                        <>
                                            <Input type="text" value={email} placeholder="Enter new email..." onChange={(e) => setEmail(e.target.value)} 
                                                className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-8" 
                                                />
                                            <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                    <Check className="text-gray-500 w-4 h-4" onClick={() => update(email, () => setEditingEmail(false))} />
                                                </div>
                                                <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                    <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setEmail(user?.email), () => setEditingEmail(false))} />
                                                </div>
                                            </div>
                                        </>
                                        
                                    ) : (
                                        <>
                                            <Input type="text" value={email} placeholder="Enter new email..." onChange={(e) => setEmail(e.target.value)} 
                                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-8" 
                                                    readonly="readonly" />
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1 bg-white">
                                                <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingEmail(true)} />
                                            </div>
                                        </>
                                        
                                    )
                                }
                            </div>                            
                        </div>

                    </div>     

                    <div className="w-full flex flex-wrap py-3 space-x-2">
                        

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">State</h4>
                            <div className="relative w-full">                                
                                
                                <Select onValueChange={(e) => {console.log(e); setTheState(e)}} >
                                    <SelectTrigger className="w-full" >
                                        <SelectValue placeholder="Select your state" />
                                    </SelectTrigger>
                                    <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                        <SelectGroup>
                                            <SelectItem value="abia">ABIA</SelectItem>
                                            <SelectItem value="adamawa">ADAMAWA</SelectItem>
                                            <SelectItem value="akwa-ibom">AKWA-IBOM</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">LGA</h4>
                            <div className="relative w-full">                                
                                
                                <Select onValueChange={(e) => {console.log(e); setLGA(e)}} >
                                    <SelectTrigger className="w-full" >
                                        <SelectValue placeholder="Select LGA" />
                                    </SelectTrigger>
                                    <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                        <SelectGroup>
                                            <SelectItem value="abia">ABIA</SelectItem>
                                            <SelectItem value="adamawa">ADAMAWA</SelectItem>
                                            <SelectItem value="akwa-ibom">AKWA-IBOM</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                
                            </div>                            
                        </div>

                        <div className="w-full md:w-[30%] flex flex-col space-y-2 mt-4">
                            <h4 className="text-gray-900 text-xs font-semibold">Ward</h4>
                            <div className="relative w-full">                                
                                
                                <Select onValueChange={(e) => {console.log(e); setWard(e)}} >
                                    <SelectTrigger className="w-full" >
                                        <SelectValue placeholder="Select ward" />
                                    </SelectTrigger>
                                    <SelectContent className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0">
                                        <SelectGroup>
                                            <SelectItem value="abia">ABIA</SelectItem>
                                            <SelectItem value="adamawa">ADAMAWA</SelectItem>
                                            <SelectItem value="akwa-ibom">AKWA-IBOM</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                
                            </div>                            
                        </div>

                    </div>            
                    



                </div>
            </div>
            <div className="w-[250px] ">
                <div className='w-full h-[500px] bg-white rounded-xl shadow flex flex-col justify-center'>

                </div>
            </div>            
        </main>
    );

}