import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { partyArr } from '@/utils/data/DummyObjects';
import React from 'react';
import {
  FieldErrors,
  FieldValues,
  Controller,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
  Control,
} from 'react-hook-form';

interface InputResultProps {
  isValid: boolean;
  errors: FieldErrors<FieldValues>;
  control: Control<FieldValues, any>
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  setFormStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  setFormData: React.Dispatch<React.SetStateAction<FieldValues[]>>;
}

export default function InputResult({ props }: { props: InputResultProps }) {
  const getErrorMessage = (error: any): string | undefined => {
    if (!error) return undefined;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return undefined;
  };

  // Form submission handler
  const onSubmit = (data: FieldValues) => {
    if (props.isValid) {
      props.setFormData((prev) => [...prev, data]);
      props.setFormStep(2);
    }
  };

  // Log any errors during the form validation
  const onError = (errors: any) => {
    console.log('Form validation failed with errors:', errors);
  };
  const register = props.register;
  return (
    <form onSubmit={props.handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-2 gap-y-4 gap-x-6">
          <Controller
            name="registeredVoters"
            control={props.control}
            rules={{ required: "'Registered Voters is required" }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="No of Registered Voters"
                error={getErrorMessage(props.errors.registeredVoters)}
              />
            )}
          />
          <Controller
            name="accreditedVoters"
            control={props.control}
            rules={{ required: 'Accredited Voters is required' }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="No of Accredited Voters"
                error={getErrorMessage(props.errors.accreditedVoters)}
              />
            )}
          />
          <Controller
            name="spoiledVotes"
            control={props.control}
            rules={{ required: 'Spoiled Votes is required' }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="No of Spoiled Votes"
                error={getErrorMessage(props.errors.spoiledVotes)}
              />
            )}
          />
          <Controller
            name="validVotes"
            control={props.control}
            rules={{ required: 'Valid Votes is required' }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="No of Valid Votes"
                error={getErrorMessage(props.errors.validVotes)}
              />
            )}
          />
          <Controller
            name="invalidVotes"
            control={props.control}
            rules={{ required: 'Invalid Votes is required' }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="No of Invalid Votes"
                error={getErrorMessage(props.errors.invalidVotes)}
              />
            )}
          />
          <Controller
            name="totalVotes"
            control={props.control}
            rules={{ required: 'Total Votes is required' }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="Total Votes"
                error={getErrorMessage(props.errors.totalVotes)}
              />
            )}
          />
          <Controller
            name="party"
            control={props.control}
            rules={{ required: 'Party is required' }}
            render={({ field }) => (
              <FormControl
                as="select"
                {...field}
                options={partyArr}
                className='h-full text-slate-400'
                placeholder="Select Party"
                setValue={props.setValue}
                error={getErrorMessage(props.errors.party)}
              />
            )}
          />
          <Controller
            name="votesAllocated"
            control={props.control}
            rules={{ required: 'Votes Allocated is required' }}
            render={({ field }) => (
              <FormControl
                as="input"
                type="number"
                {...field}
                placeholder="No of Unused Ballot Papers"
                error={getErrorMessage(props.errors.votesAllocated)}
              />
            )}
          />
        </div>
        <Button
          type="submit"
          disabled={!props.isValid}
          className="rounded-md mx-auto w-[14rem]"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
