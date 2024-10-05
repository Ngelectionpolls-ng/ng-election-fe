"use client";
import { Button } from '@/components/ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/otp-input';
import AuthLayout from '../_component/authLayout';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import useVerifyAccount from '@/hooks/mutations/auth/useVerifyAccount';
import { MoonLoader } from 'react-spinners';
import { toast } from 'sonner';
import useResendOTP from '@/hooks/mutations/auth/useResendOTP';
import { ResendOTPPayload } from '@/services/api/auth';

function VerifyAccount() {
    const [confirmation, setConfirmation] = useState(false);
    const [timeLeft, setTimeLeft] = useState(300);
    const [idParam, setIdParam] = useState<string | null>("")

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const { mutate: mutateVerifyAccount, isPending: isVerifyAccountPending } = useVerifyAccount()
    const { mutate: mutateResendOTP, isPending: isResendOTPPending } = useResendOTP()


    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");
        if (id) {
            setIdParam(id)
            console.log(idParam)
        }
    }, [idParam]);



    // Function to resend OTP
    const handleResendOTP = () => {
        const payload: ResendOTPPayload = {
            email: localStorage.getItem("ng-election-email"),
            channel: "registration",
            redirectUrl: "/verify-account"
        }
        console.log(payload)
        mutateResendOTP(payload, {
            onSuccess: (response) => {
                toast.success(response.data.message)
                setTimeLeft(300);
            },
            onError: (error: any) => {
                toast.error(error.response.data.message[0])
            }
        })
    };

    // Function to handle OTP submission
    const onSubmit = (data: FieldValues) => {
        const payload = {
            id: data.otp
        }
        console.log(payload)
        mutateVerifyAccount(payload, {
            onSuccess: () => {
                setConfirmation(true);
            }
        })
    };

    // Countdown timer effect
    useEffect(() => {
        if (timeLeft <= 0) return;

        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const expiryTime = (
        <span className='text-[#F97316] font-bold'>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
        </span>
    );

    const headerTitle = "Verify your account";
    const headerSubTitle = (
        <>
            We sent a code to your email. Input the code to complete registration. Code expires in {expiryTime}
        </>
    )

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle='' confirmation={confirmation} bgImg='login-bg.png'>
            {confirmation ? (
                <>
                    <Link href={'/auth/login'} className='inline-flex items-center w-full justify-center whitespace-nowrap rounded-[30px] text-sm font-medium ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-4 py-2 mt-6'>
                        Login
                    </Link>
                </>
            ) : (
                <><div className='mt-6'>
                    <p className='text-neutral-dark-1 text-center leading-[24px]'>{headerSubTitle}</p>
                </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col items-center gap-6 mt-6 w-full'>
                            <InputOTP
                                maxLength={6}
                                {...register('otp', { required: 'OTP is required' })}
                                onChange={(otp) => setValue('otp', otp)}
                            >
                                {[...Array(6)].map((_, index) => (
                                    <InputOTPGroup key={index}>
                                        <InputOTPSlot index={index} />
                                    </InputOTPGroup>
                                ))}
                            </InputOTP>
                            <div className='flex justify-center text-sm mt-4 font-light'>
                                <p>Didn’t get a code?</p>
                                <button type="button" onClick={handleResendOTP} className='font-bold hover:opacity-80 ml-1'>
                                    Click to Resend
                                </button>
                            </div>
                            <Button type='submit'>{isVerifyAccountPending ? <MoonLoader color='white' size={18} /> : "Verify"}</Button>
                        </div>
                    </form></>
            )}
        </AuthLayout>
    );
}

export default VerifyAccount;
