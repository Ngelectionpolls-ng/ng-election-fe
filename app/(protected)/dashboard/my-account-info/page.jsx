
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
import { set } from "react-hook-form";

export default function Profile(){

    const router = useRouter();
    const {toast} = useToast();
    const {user, setLoading} = useContext(AppContext);
    const {setActiveMenu} = useContext(DashboardContext);

    const [firstName, setFirstName] = useState(null);
    const [editingFirstName, setEditingFirstName] = useState(false);

    const [lastName, setLastName] = useState(null);
    const [editingLastName, setLastFirstName] = useState(false);


    useEffect(() => {
        setLoading(false);
        setActiveMenu(constants.PROFILE);

        setFirstName(getFirstName(user?.name));
        setLastName(getLastName(user?.name));
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
                    
                    <div className="flex w-full items-center space-x-2">
                        <h1 className="text-xs font-semibold text-black w-auto">GENERAL</h1>
                        <div className="h-0.5 bg-gray-200 flex-1"></div>
                    </div>

                    <div className="w-full flex flex-wrap py-3">

                        <div className="w-full md:w-1/3 flex flex-col space-y-2">
                            <h4 className="text-gray-900 text-xs font-semibold">First Name</h4>
                            <div className="relative w-full">
                                <Input type="text" value={firstName} placehoolder="Enter your first name..." onChange={(e) => setFirstName(e.target.value)} 
                                    className="border-none border-0 focus-visible:ring-none focus-visible:ring-0 focus:border-b focus:border-1 focus-visible:border-b focus-visible:border-1 focus:border-green-900 pl-0" />
                                {
                                    editingFirstName ? (
                                        <div className="flex space-x-1 cursor-pointer absolute bottom-1 right-1">
                                            <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full ">
                                                <Check className="text-gray-500 w-4 h-4" onClick={() => update(firstName, () => setEditingFirstName(false))} />
                                            </div>
                                            <div className="flex justify-center items-center w-7 h-7 hover:bg-black/5 rounded-full">
                                                <X className="text-gray-500 w-4 h-4" onClick={() => reset(() => setFirstName(getFirstName(user?.name)), () => setEditingFirstName(false))} />
                                            </div>
                                        </div>
                                        
                                    ) : (
                                        <div className="flex justify-center items-center w-8 h-8 hover:bg-black/5 rounded-full cursor-pointer absolute bottom-1 right-1">
                                            <Pencil className="text-gray-500 w-4 h-4" onClick={() => setEditingFirstName(true)} />
                                        </div>
                                    )
                                }
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