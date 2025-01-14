"use client"

import React, {useContext, useEffect, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "components/ui/navigation-menu"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "components/ui/dropdown-menu"

import { AppContext } from "contexts/App";
import NavUserIcon from "components/commons/NavUserIcon";
import { useRouter } from 'next/navigation';
import { DashboardContext } from 'contexts/Dashboard';
import { isMobile, navItems, subItems, itemIds } from "helpers";
import MobileLinks from 'components/commons/MobileLinks';


function NavBar() {
    const [open, setOpen] = useState(false);
    const [mobile, setMobile] = useState(false);    

    const {isLoggedIn, user, setLoading} = useContext(AppContext);
    const {setActiveMenu} = useContext(DashboardContext);
    const router = useRouter();

    // console.log("User in NAVBAR", user);
    // console.log("is logged in", isLoggedIn);

    useEffect(() => {
        setLoading(false);
        setMobile(isMobile());
        window.onresize = () => {
            setMobile(isMobile());
            if(!isMobile()){
                setOpen(false);
            }
        }
    }, []);
    
    return (
        
        <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-lg border-b border-b-green-900 fixed z-20 w-screen">
            <div className="w-full flex items-center justify-between mx-auto px-4 py-2">
                <Link href="/" onClick={() => setLoading(true)} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <Image src={"/Nigelctionpolls 4.svg"} width={250} height={50} alt='NG Election logo' className='w-[140px] h-auto' />
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" onClick={() => setOpen(!open)} 
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden 
                                     hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
                                     aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    {
                        open ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        ) : (
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        )
                    }
                    
                </button>
                {
                    open && <MobileLinks />
                }
                <div className="hidden md:flex space-x-8">
                    <NavigationMenu>
                        <NavigationMenuList className="flex">
                            {
                                navItems.map((item, index) => (
                                <NavigationMenuItem key={index} className="">
                                    <NavigationMenuTrigger className="flex">{item}</NavigationMenuTrigger>
                                    <NavigationMenuContent className="w-full">
                                        <ul className="w-full " key={index}>
                                            {
                                                subItems[index].map((subItem, index2) => (
                                                    
                                                    <li className="w-[300px] hover:bg-muted/50" key={index2}>
                                                        <NavigationMenuLink asChild>
                                                            <a
                                                                className="flex h-full w-full select-none flex-col justify-end rounded-md p-4 text-sm hover:text-black no-underline outline-none focus:shadow-md"
                                                                href={itemIds[index][index2]}
                                                            >{subItem}</a>
                                                        </NavigationMenuLink>
                                                    </li>
                                                        
                                                ))
                                            }
                                        </ul>
                                    </NavigationMenuContent>                                    
                                </NavigationMenuItem>))
                            }
                            <NavigationMenuItem>
                                <Link href="/contact-us" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Contact Us
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                        </NavigationMenuList>
                    </NavigationMenu>
                    {
                        isLoggedIn ? (
                            <NavUserIcon />   
                        ) : (                            
                            <div className="flex space-x-4">
                                <Button className="bg-green-900 text-white min-w-[100px] rounded-[5px] hover:bg-black">
                                    <Link href="/auth/login">
                                        Login
                                    </Link>
                                </Button>
                                <Button className="min-w-[100px] rounded-[5px] hover:bg-green-900  hover:text-white"  variant="secondary">
                                    <Link href="/auth/signup">
                                        Join us
                                    </Link>
                                </Button> 
                            </div>
                        )
                    }
                    
                </div>
                
                
            </div>
            
        </nav>       

        // <nav className="bg-gray-50 border-gray-200 dark:bg-gray-900 dark:border-gray-700 shadow-xl border-b border-b-green-900 fixed z-20 w-full">
        //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        //         <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        //             <Image src={"/Nigelctionpolls 4.svg"} width={250} height={50} alt='NG Election logo' className='w-[140px] h-auto' />
        //         </Link>
        //         <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        //             <span className="sr-only">Open main menu</span>
        //             <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        //                 <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        //             </svg>
        //         </button>
        //         <div className="hidden w-full md:flex justify-right items-center md:w-auto" id="navbar-dropdown">
        //             <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  dark:border-gray-700 items-center">

        //                 <li className="group relative text-green-900 text-sm">
        //                     <button data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Our Mission
        //                         <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        //                         </svg>
        //                     </button>
        //                     <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
        //                         <ul className="p-4 text-sm text-green-900 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About Us</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mission Statement</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Methodology</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Initiatives</Link>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </li>

        //                 <li className="group relative text-green-900 text-sm">
        //                     <button data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Election Results
        //                         <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        //                         </svg>
        //                     </button>
        //                     <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
        //                         <ul className="p-4 text-sm text-green-900 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Presidential</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Gubernotorial</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">House of Assembly</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Local Government</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Off-cycle Elections</Link>
        //                             </li>
        //                         </ul>
        //                     </div>

        //                 </li>

        //                 <li className="group relative text-green-900 text-sm">
        //                     <button data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Eyewitness
        //                         <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        //                         </svg>
        //                     </button>
        //                     <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
        //                         <ul className="p-4 text-sm text-green-900 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Objectives</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">How to Volunteer</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Available Polling Units</Link>
        //                             </li>
        //                         </ul>
        //                     </div>

        //                 </li>

        //                 <li className="group relative text-green-900 text-sm">
        //                     <button data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-green-900 rounded font-normal md:hover:bg-transparent md:border-0 md:p-0 md:w-auto dark:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">Resources
        //                         <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        //                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        //                         </svg>
        //                     </button>
        //                     <div className="absolute bg-white z-10 hidden group-hover:block font-normal divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700 dark:divide-gray-600">
        //                         <ul className="p-4 text-sm text-green-900 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Publications</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Election Updates</Link>
        //                             </li>
        //                             <li>
        //                                 <Link href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Find Polling Unit</Link>
        //                             </li>
        //                         </ul>
        //                     </div>

        //                 </li>

        //                 <li>
        //                     <Link href="#" className="block py-2 px-3 text-green-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-white  dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent text-sm">Contact Us</Link>
        //                 </li>

        //                 <Link href="/auth/login">
        //                     <button className='bg-green-900 w-[128px] text-sm text-white font-bold uppercase  border border-primary hover:bg-transparent hover:text-green-900 py-3 rounded-lg'>Login</button>
        //                 </Link>
        //                 <Link href="/auth/create-account" >
        //                     <button className='bg-transparent text-green-900 font-bold uppercase border border-primary hover:bg-green-900 hover:text-white text-sm py-3 px-3 rounded-lg'>Join us now</button>
        //                 </Link>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>

    )
}

export default NavBar
