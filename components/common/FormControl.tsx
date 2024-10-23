"use client";
import React, { useState } from 'react';
import {
    FieldValues,
    Path,
    RegisterOptions,
    UseFormRegister,
    FieldError,
    UseFormSetValue
} from 'react-hook-form';
import { Eye, EyeOff } from 'lucide-react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../ui/select';

type FormControlElement = 'input' | 'select' | 'textarea';
type InputProps = React.ComponentPropsWithoutRef<'input'>;
type SelectProps<T = any> = {
    options: T[];
    getOptionValue: (item: T) => string;
    getOptionLabel: (item: T) => string;
    placeholder?: string;
    value?: string;
} & Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref">;

type TextAreaProps = React.ComponentPropsWithoutRef<'textarea'>;
export type Register = UseFormRegister<FieldValues>;

type ControlProps = (
    | ({ as: 'input' } & InputProps)
    | ({ as: 'select' } & SelectProps)
    | ({ as: 'textarea' } & TextAreaProps)
) & {
    icon?: React.ReactNode;
    inputStyle?: boolean;
    onContainerFocus?: React.FocusEventHandler<HTMLDivElement>;
    containerClass?: string;
    labelText?: string;
    radius?: string;
    error?: string | FieldError;
    register?: Register;
    registerOptions?: RegisterOptions<FieldValues, Path<FieldValues>>;
    setValue?: UseFormSetValue<FieldValues>; // Only needed for 'select'
};

function isSelect<T>(as: FormControlElement, props: unknown): props is SelectProps<T> {
    return as === 'select';
}

function isInput(as: FormControlElement, props: unknown): props is InputProps {
    return as === 'input';
}

export default function FormControl<T>({
    as,
    icon,
    error,
    radius,
    labelText,
    inputStyle,
    containerClass,
    registerOptions,
    onContainerFocus,
    register = (() => ({})) as unknown as Register,
    setValue,
    ...props
}: ControlProps & { getOptionValue?: (item: T) => string; getOptionLabel?: (item: T) => string; }) {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    let content;
    const notice = props.required ? '*' : '';

    if (isSelect(as, props)) {
        const { options, placeholder, className, getOptionValue, getOptionLabel } = props as SelectProps<T>;

        content = (
            <Select onValueChange={(val) => setValue?.(props.name as Path<FieldValues>, val)}>
                <SelectTrigger className={className}>
                    <SelectValue placeholder={placeholder || 'Select...'} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={getOptionValue!(option)} value={getOptionValue!(option)}>
                            {getOptionLabel!(option)}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        );
    } else if (isInput(as, props)) {
        const inputType = props.type === 'password' && showPassword ? 'text' : props.type;

        content = (
            <div className="relative">
                <input
                    {...props}
                    type={inputType}
                    {...register(props.name as Path<Register>, {
                        required: props.required && 'This field is required',
                        ...registerOptions,
                    })}
                    className={`${error ? 'border-red-600' : 'border-[#CBD5E1]'} border rounded-md h-12 outline-none px-4 text-neutral-dark-2 w-full pr-10 font-light`}
                />
                {props.type === 'password' && (
                    <span
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                    >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </span>
                )}
            </div>
        );
    } else {
        content = (
            <textarea
                {...props}
                {...register(props.name as Path<Register>, {
                    required: props.required && 'This field is required',
                    ...registerOptions,
                })}
                className={`border rounded-md p-2 outline-none ${error ? 'border-red-600' : 'border-[#CBD5E1]'} w-full`}
            />
        );
    }

    return (
        <div onFocus={onContainerFocus} className={`flex flex-col gap-1 ${containerClass}`}>
            {labelText && (
                <div className="w-full flex justify-between">
                    <label htmlFor={props.name}>
                        {labelText}
                        {notice}
                    </label>
                </div>
            )}
            {content}
            {error && (
                <span className="text-red-600 text-xs">
                    {typeof error === 'string' ? error : error?.message}
                </span>
            )}
        </div>
    );
}

