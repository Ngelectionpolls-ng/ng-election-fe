"use client";
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';
import { MoonLoader } from 'react-spinners';
import { toast } from 'sonner';
import useResetPassword from '@/hooks/mutations/auth/useResetPassword';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function ResetPassword() {
    const [idParam, setIdParam] = useState<string | null>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { handleSubmit, control, formState: { errors }, watch } = useForm<FieldValues>({ mode: "onChange" });

    const { mutate } = useResetPassword();

    const router = useRouter();
    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const id = searchParams.get("id");
        if (id) {
            setIdParam(id)
        }
    }, [idParam]);

    const onSubmit = (data: FieldValues) => {
        const payload = {
            id: idParam,
            newPassword: data.newPassword
        };
        setIsLoading(true)
        mutate(payload, {
            onSuccess: (response) => {
                toast.success(response.data.message);
                router.push("/auth/login")
                setIsLoading(false)
            },
            onError: (error: any) => {
                setIsLoading(false)
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

    const headerTitle = "Reset your password";
    const headerSubTitle = "";

    const passwordValue = watch('newPassword');

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form className='w-full border-red-600 min-w-[550px]' onSubmit={handleSubmit(onSubmit)}>
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
                            className='w-full'
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
                            className='w-full'
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
                    <Button type="submit" disabled={isLoading}>
                        {isLoading ? (<MoonLoader color='white' size={18} />) : "Send"}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}

export default ResetPassword;
