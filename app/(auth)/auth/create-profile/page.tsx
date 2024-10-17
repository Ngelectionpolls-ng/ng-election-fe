"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import FormControl from '@/components/common/FormControl';
import AuthLayout from '../_component/authLayout';
import useCreateProfile from '@/hooks/mutations/auth/useCreateProfile';
import { ageOption, occupationOption, sexOption, stateOption } from '@/utils/data/createProfileData';
import { CreateProfilePayload } from '@/services/api/create-profile';

function CreateProfile() {
    const { register, handleSubmit, control, formState: { errors }, setValue } = useForm<FieldValues>({ mode: "onChange" });
    const { mutate } = useCreateProfile()

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

        mutate(payload, {
            onSuccess: (response) => {
                console.log('Profile created successfully:', response);
            },
            onError: (error) => {
                console.error('Error creating profile:', error);
            }
        });
    };



    return (
        <AuthLayout headerTitle={headerTitle} headerSubTitle={headerSubTitle} bgImg='login-bg.png'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col gap-6 mt-6'>
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='State'
                        placeholder="Select state"
                        error={typeof errors.stateId?.message === 'string' ? errors.stateId.message : undefined}
                        {...register('stateId', { required: 'State is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='L.G.A'
                        placeholder="Select L.G.A"
                        error={typeof errors.LGAId?.message === 'string' ? errors.LGAId.message : undefined}
                        {...register('LGAId', { required: 'L.G.A is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='Electoral ward'
                        placeholder="Select Electoral ward"
                        error={typeof errors.wardId?.message === 'string' ? errors.wardId.message : undefined}
                        {...register('wardId', { required: 'Electoral ward is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
                        labelText='Polling unit'
                        placeholder="Select Polling unit"
                        error={typeof errors.pollingUnitId?.message === 'string' ? errors.pollingUnitId.message : undefined}
                        {...register('pollingUnitId', { required: 'Polling unit is required' })}
                        setValue={setValue}
                    />
                    <FormControl
                        as="select"
                        inputStyle
                        options={stateOption}
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
                    <Button type='submit'>Proceed to login</Button>
                </div>
            </form>
        </AuthLayout>
    );
}

export default CreateProfile;
