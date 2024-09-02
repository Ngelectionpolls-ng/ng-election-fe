"use client";
import AuthLayout from '../_component/authLayout';
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';

function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const headerTitle = 'Sign up';
    const headerSubTitle = 'Create an account to get started with us.';

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='auth-bg-img.png'>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <div className='flex flex-col gap-6 mt-6'>
                    <FormControl
                        as="input"
                        inputStyle
                        labelText="Full Name"
                        placeholder="Enter your full name"
                        error={typeof errors.fullName?.message === 'string' ? errors.fullName.message : undefined}
                        {...register('fullName', { required: 'Full Name is required' })}
                    />
                    <FormControl
                        as="input"
                        inputStyle
                        labelText="Email Address"
                        placeholder="Enter your email address"
                        type='email'
                        error={typeof errors.email?.message === 'string' ? errors.email.message : undefined}
                        {...register('email', { required: 'Email is required' })}
                    />
                    <FormControl
                        as="input"
                        inputStyle
                        labelText="Phone Number"
                        placeholder="Enter your phone number"
                        type='text'
                        defaultValue={"+234"}
                        error={typeof errors.phoneNumber?.message === 'string' ? errors.phoneNumber.message : undefined}
                        {...register('phoneNumber', { required: 'Phone number is required' })}
                    />
                    <FormControl
                        as="input"
                        inputStyle
                        labelText="Password"
                        placeholder="Enter your password"
                        type='password'
                        error={typeof errors.password?.message === 'string' ? errors.password.message : undefined}
                        {...register('password', { required: 'Password is required', minLength: { value: 8, message: "It should contain at least 8 characters" } })}
                    />
                    <Button>Create Account</Button>
                </div>
                <div className='flex justify-center text-sm mt-4 font-light'><p>Have an account? {" "}</p><Link href={"/auth/login"} className='font-bold hover:opacity-80 ml-1'>Login</Link></div>
                <div className='flex items-center gap-1 font-light text-sm mt-4'><ShieldCheck size={16} strokeWidth={1.5} /><p>By logging in, you agree to the <Link href={"#"} className='font-bold'>Terms of Service</Link> and <Link href={"#"} className='font-bold'>Privacy Policy</Link></p></div>
            </form>
        </AuthLayout>
    );
}

export default Page;
