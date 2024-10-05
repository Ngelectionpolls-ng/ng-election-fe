import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import { partyArr, resultData } from '@/utils/data/DummyObjects';
import { register } from 'module';
import React, { useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import Image from 'next/image';
import newsImg from '@/public/assets/images/bg-2.png';

interface ResultProps {
  data: {
    contestantName: string;
    partyName: string;
    votesNo: number;
  }[]
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

export default function InputResult({ props }: { props: ResultProps }) {
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
      {formStep ? (
        <div className="flex flex-col gap-10 py-5">
          <Button
            variant={'ghost'}
            onClick={() => setFormStep(false)}
            className="bg-white absolute top-12 right-4 text-black max-w-max rounded-md"
          >
            Add Result
          </Button>
          <h2 className="text-xl text-center">Result Table</h2>
          <div className="bg-white p-1 flex flex-col gap-10 text-black rounded-md">
            <span className="">21st september 2024</span>
            <div className="flex justify-between">
              <span>Leading Candidates</span>
              <span>Accumulated Votes</span>
            </div>
            {props.data.map((res, id) => (
              <div key={id} className='flex gap-1 relative border'>
                <div className='flex gap-2 items-center border'>
                  <div className='rounded-full border-[3px] relative overflow-hidden border-slate-900 w-16 h-16'>
                  {/* <div className='absolute  rounded-full border-[3px] border-slate-900 w-16 h-16' /> */}
                    <Image src={newsImg} alt="" height={3050} width={3050} 
                    className='absolute left-0 top-0 h-full w-full'/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>{res.contestantName || 1}</span>
                    <span>{res.partyName || 1}</span>
                  </div>
                </div>
                <div className="w-full"></div>
                <div>
                  <span>{res.votesNo || 1}</span>
                </div>
              </div>
            ))}
          </div>
          <Button onClick={() => ''} className="rounded-md">
            Submit
          </Button>
        </div>
      ) : (
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
              // type="number"
              options={partyArr}
              className="relative z-20"
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
          <Button onClick={() => setFormStep(true)} className="rounded-md">
            Next
          </Button>
        </div>
      )}
    </form>
  );
}
