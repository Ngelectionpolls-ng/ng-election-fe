"use client";
import AuthLayout from '../_component/authLayout';
import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { FieldValues, useForm } from 'react-hook-form';

function Page() {
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({ mode: "onChange" });

    const headerTitle = 'Electoral agent profile';
    const headerSubTitle = '';

    const stateOption = [
        { value: 'lagos', label: 'Lagos' },
        { value: 'abuja', label: 'Abuja' },
        { value: 'rivers', label: 'Rivers' },
        { value: 'edo', label: 'Edo' }
    ]

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(data => console.log(data))}>
                <div className='flex flex-col gap-6 mt-6'>
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='State'
                        placeholder="Select state"
                        error={typeof errors.fullName?.message === 'string' ? errors.fullName.message : undefined}
                        {...register('state', { required: 'State is required' })}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='L.G.A'
                        placeholder="Select L.G.A"
                        error={typeof errors.fullName?.message === 'string' ? errors.fullName.message : undefined}
                        {...register('lga', { required: 'L.G.A is required' })}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='Electoral ward'
                        placeholder="Select ward"
                        error={typeof errors.fullName?.message === 'string' ? errors.fullName.message : undefined}
                        {...register('lga', { required: 'L.G.A is required' })}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='Polling unit'
                        placeholder="Select polling unit"
                        error={typeof errors.fullName?.message === 'string' ? errors.fullName.message : undefined}
                        {...register('lga', { required: 'L.G.A is required' })}
                    />
                    <FormControl
                        as="select"
                        options={stateOption}
                        labelText='Political party'
                        placeholder="Select political party"
                        error={typeof errors.fullName?.message === 'string' ? errors.fullName.message : undefined}
                        {...register('lga', { required: 'L.G.A is required' })}
                    />
                    <Link href={"/auth/login"}>
                        <Button>Proceed to login</Button>
                    </Link>
                </div>
            </form>
        </AuthLayout>
    );
}

export default Page;
