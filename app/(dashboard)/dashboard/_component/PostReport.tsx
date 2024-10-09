import FormControl from '@/components/common/FormControl';
import { Button } from '@/components/ui/button';
import React from 'react';
import {
  FieldValues,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

interface PostProps {
  isValid: boolean;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues, undefined>;
  // setFormStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  // setFormData: React.Dispatch<React.SetStateAction<FieldValues[]>>;
}

export default function PostReport({ props }: { props: PostProps }) {
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
  // const register = props.register;

  return (
    <form onSubmit={props.handleSubmit(onSubmit, onError)}
      className='flex flex-col gap-5'
    >
      <FormControl
        as="input"
        type="text"
        name="validVotes"
        register={props.register}
        placeholder="Make a post"
      />
      <Button
        type="submit"
        className="rounded-md max-w-36 mx-auto"
        >
          Submit
        </Button>
    </form>
  );
}
