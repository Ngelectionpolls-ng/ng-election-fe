"use client";
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';
import { MoonLoader } from 'react-spinners';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useUpdateSubscriberPassword from '@/hooks/mutations/auth/useUpdateSubscriberPassword';
import Link from 'next/link';

function Subscription() {
    const [emailParam, setEmailParam] = useState<string | null>("")
    const [confirmation, setConfirmation] = useState<boolean>(false);
    const { handleSubmit, control, formState: { errors }, watch } = useForm<FieldValues>({ mode: "onChange" });

    const { mutate, isPending } = useUpdateSubscriberPassword();

    const router = useRouter();
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const email = searchParams.get("email");
        if (email) {
            setEmailParam(email)
        }
    }, [emailParam]);

    const onSubmit = (data: FieldValues) => {
        const payload = {
            email: emailParam,
            newPassword: data.newPassword
        };
        mutate(payload, {
            onSuccess: (response) => {
                toast.success(response.data.message);
                setConfirmation(true)
            },
            onError: (error: any) => {
                toast.error(error.response.data.message);
            }
        });
    };

    const getErrorMessage = (error: any): string | undefined => {
        if (!error) return undefined;
        if (typeof error === 'string') return error;
        if (error.message) return error.message;
        return undefined;
    };

    const headerTitle = confirmation ? "Subscription Successful!" : "Setup Password to complete Subscription";
    const headerSubTitle = confirmation ? "You can now access all the election result by logging in into your account." : "";

    const passwordValue = watch('newPassword');

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            {confirmation ? (
                <Link href={"/auth/login"} className='inline-flex w-full mt-4'>
                    <Button type="submit">Login</Button>
                </Link>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='flex flex-col gap-6 mt-6'>
                        {/* New Password Field */}
                        <Controller
                            name="newPassword"
                            control={control}
                            rules={{
                                required: "Password is required",
                                minLength: { value: 8, message: "Password must be at least 8 characters" },
                                validate: {
                                    hasUpperCase: (value) =>
                                        /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                                    hasLowerCase: (value) =>
                                        /[a-z]/.test(value) || "Password must contain at least one lowercase letter",
                                    hasNumber: (value) =>
                                        /[0-9]/.test(value) || "Password must contain at least one number",  // Added number validation
                                    hasSpecialChar: (value) =>
                                        /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character",
                                }
                            }}
                            render={({ field }) => (
                                <FormControl
                                    as='input'
                                    labelText='New Password'
                                    placeholder='Enter your new password'
                                    type='password'
                                    {...field}
                                    error={getErrorMessage(errors.newPassword)}
                                />
                            )}
                        />

                        {/* Confirm New Password Field */}
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                required: "Confirm password is required",
                                validate: value => value === passwordValue || "Passwords do not match"
                            }}
                            render={({ field }) => (
                                <FormControl
                                    as='input'
                                    labelText='Confirm New Password'
                                    placeholder='Confirm your new password'
                                    type='password'
                                    {...field}
                                    error={getErrorMessage(errors.confirmPassword)}
                                />
                            )}
                        />

                        {/* Submit Button */}
                        <Button type="submit" disabled={isPending}>
                            {isPending ? (<MoonLoader color='white' size={18} />) : "Submit"}
                        </Button>
                    </div>
                </form>
            )}
        </AuthLayout>
    );
}

export default Subscription;
