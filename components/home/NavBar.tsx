import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { hamburgerIcon } from '@/public/assets/icons'

function NavBar() {
  return (
    <div className='w-full flex justify-between border-b-[1.5px] border-black px-8 pb-7'>
                <Image src={"/ng-election-logo.svg"} width={250} height={50} alt='NG Election logo' className='w-[140px] h-auto' />
                <NavigationMenu className="hidden lg:block">
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Our Mission</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Election Results</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Eye witness</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <NavigationMenuLink>Link</NavigationMenuLink>
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
                <Image src={hamburgerIcon} width={29} height={18} alt='Hambuger menu' className='lg:hidden' />
            </div>
  )
}

export default NavBar
