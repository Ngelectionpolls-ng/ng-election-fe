import Map from '@/components/home/Map';
import React from 'react'

function Hero() {
    return (
        <div className="" style={{backgroundColor: "rgba(0,0,0,.3)"}}>
            <div className='relative bg-[#F2F2F2] flex flex-col items-center' style={{backgroundImage: `url('${process.env.NEXT_PUBLIC_FRONTEND_URL}/assets/images/home/background.jpeg')`, backgroundSize: "cover", backgroundRepeat: 'no-repeat'}}>
                <Map />
                <div className='absolute left-[80px] top-[200px] w-[300px] hidden md:block'>
                    <div className='bg-white p-2 border-b-2 border-primary shadow-md'>
                        <h3 className='font-bold text-lg'>NG ELECTIONS</h3>
                        <p className="text-sm">Nigerian election results</p>
                    </div>
                    <div className='bg-white border-l-2 mt-2 border-[#A5E2AC] text-sm flex items-center p-2 shadow-md'>
                        Click on a state to view election and report details
                    </div>
                </div>
                <div className="md:absolute bottom-4 md:left-[80px]">
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-2'><div className='size-4 bg-primary'></div>Past elections</div>
                        <div className='flex items-center gap-2'><div className='size-4 bg-orange-400'></div>Upcoming elections</div>
                    </div>
                    <div className='flex items-center gap-2'><div className='size-4 bg-primary'></div>Past elections</div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero
