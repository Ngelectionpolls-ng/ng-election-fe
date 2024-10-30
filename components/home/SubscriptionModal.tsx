import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

function SubscriptionModal() {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogDescription>
                        <div className='relative h-12 border border-[#8E95A2] rounded-2xl mt-4'>
                            <Button className='absolute rounded-2xl w-fit '>Click to Subscribe</Button>
                            <input type="email" className='w-full h-full pl-[159px] pr-14 border outline-none rounded-2xl text-primary' placeholder='Enter your email' />
                            <button className='absolute text-primary right-4 translate-y-1/2'>
                                <ArrowRight />
                            </button>
                        </div>
                        <p className='text-[#525252] mt-4'>I already have subscriber account <Link href={'/auth/login'} className='text-black-500 font-bold hover:text-black-500/80'>Login</Link></p>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default SubscriptionModal
