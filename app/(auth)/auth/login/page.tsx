"use client";
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';

function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const headerTitle = 'Login'
    const headerSubTitle = 'Welcome back, you’ve been missed!'

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(data => console.log(data))} className='w-full'>
                <div className='flex flex-col gap-6 mt-6 w-full'>
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
                        labelText="Password"
                        placeholder="Enter your password"
                        type='password'
                        error={typeof errors.password?.message === 'string' ? errors.password.message : undefined}
                        {...register('password', { required: 'Password is required', minLength: { value: 8, message: "It should contain at least 8 characters" } })}
                    />
                    <div className='w-full flex justify-between'>
                        <label htmlFor="rememberMe" className='flex items-center gap-1'>
                            <input type='checkbox' id='rememberMe' />
                            Remember me
                        </label>
                        <Link href={"/auth/forgot-password"}>Forgot password?</Link>
                    </div>
                    <Button>Login</Button>
                </div>
                <div className='flex justify-center text-sm mt-4 font-light'><p>Don&apos;t have an account? {" "}</p><Link href={"/auth/create-account"} className='font-bold hover:opacity-80 ml-1'> Create account</Link></div>
                <div className='flex items-center gap-1 font-light text-sm mt-4'><ShieldCheck size={16} strokeWidth={1.5} /><p>By logging in, you agree to the <Link href={"#"} className='font-bold'>Terms of Service</Link> and <Link href={"#"} className='font-bold'>Privacy Policy</Link></p></div>
            </form>
        </AuthLayout>
    );
}

export default Login;
