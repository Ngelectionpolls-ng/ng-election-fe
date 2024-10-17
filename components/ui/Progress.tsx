import React, { useState } from 'react';
import * as Progress from '@radix-ui/react-progress';

interface ProgressProps {
  percent: number;
  setPercent: React.Dispatch<React.SetStateAction<number>>;
}

const ProgressDemo = ({ props, className }: { props?: ProgressProps, className?: string; }) => {

  React.useEffect(() => {
    const timer = setTimeout(() => props?.setPercent(6), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className={`bg-slate-600 relative overflow-hidden rounded-full w-full h-3 translate-z-[0] ${className}`}
      value={props?.percent}
    >
      <Progress.Indicator
        className="bg-sky-600 w-full h-full transition-all relative"
        style={{ transform: `translateX(-${100 - (props?.percent ?? 0)}%)` }}
      >
			<span className='absolute right-2 text-[10px] text-white'>{props?.percent}%</span>
			</Progress.Indicator>
    </Progress.Root>
  );
};

export default ProgressDemo;
