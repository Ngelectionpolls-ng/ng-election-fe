"use client";
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';
import { MoonLoader } from 'react-spinners';
import useSendPasswordLink from '@/hooks/mutations/auth/useSendPasswordLink';
import { toast } from 'sonner';

function ForgotPassword() {
    const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const { mutate, isPending } = useSendPasswordLink()

    const onSubmit = (data: FieldValues) => {
        const payload = {
            email: data.email,
            resetUrl: '/auth/reset-password'
        }
        mutate(payload, {
            onSuccess: () => {
                toast.success("A link to reset your password has been sent to your email")
            },
            onError: (error: any) => {
                toast.error(error.data.message)
            }
        })
    }

    const getErrorMessage = (error: any): string | undefined => {
        if (!error) return undefined;
        if (typeof error === 'string') return error;
        if (error.message) return error.message;
        return undefined;
    };

    const headerTitle = "Forgot Password";
    const headerSubTitle = "Enter the email address you used to create the account to receive instructions on how to reset your password";

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6 mt-6'>
                    <Controller
                        name="email"
                        control={control}
                        rules={{
                            required: "Email is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Please enter a valid email address",
                            }
                        }}
                        render={({ field }) => (
                            <FormControl
                                as='input'
                                labelText='Email Address'
                                placeholder='Enter your email address'
                                type='email'
                                {...field}
                                error={getErrorMessage(errors.email)}
                            />
                        )}
                    />
                    <Button type="submit" disabled={isPending}>
                        {isPending ? (<MoonLoader color='white' size={18} />) : "Send"}
                    </Button>
                </div>
                <div className='flex justify-center text-sm mt-4 font-light'><p>Remember your password? {" "}</p><Link href={"/auth/login"} className='font-bold hover:opacity-80 ml-1'> Login</Link></div>
            </form>
        </AuthLayout>
    );
}

export default ForgotPassword;
