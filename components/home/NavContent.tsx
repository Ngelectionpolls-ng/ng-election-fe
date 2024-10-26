import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '../ui/navigation-menu'
import Link from 'next/link';

interface NavContentProp {
    navHeading: string;
    navLinkOption: string[];
}

function NavContent({ navHeading, navLinkOption }: NavContentProp) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='text-sm font-medium'>{navHeading}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink className='min-w-[200px] flex flex-col py-4 text-primary font-medium'>
                            {navLinkOption.map((link, idx) => {
                                return (
                                    <Link href={'#'} className='py-2 px-4 hover:bg-slate-100' key={idx}>{link}</Link>
                                )
                            })}
                        </NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavContent
