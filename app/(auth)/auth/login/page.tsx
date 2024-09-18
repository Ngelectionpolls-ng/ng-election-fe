"use client";
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import AuthLayout from '../_component/authLayout';

function Login() {
    const { handleSubmit, control, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const headerTitle = 'Login'
    const headerSubTitle = 'Welcome back, you’ve been missed!'

    const getErrorMessage = (error: any): string | undefined => {
        if (!error) return undefined;
        if (typeof error === 'string') return error;
        if (error.message) return error.message;
        return undefined;
    };

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(data => console.log(data))} className='w-full'>
                <div className='flex flex-col gap-6 mt-6 w-full'>
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

                    {/* Password input */}
                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters" } }}
                        render={({ field }) => (
                            <FormControl
                                as='input'
                                labelText='Password'
                                placeholder='Enter your password'
                                type='password'
                                {...field}
                                error={getErrorMessage(errors.password)}
                            />
                        )}
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
