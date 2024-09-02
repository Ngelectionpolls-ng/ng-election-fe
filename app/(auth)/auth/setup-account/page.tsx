import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Page() {
    return (
        <div className='relative w-screen h-screen bg-[url(/assets/images/bg-2.png)] bg-cover bg-[50%]'>
            <div className='absolute w-full h-full inset-0 bg-[#39693D8C] rounded-[20px] flex flex-col justify-center items-center'>
                <div>
                    <div className='bg-white w-screen h-screen sm:w-[70vw] md:w-fit sm:h-fit md:min-w-[50%] rounded-lg pb-11 px-14 text-primary pt-20 sm:pt-11'>
                        <div className='flex items-center justify-center gap-[6px] text-3xl font-semibold'>
                            <Image src={"/assets/icons/vote-box.svg"} width={30} height={30} alt='vote box icon' />
                            Eyewitness
                        </div>
                        <p className='font-medium text-lg text-center mb-2'>Finish up your account creation</p>
                        <div className='flex justify-center items-center'>
                            <div className='w-[390px] h-[260px] rounded-[15px] overflow-hidden bg-[url(/assets/images/map.png)] bg-center bg-cover'>
                            </div>
                        </div>
                        <fieldset className='flex flex-col items-start gap-2 mt-3'>
                            <label htmlFor="joinAsVoter" className='text-[#444444] flex gap-2'>
                                <input type="radio" name="joinAs" id="joinAsVoter" />
                                Join as a voter
                            </label>
                            <label htmlFor="joinAsAgent" className='text-[#444444] flex gap-2'>
                                <input type="radio" name="joinAs" id="joinAsAgent" />
                                Join as a Party agent
                            </label>
                        </fieldset>
                        <Link href={'/auth/step-one'} className='inline-flex items-center w-full justify-center whitespace-nowrap rounded-[30px] text-sm font-medium ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-4 py-2 mt-6'>Finish Up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
