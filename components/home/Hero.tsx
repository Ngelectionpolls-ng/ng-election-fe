import { map } from '@/public/assets/images/home'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <div className='relative bg-[#F2F2F2] flex flex-col items-center'>
            <Image src={map} width={1500} height={1500} alt='Map of Nigeria' className='w-[75%] h-auto' />
            <div className='absolute left-[80px] top-[80px] w-[370px]'>
                <div className='bg-white px-4 py-5 border-b-2 border-primary'>
                    <h3 className='font-bold text-3xl'>NG ELECTIONS</h3>
                    <p>Nigerian election results</p>
                </div>
                <div className='h-[49px] bg-white border-l-2 mt-[11px] border-[#A5E2AC] text-sm flex items-center px-4'>
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
