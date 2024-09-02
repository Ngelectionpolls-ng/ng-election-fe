"use client";
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';

function ForgotPassword() {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });
    console.log(errors)

    const headerTitle = "Forgot Password";
    const headerSubTitle = "Enter the email address you used to create the account to receive instructions on how to reset your password";

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <div className='flex flex-col gap-6 mt-6'>
                    <FormControl
                        as="input"
                        inputStyle
                        labelText="Email Address"
                        placeholder="Enter your email address"
                        type='email'
                        error={typeof errors.email?.message === 'string' ? errors.email.message : undefined}
                        {...register('email', { required: 'Email is required' })}
                    />
                    <Button>Send</Button>
                </div>
                <div className='flex justify-center text-sm mt-4 font-light'><p>Remember your password? {" "}</p><Link href={"/auth/login"} className='font-bold hover:opacity-80 ml-1'> Login</Link></div>
            </form>
        </AuthLayout>
    );
}

export default ForgotPassword;
