"use client";
import * as React from "react";
import { useRef, forwardRef } from "react";

// Utility function for combining class names
const cn = (...classes: (string | undefined)[]) => classes.filter(Boolean).join(' ');

// Main InputCode component
const InputCode = forwardRef<
    HTMLDivElement,
    { length: number; onChange: (code: string) => void; containerClassName?: string } & React.ComponentPropsWithoutRef<'div'>
>(({ length, onChange, className, containerClassName = "", ...props }, ref) => {
    const [code, setCode] = React.useState<string[]>(Array(length).fill(""));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    // Handle input change
    const handleChange = (index: number, value: string) => {
        const newCode = [...code];
        newCode[index] = value ? value.slice(-1) : "";
        setCode(newCode);

        // Concatenate the array into a single string before passing it to the parent
        onChange(newCode.join(""));

        // Automatically move to the next input if a value is entered and not at the last index
        if (value && index < length - 1) {
            inputRefs.current[index + 1]?.focus();
        }
    };

    // Handle backspace and focus management
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Backspace" && code[index] === "") {
            if (index > 0) {
                inputRefs.current[index - 1]?.focus(); // Move focus to the previous input
            }
        }
    };

    return (
        <div
            ref={ref}
            className={cn("flex items-center justify-between gap-4", containerClassName)}
            {...props}
        >
            {Array.from({ length }).map((_, i) => (
                <input
                    key={i}
                    ref={(el) => {
                        inputRefs.current[i] = el;
                    }}
                    type="text"
                    value={code[i]}
                    onChange={(e) => handleChange(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    className="w-10 h-10 text-center bg-transparent border border-gray-400 rounded-md text-xl focus:border-[1.5px] focus:border-black outline-none"
                    maxLength={1}
                    inputMode="text"
                    autoFocus={i === 0}
                />
            ))}
        </div>
    );
});

InputCode.displayName = "InputCode";

export { InputCode };
