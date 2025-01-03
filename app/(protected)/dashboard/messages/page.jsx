
"use client"

import React, {useContext, useEffect, useState} from "react";
import { Button } from "components/ui/button"
import { useRouter } from "next/navigation";
import { AppContext } from "contexts/App";
import { Plus, CheckCheck, Check, ArrowLeft, Ellipsis, Send } from "lucide-react";
import { ellipsify, getInitials, isMobile } from "helpers";
import { Separator } from "components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "components/ui/avatar";
import { Textarea } from "components/ui/textarea";

export default function Messages(){

    const router = useRouter();
    const {setLoading} = useContext(AppContext);
    const [selectedTab, setSelectedTab] = useState('all');
    const [singleChat, setSingleChat] = useState(false);
    const [mobile, setMobile] = useState(false);

    const teams = [
        {
            name: 'Eyewitness Team',
            unread: 0,
            image: null,
            messages: [
                "Hey people, what's up"
            ]
        },
        {
            name: 'PDP Admin Team',
            unread: 0,
            image: null,
            messages: [
                "Hey people, what's happening in the polling unit?"
            ]
        }
    ];

    const messages = [
        {
            name: 'John Okafor',
            online: false,
            photo: null,
            messages: [
                {
                    content: "Hey people, what's up",
                    delivered: '2m ago',
                    status: 'seen'
                }
                
            ]
        },
        {
            name: 'Destiny Okafor',
            online: false,
            photo: null,
            messages: [
                {
                    content: "Hey people, what's happening in the polling unit?",
                    delivered: '2m ago',
                    status: 'delivered'
                }
                
            ]
        },
        {
            name: 'Umaru Diko',
            online: true,
            photo: null,
            messages: [
                {
                    content: "How did everything go ine polling unit? What's happening in the polling unit?",
                    delivered: '2m ago',
                    status: 'seen'
                }
            ]
        },
        {
            name: 'Uche Jumbo',
            online: true,
            photo: null,
            messages: [
                {
                    content: "How did everything go ine polling unit? What's happening in the polling unit?",
                    delivered: '2m ago',
                    status: 'delivered'
                }
            ]
        }
    ]

    useEffect(() => {
        setLoading(false);
        setMobile(isMobile());
        window.onresize = () => {
            setMobile(isMobile());
        }
    }, []);

    const selectTab = (tab) => {
        if(tab != selectedTab){
            setSelectedTab(tab);
        }
    }

    return (
        <main className="flex-1 flex justify-center bg-slate-100 h-full">
            <div className="w-full p-4 flex space-x-4 h-full bg-white rounded-xl m-4 shadow">

                <div className={`w-full md:w-[300px] flex flex-col space-y-4 ${singleChat && mobile && 'hidden'}`}>
                    <div className="flex w-full text-xs">
                        <div onClick={() => selectTab('all')} 
                                className={`border-b-2 ${selectedTab == "all" ? 'border-green-800 text-green-800 font-semibold' : 'border-gray-200 text-gray-699'} 
                                            cursor-pointer flex flex-col h-12 justify-center items-center w-1/3 hover:bg-green-50`}>
                            <span className="">All</span>
                        </div>
                        <div onClick={() => selectTab('unread')} 
                                className={`border-b-2 ${selectedTab == "unread" ? 'border-green-800 text-green-800 font-semibold' : 'border-gray-200 text-gray-699'} 
                                            cursor-pointer flex flex-col h-12 justify-center items-center w-1/3 hover:bg-green-50`}>
                            <span className="">Unread</span>
                        </div>
                        <div onClick={() => selectTab('important')} 
                                className={`border-b-2 ${selectedTab == "important" ? 'border-green-800 text-green-800 font-semibold' : 'border-gray-200 text-gray-699'} 
                                            cursor-pointer flex flex-col h-12 justify-center items-center w-1/3 hover:bg-green-50`}>
                            <span className="">Important</span>
                        </div>
                    </div>
                    <Button className="rounded-full w-full text-white text-xs h-12"><Plus className="w-4 h-4 text-white"/> New Message</Button>
                    
                    <h4 className="text-gray-500 text-sm">TEAM</h4>
                    <div className="flex flex-col space-y-2">
                        {
                            teams.map((team, index) => (
                                <>
                                    <div key={index} onClick={() => setSingleChat(true)} 
                                            className="flex w-full p1-2 space-x-2 cursor-pointer hover:bg-gray-100">
                                        {
                                            team.image ? (
                                                <img src={team.image} alt="" className="w-10 h-10 rounded-full" />
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-10 text-gray-400 fill-current">
                                                    <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clipRule="evenodd" />
                                                    <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
                                                </svg>
                                            )
                                        }
                                        <div className="flex-1 flex flex-col flex-center justify-center">
                                            <h6 className="font-semibold text-xs">{team.name}</h6>
                                            <p className="text-gray-800 text-xs">{team.messages.length ? ellipsify(team.messages[0], 25) : 'Type a message'}</p>
                                        </div>

                                        
                                    </div>
                                    <Separator />
                                </>                                
                            ))
                        }
                    </div>

                    <h4 className="text-gray-500 text-sm">RECENT MESSAGES</h4>
                    <div className="flex flex-col space-y-2 overflow-y-scroll">
                        {
                            messages.map((message, index) => (
                                <>
                                    <div key={index} onClick={() => setSingleChat(true)}
                                            className="flex w-full py-2 space-x-2 cursor-pointer hover:bg-gray-100 h-16 relative">
                                        
                                        <Avatar className="w-12 h-12">
                                            <AvatarImage src={message.photo} />
                                            <AvatarFallback>{getInitials(message.name)}</AvatarFallback>
                                        </Avatar>
                                        <div className="flex-1 flex flex-col flex-center justify-center">
                                            <h6 className="font-semibold text-xs">{ellipsify(message.name)}</h6>
                                            <p className="text-gray-800 text-xs">{message.messages.length ? ellipsify(message.messages[0].content, 25) : 'Type a message'}</p>
                                        </div>
                                        <span className="text-[9px] text-gray-800 absolute top-0 right-2 p-0.5 rounded bg-white/10">
                                            {message.messages[0].delivered}
                                        </span>
                                        <span className="text-[10px] text-gray-800 absolute bottom-0 right-2 p-0.5 rounded bg-white/10">
                                            {
                                                message.messages[0].status == 'seen' ? (
                                                    <CheckCheck className="w-5 h-5" />
                                                ) : (
                                                    <Check className="w-5 h-5" />
                                                )
                                            }
                                        </span>
                                    </div>
                                    <Separator />
                                </>                                
                            ))
                        }
                    </div>
                </div>

                <div className={`w-full ${!singleChat && mobile && 'hidden'} md:block 
                                ${singleChat && mobile && 'block'} flex flex-col h-full items-end`}>

                    {/* title */}
                    <div className="w-full py-4 h-12 flex space-x-4 border-b-2 border-gray-200 items-center justify-between ">

                        <div onClick={() => setSingleChat(false)} 
                                className="w-12 h-12 rounded-full hover:bg-slate-100 
                                            cursor-pointer flex md:hidden justify-center items-center">
                            <ArrowLeft className="w-5 h-5"/>
                        </div>

                        <div className="w-1/3 flex justify-between ">
                            <div className=" flex flex-col space-y-1 justify-center">
                                <h4 className="text-sm font-bold">
                                    Messages
                                </h4>
                                {
                                    !mobile && (
                                        <p className="text-gray-400 text-xs">
                                            Share Updates from your Polling Unit
                                        </p>
                                    )
                                }
                                
                            </div>
                        </div>

                        <div className="flex w-1/3 justify-end items-center">
                            <div className="w-12 h-12 rounded-full hover:bg-slate-100 
                                                cursor-pointer flex justify-center items-center">
                                <Ellipsis className="w-5 h-5"/>
                            </div>
                        </div>
                    </div>

                    {/* Main chat */}
                    <div className="w-full" style={{height: 'calc(100% - 180px)'}}>

                    </div>

                    <div className="w-full min-h-12 py-1 border-t border-gray-200 self-end">
                        <Textarea placeholder="Type your message here." className="w-full rounded bg-slate-100 h-12" />
                    </div>

                    <div className="w-full h-12 py-1 flex justify-end self-end">
                        <Button className="rounded-full w-20 text-white text-xs h-12"><Send className="w-4 h-4 text-white"/> Send</Button>                        
                    </div>

                </div>

            </div>
        </main>
    );

}