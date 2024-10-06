import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { partyArr } from '@/utils/data/DummyObjects';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

interface InputResultProps {
  setFormStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

type Inputs = {
  registeredVoters: string;
  accreditedVoters: string;
  rejectedVotes: string;
  spoiledVotes: string;
  validVotes: string;
  unusedBallotPapers: string;
  politicalParty: string;
  votesAllocated: string;
};

export default function InputResult({props}: {props: InputResultProps}) {
  const [formStep, setFormStep] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    register,
  } = useForm<FieldValues>({ mode: 'onChange' });

  const getErrorMessage = (error: any): string | undefined => {
    if (!error) return undefined;
    if (typeof error === 'string') return error;
    if (error.message) return error.message;
    return undefined;
  };

  // Form submission handler
  const onSubmit = (data: FieldValues) => {
    console.log('Form submitted successfully:', data);
  };

  // Log any errors during the form validation
  const onError = (errors: any) => {
    console.log('Form validation failed with errors:', errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <div className="flex flex-col gap-10">
          <h2>Input Result</h2>
          <div className="grid grid-cols-2 gap-y-4 gap-x-6">
            <FormControl
              as="input"
              type="number"
              name="registeredVoters"
              register={register}
              placeholder="No of Registered Voters"
            />
            <FormControl
              as="input"
              type="number"
              name="accreditedVoters"
              register={register}
              placeholder="No of Accredited Voters"
            />
            <FormControl
              as="input"
              type="number"
              name="rejectedVotes"
              register={register}
              placeholder="No of Rejected Votes"
            />
            <FormControl
              as="input"
              type="number"
              name="spoiledVotes"
              register={register}
              placeholder="No of Spoiled Votes"
            />
            <FormControl
              as="input"
              type="number"
              name="validVotes"
              register={register}
              placeholder="No of Valid Votes"
            />
            <FormControl
              as="input"
              type="number"
              name="unusedBallotPapers"
              register={register}
              placeholder="No of Unused Ballot Papers"
            />
            <FormControl
              as="select"
              options={partyArr}
              className="relative z-30"
              name="politicalParty"
              register={register}
              placeholder="Political Party"
            />
            <FormControl
              as="input"
              type="number"
              name="votesAllocated"
              register={register}
              placeholder="No of Unused Ballot Papers"
            />
          </div>
          <Button onClick={() => props.setFormStep(2)} className="rounded-md mx-auto w-[14rem]">
            Next
          </Button>
        </div>
    </form>
  );
}
