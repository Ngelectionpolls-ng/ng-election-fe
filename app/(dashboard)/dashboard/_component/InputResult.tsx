import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
// import type { InputResult } from '@/types';
import { partyArr } from '@/utils/data/DummyObjects';
import React, { useState } from 'react';
import {
  FieldValues,
  useForm,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface InputResultProps {
  isValid: boolean;
  register: UseFormRegister<FieldValues>;
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

  const [party, setParty] = useState<string>('');

  // Form submission handler
  const onSubmit = (data: FieldValues) => {
    props.setFormStep(2);
    props.setFormData([data]);
    console.log('Form submitted successfully:', data, party);
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
          <FormControl
            as="input"
            type="number"
            name="registeredVoters"
            register={props.register}
            placeholder="No of Registered Voters"
          />
          <FormControl
            as="input"
            type="number"
            name="accreditedVoters"
            register={props.register}
            placeholder="No of Accredited Voters"
          />
          <FormControl
            as="input"
            type="number"
            name="rejectedVotes"
            register={props.register}
            placeholder="No of Rejected Votes"
          />
          <FormControl
            as="input"
            type="number"
            name="spoiledVotes"
            register={props.register}
            placeholder="No of Spoiled Votes"
          />
          <FormControl
            as="input"
            type="number"
            name="validVotes"
            register={props.register}
            placeholder="No of Valid Votes"
          />
          <FormControl
            as="input"
            type="number"
            name="unusedBallotPapers"
            register={props.register}
            placeholder="No of Unused Ballot Papers"
          />
          <FormControl
              as="select"
              options={partyArr}
              className=""
              value={party ? party : ''}
              // {...register('politicalParty', { required: 'politicalParty is required' })}
              name="politicalParty"
              registerOptions={{onChange: (e) => setParty(e.target.value)}}
              // labelText='Political Party'
              // value={}
              register={props.register}
              placeholder="Political Party"
            />
          <FormControl
            as="input"
            type="number"
            name="votesAllocated"
            register={props.register}
            placeholder="No of Unused Ballot Papers"
          />
        </div>
        <Button
          // disabled={props.isValid}
          className="rounded-md mx-auto w-[14rem]"
        >
          Next
        </Button>
      </div>
    </form>
  );
}
