import Link from '@/node_modules/next/link';
import Image from 'next/image';
import React, { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode;
    passwordResetConfirmation?: boolean;
    verifyEmailConfirmation?: boolean;
    headerTitle: string;
    headerSubTitle?: string;
    bgImg: string;
}

function AuthLayout({ children, passwordResetConfirmation, verifyEmailConfirmation, headerTitle, headerSubTitle, bgImg }: AuthLayoutProps) {
    return (
        <section className='bg-white py-9 pl-6 2xl:pl-20 pr-6 xl:pl-10 2x:pr-[34px] flex gap-7 xl:gap-[120px] sm:flex-row-reverse xl:flex-row justify-between min-h-screen text-neutral-dark-2'>
            <div className='relative flex md:items-center md:w-[90%] pt-[120px] md:pt-0'>
                <div className='md:w-[80%]'>
                    <Link href="/">
                        <div className='absolute left-[30%] top-5 flex justify-center'>
                            <Image src={"/ng-election-logo-5.png"} width={145} height={100} alt="" />
                        </div>
                    </Link>
                    <div className='h-5 w-full'></div>
                    <div className='mt-20'>
                        <h2 className='text-black-500 text-[28px] text-center font-semibold leading-[120%] mb-1'>{`${passwordResetConfirmation ? "Successful Password reset!" : verifyEmailConfirmation ? "Your email has been verified successfully" : headerTitle}`}</h2>
                        <p className='text-neutral-dark-1 text-center leading-[24px]'>{`${passwordResetConfirmation ? "You can now use your new password to login to your account." : verifyEmailConfirmation ? "You can now login to your account." : headerSubTitle}`}</p>
                    </div>
                    {children}
                </div>
            </div>
            <div className='relative hidden md:block w-full max-w-[50%] text-white-full-500 bg-no-repeat bg-cover bg-center rounded-[20px] min-h-[675px] 2xl:min-h-[875px]' style={{ backgroundImage: `url(/assets/images/${bgImg})` }}>
                <div className='absolute inset-0 bg-[#39693D8C] rounded-[20px] flex flex-col justify-end px-[49px] pb-10'>
                    <div>
                        <h1 className='text-4xl font-semibold leading-tight'>Making positive impact in our great nation.</h1>
                        <p className='font-medium'>Create a free account and join millions of other well wishers, in setting our nation on the right path again.</p>
                    </div>
                    <p className='pt-10 font-medium'>Open to all. 1 million+ people.</p>
                </div>
            </div>

        </section>
    )
}

export default AuthLayout
