import React from 'react'
import newsImg from '@/public/assets/images/bg-2.png' 
import Image from 'next/image'

type Props = {}

export default function NewsWrap({}: Props) {
  return (
    <div className='flex gap-4'>
      <Image src={newsImg} alt='img' className='max-w-32 md:max-w-52' />
      <div className='flex flex-col justify-center gap-1 lg:flex-col-reverse'>
        <span className='text-xs lg:hidden'>pooling unit, local govt, state</span>
        <span className='leading-5 font-normal'>Protest is ongoing. No Labour Party supporter would be allowed to vote in this ward.</span>
        <div className='flex text-xs gap-2'>
          <span>status</span>
          <span>2hrs ago</span>
        </div>
      </div>
    </div>
  )
}