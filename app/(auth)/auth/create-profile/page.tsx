"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import FormControl from '@/components/common/FormControl';
import useCreateProfile from '@/hooks/mutations/auth/useCreateProfile';
import { ageOption, occupationOption, sexOption, stateOption } from '@/utils/data/createProfileData';
import { CreateProfilePayload } from '@/services/api/create-profile';
import { MoonLoader } from 'react-spinners';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import AuthLayout from '@/app/(auth)/auth/_component/authLayout';
import useFetchStates from '@/hooks/queries/statesData/useFetchStates';
import useFetchLGAs from '@/hooks/queries/statesData/useFetchLGAs';

function CreateProfile() {
    const { register, handleSubmit, control, formState: { errors }, setValue } = useForm<FieldValues>({ mode: "onChange" });
    const router = useRouter();
    const { mutate, isPending } = useCreateProfile();
    const { data: statesData } = useFetchStates();
    const { data: LGAData } = useFetchLGAs();
    console.log('LGAs:', LGAData?.data?.data)

    const headerTitle = 'Electoral agent profile';
    const headerSubTitle = '';

    const onSubmit = (data: FieldValues) => {
        const payload: CreateProfilePayload = {
            accountType: "iwitness",
            stateId: data.stateId,
            LGAId: data.LGAId,
            wardId: data.wardId,
            pollingUnitId: data.pollingUnitId,
            politicalPartyId: data.politicalPartyId,
            ageRange: data.ageRange,
            sex: data.sex,
            occupation: data.occupation,
            phoneNumber: data.phoneNumber
        };
        console.log(payload)

        mutate(payload, {
            onSuccess: (response) => {
                toast.success(response.data.message);
                router.push("/dashboard")
            },
            onError: (error: any) => {
                toast.error(error.response.data.message);
            }
        });
    };

    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6 mt-6'>
                    <FormControl
                        as="select"
                        options={statesData?.data?.data?.states || []}
                        getOptionValue={(item) => item.id.toString()}
                        getOptionLabel={(item) => item.name}
                        labelText="State"
                        placeholder="Select state"
                        error={typeof errors.stateId?.message === 'string' ? errors.stateId.message : undefined}
                        {...register('stateId', { required: 'State is required' })}
                        setValue={setValue}
                    />

                    <FormControl
                        as="select"
                        inputStyle
                        options={statesData?.data?.data?.states || []}
                        getOptionValue={(item) => item.id.toString()}
                        getOptionLabel={(item) => item.name}
                        labelText='L.G.A'
                        placeholder="Select L.G.A"
                        error={typeof errors.LGAId?.message === 'string' ? errors.LGAId.message : undefined}
                        {...register('LGAId', { required: 'L.G.A is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={statesData?.data?.data?.states || []}
                        getOptionValue={(item) => item.id.toString()}
                        getOptionLabel={(item) => item.name}
                        labelText='Electoral ward'
                        placeholder="Select Electoral ward"
                        error={typeof errors.wardId?.message === 'string' ? errors.wardId.message : undefined}
                        {...register('wardId', { required: 'Electoral ward is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={statesData?.data?.data?.states || []}
                        getOptionValue={(item) => item.id.toString()}
                        getOptionLabel={(item) => item.name}
                        labelText='Polling unit'
                        placeholder="Select Polling unit"
                        error={typeof errors.pollingUnitId?.message === 'string' ? errors.pollingUnitId.message : undefined}
                        {...register('pollingUnitId', { required: 'Polling unit is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={statesData?.data?.data?.states || []}
                        getOptionValue={(item) => item.id.toString()}
                        getOptionLabel={(item) => item.name}
                        labelText='Political party'
                        placeholder="Select Political party"
                        error={typeof errors.politicalPartyId?.message === 'string' ? errors.politicalPartyId.message : undefined}
                        {...register('politicalPartyId', { required: 'Political party is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={ageOption}
                        getOptionValue={(item) => item.value}
                        getOptionLabel={(item) => item.label}
                        labelText='Age range'
                        placeholder="Select Age range"
                        error={typeof errors.ageRange?.message === 'string' ? errors.ageRange.message : undefined}
                        {...register('ageRange', { required: 'Age range is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={sexOption}
                        getOptionValue={(item) => item.value}
                        getOptionLabel={(item) => item.label}
                        labelText='Sex'
                        placeholder="Select Sex"
                        error={typeof errors.sex?.message === 'string' ? errors.sex.message : undefined}
                        {...register('sex', { required: 'Sex is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={occupationOption}
                        getOptionValue={(item) => item.value}
                        getOptionLabel={(item) => item.label}
                        labelText='Occupation'
                        placeholder="Select Occupation"
                        error={typeof errors.occupation?.message === 'string' ? errors.occupation.message : undefined}
                        {...register('occupation', { required: 'Occupation is required' })}
                        setValue={setValue}
                    />

                    <Controller
                        name="phoneNumber"
                        control={control}
                        rules={{
                            required: "Phone Number is required",
                            pattern: { value: /^[0-9]*$/, message: 'Only numbers are allowed' },
                            minLength: { value: 11, message: 'Phone Number must be 11 digits' },
                            maxLength: { value: 11, message: 'Phone Number must be 11 digits' }
                        }}
                        render={({ field }) => (
                            <FormControl
                                as='input'
                                labelText='Phone Number'
                                placeholder='Enter your Phone Number'
                                {...field}
                                error={typeof errors.phoneNumber?.message === 'string' ? errors.phoneNumber.message : undefined}
                            />
                        )}
                    />
                    <Button type='submit' disabled={isPending}>
                        {isPending ? (<MoonLoader color='white' size={18} />) : "Continue to dashboard"}
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}

export default CreateProfile;
