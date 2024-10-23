import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { hamburgerIcon } from '@/public/assets/icons'
import Svg from '../common/Svg'

function NavBar() {
    return (
        <div className='w-full flex justify-between border-b-[1.5px] border-black px-8 pb-7'>
            <Image src={"/ng-election-logo.svg"} width={250} height={50} alt='NG Election logo' className='w-[140px] h-auto' />
            <NavigationMenu className="hidden lg:block">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Our Mission</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <ul className="w-52 p-4 rounded shadow-md flex flex-col space-y-4 text-green-900">
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        About Us
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Mission Statement
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Methodology
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Initiative
                                    </li>
                                </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Election Results</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <NavigationMenuLink>
                                    <ul className="w-52 p-4 rounded shadow-md flex flex-col space-y-4 text-green-900">
                                        <li className="text-md cursor-pointer hover:font-bold">
                                            Presidential
                                        </li>
                                        <li className="text-md cursor-pointer hover:font-bold">
                                            Gubernotorial
                                        </li>
                                        <li className="text-md cursor-pointer hover:font-bold">
                                            House of Assembly
                                        </li>
                                        <li className="text-md cursor-pointer hover:font-bold">
                                            Local Government
                                        </li>
                                        <li className="text-md cursor-pointer hover:font-bold">
                                            Off-cycle Elections
                                        </li>
                                    </ul>
                                </NavigationMenuLink>
                            </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Eye witness</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <ul className="w-52 p-4 rounded shadow-md flex flex-col space-y-4 text-green-900">
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Objectives
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        How to Volunteer
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Available Polling Units
                                    </li>
                                </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <NavigationMenuLink>
                                <ul className="w-52 p-4 rounded shadow-md flex flex-col space-y-4 text-green-900">
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Publications
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Election Updates
                                    </li>
                                    <li className="text-md cursor-pointer hover:font-bold">
                                        Find Polling Unit
                                    </li>
                                </ul>
                            </NavigationMenuLink>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                    <div className='flex ml-7 gap-3'>
                        <NavigationMenuItem>
                            <Link href="/auth/login" legacyBehavior passHref>
                                <Button className='bg-primary min-w-[128px] text-sm text-white font-bold uppercase rounded-none border border-primary hover:bg-transparent hover:text-black-500 animate-in transition-colors'>Login</Button>
                            </Link>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <Link href="/docs" legacyBehavior passHref>
                                <Button className='bg-transparent text-black-500 font-bold uppercase rounded-none border border-primary hover:bg-primary hover:text-white animate-in transition-colors'>Join us now</Button>
                            </Link>
                        </NavigationMenuItem>
                    </div>

                </NavigationMenuList>
            </NavigationMenu>
            <Svg width={"29px"} height={'18px'} SvgIcon={hamburgerIcon} className='lg:hidden' />
        </div>
    )
}

export default NavBar
