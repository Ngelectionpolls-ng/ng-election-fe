"use client"

import React, {useContext, useEffect, useState} from 'react'
import {ChevronRight, ChevronLeft, LogOut } from 'lucide-react'
import Link from 'next/link'
import { SessionContext } from "contexts/Session"
import { AppContext } from "contexts/App"
import { DashboardContext } from "contexts/Dashboard"
import {constants, makeSlug} from "helpers" 
import {useRouter} from 'next/navigation'
import { logout } from '../../helpers'

function Sidebar() {

    const [expanded, setExpanded] = useState(true);
    const {user, setLoading} = useContext(AppContext);
    const {activeMenu, setActiveMenu} = useContext(DashboardContext);

    const router = useRouter();

    
    useEffect(() => {
        
        setSidebarWidth();
        
        setLoading(false);

        window.addEventListener('resize', () => {
            setSidebarWidth();
        });        

        if(!activeMenu){
            setActiveMenu(constants.DASHBOARD);
        }

        if(activeMenu == constants.DASHBOARD){
            router.push(`/dashboard`);
        }else{
            router.push(`/dashboard/${makeSlug(activeMenu)}`);            
        }
    }, []);
    

    const setSidebarWidth = () => {
        window.visualViewport.width >= 768 ? setExpanded(true) : setExpanded(false);
    }

    const displayPage = (menuItem) => {
        if(activeMenu == menuItem){
            return;
        }
        // setLoading(true);
        setActiveMenu(menuItem);
        if(menuItem == constants.DASHBOARD){
            router.push(`/dashboard`);
        }else{
            router.push(`/dashboard/${makeSlug(menuItem)}`);            
        }
    }

    
    return (
        <div className={`${expanded ? 'w-[230px]' : 'w-[80px]'} bg-green-900 h-screen shadow p-2 py-6 flex flex-col space-y-2 ${expanded ? '' : 'items-center'} transition-all duration-200`}>
            <Link onClick={() => setLoading(true)} href="/">
                {
                    expanded ? (
                        <img src={'/assets/images/footerimage.png'} alt="" className="w-40" />
                    ) : (
                        <img src={'/assets/images/smallimage.png'} alt="" className="w-full" />
                    )
                }
                
            </Link>
            
            {
                !expanded && (
                     <span className="text-[10px] text-white">Menu</span>
                )
            }           

            <div className="flex flex-between">

                {
                    expanded && (
                        <span className="text-[10px] text-green-500">Main Menu</span>
                    )
                }   
                
                <Open expanded={expanded}/> 

            </div>                    
            
            <Dashboard onClick={() => displayPage(constants.DASHBOARD)} active={activeMenu == constants.DASHBOARD} />
            
            <MyActivityReport onClick={() => displayPage(constants.MY_ACTIVITY_REPORT)} active={activeMenu == constants.MY_ACTIVITY_REPORT} />
            
            <ResultCollation onClick={() => displayPage(constants.RESULT_COLLATION)} active={activeMenu == constants.RESULT_COLLATION} />
            
            <Wallet onClick={() => displayPage(constants.WALLET)} active={activeMenu == constants.WALLET} />
            
            <Messages onClick={() => displayPage(constants.MESSAGES)} active={activeMenu == constants.MESSAGES} />
            
            <ElectionResult onClick={() => displayPage(constants.ELECTION_RESULT)} active={activeMenu == constants.ELECTION_RESULT} />

            <EyewitnessReport onClick={() => displayPage(constants.EYEWITNESS_REPORT)} active={activeMenu == constants.EYEWITNESS_REPORT} />

            <News onClick={() => displayPage(constants.NEWS)} active={activeMenu == constants.NEWS} />
            
            <MyAccountInfo onClick={() => displayPage(constants.MY_ACCOUNT_INFO)} active={activeMenu == constants.MY_ACCOUNT_INFO} />
            
            <div className="grow"></div>

            <Signout onClick={() => logout()} />



        </div>    
    )

    function Dashboard({onClick, active}){
        return (
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                    <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.DASHBOARD}</span>
                    )
                }
            </div>
        );
    }

    function MyActivityReport({onClick, active}){
        return (
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.MY_ACTIVITY_REPORT}</span>
                    )
                }
            </div>
        );
    }

    function Wallet({onClick, active}){
        return (
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path d="M2.273 5.625A4.483 4.483 0 0 1 5.25 4.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 3H5.25a3 3 0 0 0-2.977 2.625ZM2.273 8.625A4.483 4.483 0 0 1 5.25 7.5h13.5c1.141 0 2.183.425 2.977 1.125A3 3 0 0 0 18.75 6H5.25a3 3 0 0 0-2.977 2.625ZM5.25 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h13.5a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3H15a.75.75 0 0 0-.75.75 2.25 2.25 0 0 1-4.5 0A.75.75 0 0 0 9 9H5.25Z" />
                </svg>

                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.WALLET}</span>
                    )
                }
            </div>
        );
    }

    function Messages({onClick, active}){
        return (
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.MESSAGES}</span>
                    )
                }
            </div>
        );
    }
    
    function ElectionResult({onClick, active}){
        return (            
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.ELECTION_RESULT}</span>
                    )
                }
            </div>
        );
    }

    function EyewitnessReport({onClick, active}){
        return (            
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 0 0-1.032-.211 50.89 50.89 0 0 0-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 0 0 2.433 3.984L7.28 21.53A.75.75 0 0 1 6 21v-4.03a48.527 48.527 0 0 1-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979Z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 0 0 1.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0 0 15.75 7.5Z" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.EYEWITNESS_REPORT}</span>
                    )
                }
            </div>
        );
    }

    function ResultCollation({onClick, active}){
        return (            
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 0 1 8.25-8.25.75.75 0 0 1 .75.75v6.75H18a.75.75 0 0 1 .75.75 8.25 8.25 0 0 1-16.5 0Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M12.75 3a.75.75 0 0 1 .75-.75 8.25 8.25 0 0 1 8.25 8.25.75.75 0 0 1-.75.75h-7.5a.75.75 0 0 1-.75-.75V3Z" clipRule="evenodd" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.RESULT_COLLATION}</span>
                    )
                }
            </div>
        );
    }

    function News({onClick, active}){
        return (            
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375ZM6 12a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V12Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 15a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V15Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75ZM6 18a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V18Zm2.25 0a.75.75 0 0 1 .75-.75h3.75a.75.75 0 0 1 0 1.5H9a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.NEWS}</span>
                    )
                }
            </div>
        );
    }

    function MyAccountInfo({onClick, active}){
        return (
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] border border-white/20 flex items-center ${active ? 'bg-white' : ''} hover:bg-white cursor-pointer group`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill={active ? "#008000" : "white"} className="size-6 group-hover:text-[#008000] group-hover:fill-current">
                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                </svg>
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold ${active ? 'text-gray-700' : 'text-white'} group-hover:text-gray-700`}>{constants.MY_ACCOUNT_INFO}</span>
                    )
                }
            </div>
        );
    }

    function Signout({onClick, active}){
        return (
            <div onClick={onClick} className={`${expanded ? 'w-full' :'w-[44px]'} h-[40px] p-2 rounded-[5px] flex items-center hover:bg-white cursor-pointer group`}>
                <LogOut className="group-hover:text-[#008000] text-white" />
                {
                    expanded && (
                        <span className={`ml-2 text-xs  font-semibold hover:text-gray-700 text-white group-hover:text-gray-700`}>Logout</span>
                    )
                }
            </div>
        );
    }

    function Open({expanded}){
        return (
            <div className={`bg-green-500 hover:bg-green-900 rounded 
                            text-center h-5 w-5 flex justify-center items-center cursor-pointer 
                            ${expanded ? 'ml-auto' :'justify-center'} `}>
                {
                    expanded ? (
                        <ChevronLeft onClick={() => setExpanded(false)} className="text-white" />
                    ) : (
                        <ChevronRight onClick={() => setExpanded(true)} className="text-white" />
                    )
                    
                }
            </div>
        );
    }
}

export default Sidebar