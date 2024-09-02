import React, { ReactNode } from 'react'

interface AuthLayoutProps {
    children: ReactNode;
    confirmation?: boolean;
    headerTitle: string;
    headerSubTitle?: string;
    bgImg: string;
}

function AuthLayout({ children, confirmation, headerTitle, headerSubTitle, bgImg }: AuthLayoutProps) {
    return (
        <section className='bg-white py-9 pl-6 2xl:pl-20 pr-6 xl:pl-10 2x:pr-[34px] flex gap-7 xl:gap-[120px] sm:flex-row-reverse xl:flex-row justify-between min-h-screen text-neutral-dark-2'>
            <div className='flex md:items-center md:w-[90%] pt-[120px] md:pt-0'>
                <div className='md:w-[80%]'>
                    <div className='mt-6'>
                        <h2 className='text-black-500 text-[28px] text-center font-semibold leading-[120%] mb-1'>{`${confirmation ? "Successful Password reset!" : headerTitle}`}</h2>
                        <p className='text-neutral-dark-1 text-center leading-[24px]'>{`${confirmation ? "You can now use your new password to login to your account." : headerSubTitle}`}</p>
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
