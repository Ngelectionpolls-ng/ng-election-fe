"use client";
import { Button } from '@/components/ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/otp-input';
import AuthLayout from '../_component/authLayout';
import { useState } from 'react';
import Link from 'next/link';

function OneTimePassword() {
    const [confirmation, setConfirmation] = useState(false)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const headerTitle = "Verify your account";
    const headerSubTitle = "We sent a code to your email, and phone number. Input the code to complete registration";

    const handleResendOTP = () => {
        console.log("OTP resent!")
    }


    const onSubmit = (data: FieldValues) => {
        const otpCode = data.otp;
        console.log("OTP Code Submitted: ", otpCode);
        setConfirmation(true)
    };

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} confirmation={confirmation} bgImg='login-bg.png'>
            {confirmation ? (<>
                <Link href={'/auth/login'} className='inline-flex items-center w-full justify-center whitespace-nowrap rounded-[30px] text-sm font-medium ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-4 py-2 mt-6'>Login</Link>
            </>) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col items-center gap-6 mt-6 w-full'>
                        <InputOTP
                            maxLength={4}
                            {...register('otp', { required: 'OTP is required' })}
                            onChange={(otp) => setValue('otp', otp)}
                        >
                            <InputOTPGroup>
                                <InputOTPSlot index={0} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={1} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={2} />
                            </InputOTPGroup>
                            <InputOTPGroup>
                                <InputOTPSlot index={3} />
                            </InputOTPGroup>
                        </InputOTP>
                        <div className='flex justify-center text-sm mt-4 font-light'>
                            <p>Didn’t get a code?</p>
                            <button type="button" onClick={handleResendOTP} className='font-bold hover:opacity-80 ml-1'> Click to Resend</button>
                        </div>
                        <Button type='submit'>Verify</Button>
                    </div>
                </form>
            )
            }
        </AuthLayout>
    );
}

export default OneTimePassword;
