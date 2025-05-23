'use client';
import React, { useEffect } from 'react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressProps {
  percent: number;
  setPercent?: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressDemo = ({ props, className }: { props?: ProgressProps, className?: string; }) => {
  // Destructure the specific properties from props
  const { percent, setPercent } = props || {};

  useEffect(() => {
    const timer = setTimeout(() => {
      if (setPercent) {
        setPercent(6);
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [percent, setPercent]); // Include only the necessary dependencies

  return (
    <Progress.Root
      className={`bg-slate-600 relative overflow-hidden rounded-full w-full h-4 sm:h-7 translate-z-[0]`}
      value={percent}
    >
      <Progress.Indicator
        className={`${className} w-full h-full transition-all relative`}
        style={{ transform: `translateX(-${100 - (percent ?? 0)}%)` }}
      >
        <span className='absolute right-2 top-[4px] sm:top-2 text-[10px] text-white'>{percent}%</span>
      </Progress.Indicator>
    </Progress.Root>
  );
};

export default ProgressDemo;
