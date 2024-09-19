"use client";
import AuthLayout from '../_component/authLayout';
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import GoogleAuthSection from './_GoogleAuthSection';

function Page() {
    const headerTitle = 'Sign up';
    const headerSubTitle = 'Create an account to get started with us.';

    // Initialize useForm hook
    const { control, handleSubmit, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    // Helper function to retrieve error messages
    const getErrorMessage = (error: any): string | undefined => {
        if (!error) return undefined;
        if (typeof error === 'string') return error;
        if (error.message) return error.message;
        return undefined;
    };

    // Form submission handler
    const onSubmit = (data: FieldValues) => {
        console.log("Form submitted successfully:", data);
    };

    // Log any errors during the form validation
    const onError = (errors: any) => {
        console.log("Form validation failed with errors:", errors);
    };

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='auth-bg-img.png'>
            <div className="mt-4">
                <Tabs defaultValue="eyewitness" className="w-full">
                    <TabsList>
                        <TabsTrigger value="eyewitness">Eyewitness</TabsTrigger>
                        <TabsTrigger value="pollingAgent">Polling Unit Agent</TabsTrigger>
                    </TabsList>
                    <TabsContent value="eyewitness">
                        {/* Form for Eyewitness */}
                        <GoogleAuthSection />
                        <form onSubmit={handleSubmit(onSubmit, onError)}>
                            <div className='flex flex-col gap-6 mt-6'>
                                {/* Name input */}
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "Name is required" }}
                                    render={({ field }) => (
                                        <FormControl
                                            as='input'
                                            labelText='Name'
                                            placeholder='Enter full name'
                                            {...field}
                                            error={getErrorMessage(errors.name)}
                                        />
                                    )}
                                />
                                {/* Email input */}
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
                                {/* Submit button */}
                                <Button type='submit'>Create Account</Button>
                            </div>
                            <div className='flex justify-center text-sm mt-4 font-light'>
                                <p>Have an account? {" "}</p>
                                <Link href={"/auth/login"} className='font-bold hover:opacity-80 ml-1'>Login</Link>
                            </div>
                            <div className='flex items-center gap-1 font-light text-sm mt-4'>
                                <ShieldCheck size={16} strokeWidth={1.5} />
                                <p>By logging in, you agree to the
                                    <Link href={"#"} className='font-bold'> Terms of Service </Link>
                                    and
                                    <Link href={"#"} className='font-bold'> Privacy Policy</Link>
                                </p>
                            </div>
                        </form>
                    </TabsContent>
                    <TabsContent value="pollingAgent">
                        {/* Form for Polling Agent */}
                        <GoogleAuthSection />
                        <form onSubmit={handleSubmit(onSubmit, onError)}>
                            <div className='flex flex-col gap-6 mt-6'>
                                {/* Name input */}
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{ required: "Name is required" }}
                                    render={({ field }) => (
                                        <FormControl
                                            as='input'
                                            labelText='Name'
                                            placeholder='Enter full name'
                                            {...field}
                                            error={getErrorMessage(errors.name)}
                                        />
                                    )}
                                />
                                {/* Email input */}
                                <Controller
                                    name="email"
                                    control={control}
                                    rules={{ required: "Email is required" }}
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
                                {/* Submit button */}
                                <Button type='submit'>Create Account</Button>
                            </div>
                            <div className='flex justify-center text-sm mt-4 font-light'>
                                <p>Have an account? {" "}</p>
                                <Link href={"/auth/login"} className='font-bold hover:opacity-80 ml-1'>Login</Link>
                            </div>
                            <div className='flex items-center gap-1 font-light text-sm mt-4'>
                                <ShieldCheck size={16} strokeWidth={1.5} />
                                <p>By logging in, you agree to the
                                    <Link href={"#"} className='font-bold'> Terms of Service </Link>
                                    and
                                    <Link href={"#"} className='font-bold'> Privacy Policy</Link>
                                </p>
                            </div>
                        </form>
                    </TabsContent>
                </Tabs>
            </div>
        </AuthLayout>
    );
}

export default Page;
