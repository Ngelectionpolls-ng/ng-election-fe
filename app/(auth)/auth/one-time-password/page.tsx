"use client";
import { Button } from '@/components/ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { InputCode } from '@/components/common/InputCode';

function OneTimePassword() {
    const [confirmation, setConfirmation] = useState(false);
    const [otpCode, setOtpCode] = useState<string[]>(Array(6).fill(""));
    const [timeLeft, setTimeLeft] = useState(300);
    const { handleSubmit } = useForm<FieldValues>({ mode: "onChange" });

    const headerTitle = "Verify your account";

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const expiryTime = (
        <span className='text-[#F97316] font-bold'>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
    );

    const headerSubTitle = (
        <>
            Confirm the OTP sent to ellafedora@gmail and enter the verification code that was sent. Code expires in {expiryTime}
        </>
    );

    // Function to resend OTP
    const handleResendOTP = () => {
        console.log("OTP resent!");
        setTimeLeft(300);
    };

    // Function to handle OTP submission
    const onSubmit = () => {
        const otpString = otpCode.join('');
        console.log("OTP Code Submitted: ", otpString);
        setConfirmation(true);
    };

    // Countdown timer effect
    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle='' verifyEmailConfirmation={confirmation} bgImg='login-bg.png'>
            {confirmation ? (
                <>
                    <Link href={'/auth/login'} className='inline-flex items-center w-full justify-center whitespace-nowrap rounded-[30px] text-sm font-medium ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-4 py-2 mt-6'>
                        Login
                    </Link>
                </>
            ) : (
                <>
                    <div className='mt-6'>
                        <p className='text-neutral-dark-1 text-center leading-[24px]'>{headerSubTitle}</p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col items-center gap-6 mt-6 w-full'>
                            <div className="flex justify-center gap-2">
                                <InputCode
                                    length={6}
                                    onChange={(code: any) => setOtpCode(code)}
                                />
                            </div>

                            {/* {errors.otp && <span className="text-red-500">{errors.otp.message}</span>} */}
                            <div className='flex justify-center text-sm mt-4 font-light'>
                                <p>Didn’t get a code?</p>
                                <button type="button" onClick={handleResendOTP} className='font-bold hover:opacity-80 ml-1'>
                                    Click to Resend
                                </button>
                            </div>
                            <Button type='submit'>Verify</Button>
                        </div>
                    </form>
                </>
            )}
        </AuthLayout>
    );
}

export default OneTimePassword;
