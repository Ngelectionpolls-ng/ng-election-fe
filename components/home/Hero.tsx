import { map } from '@/public/assets/images/home'
import Map from '@/components/home/Map';
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='relative bg-[#F2F2F2] flex flex-col items-center'>
            <Map />
            <div className='absolute left-[80px] top-[80px] w-[280px]'>
                <div className='bg-white p-2 border-b-2 border-primary shadow-md'>
                    <h3 className='font-bold text-2xl'>NG ELECTIONS</h3>
                    <p className="text-md">Nigerian election results</p>
                </div>
                <div className='h-[44px] bg-white border-l-2 mt-[11px] border-[#A5E2AC] text-sm flex items-center px-2 shadow-md'>
                    Click on a state to view election and report details
                </div>
            </div>
            <div>
                <div className='flex items-center gap-4'>
                    <div className='flex items-center gap-2'><div className='size-5 bg-primary'></div>Past elections</div>
                    <div className='flex items-center gap-2'><div className='size-5 bg-primary'></div>Upcoming elections</div>
                </div>
                <div className='flex items-center gap-2'><div className='size-5 bg-primary'></div>Past elections</div>
            </div>
        </div>
    )
}

export default Hero
