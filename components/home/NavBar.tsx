import React from 'react'
import { NavigationMenuItem } from '../ui/navigation-menu'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { hamburgerIcon } from '@/public/assets/icons'
import Svg from '../common/Svg'
import NavContent from './NavContent'
import SubscriptionModal from './SubscriptionModal'

function NavBar() {
    const ourMissionOptions = ["About Us", "Mission Statement", "Methodology", "Initiatives"];
    const electionResultOptions = ["Presidential", "Gubernational", "House of Assembly", "Local Government", "Off-cycle elections"];
    const eyeWitnessOptions = ["Objectives", "How to volunteer", "Available polling unit"];
    const resourcesOptions = ["Publications", "Elelction update", "Find polling unit"]
    return (
        <div className='w-full flex justify-between border-b-[1.5px] border-black px-8 pb-7'>
            <Image src={"/ng-election-logo-5.png"} width={250} height={50} alt='NG Election logo' className='w-[140px] h-auto' />
            <div className='hidden lg:flex items-center'>
                <NavContent navHeading='Our Mission' navLinkOption={ourMissionOptions} />
                <NavContent navHeading='Election Results' navLinkOption={electionResultOptions} />
                <NavContent navHeading='Eyewitness' navLinkOption={eyeWitnessOptions} />
                <NavContent navHeading='Resources' navLinkOption={resourcesOptions} />
                <NavigationMenuItem className='list-none'>
                    <Link href="/contact-us" legacyBehavior passHref>
                        <Button className='bg-transparent text-black-500 font-medium rounded-none hover:bg-transparent'>Contact Us</Button>
                    </Link>
                </NavigationMenuItem>
                <div className='flex ml-7 gap-3'>
                    <NavigationMenuItem className='list-none'>
                        <Link href="/auth/login" legacyBehavior passHref>
                            <Button className='bg-transparent w-fit text-sm text-black font-bold uppercase rounded-[8px] border border-[#E4E4E7] hover:border-primary hover:bg-primary hover:text-white animate-in transition-colors duration-500'>Login</Button>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem className='list-none'>
                        <Link href="/docs" legacyBehavior passHref>
                            <Button className='bg-primary text-white font-bold uppercase rounded-[8px] hover:bg-primary/80 hover:text-white animate-in transition-colors'>Join us now</Button>
                        </Link>
                    </NavigationMenuItem>
                </div>
            </div>
            <SubscriptionModal />

            <Svg width={"29px"} height={'18px'} SvgIcon={hamburgerIcon} className='lg:hidden' />
        </div>
    )
}

export default NavBar
