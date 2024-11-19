'use client';

import ProgressDemo from '@/components/ui/Progress';
import { formatWithCommas } from '@/utils/functions/FunctionUtils';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

export type ElectionProps = {
  contestantName: string;
  party: string;
  votesNo: number;
  image: StaticImageData;
  progress?: {
    percent: number;
    className?: string;
    setPercent?: React.Dispatch<React.SetStateAction<number>>;
  };
};

export const CandidateInfo = ({ props, className, classStyle }: { props: ElectionProps, className?: string, classStyle?: string }) => {
  const [mediaQuery, setMediaQuery] = useState<boolean>(false);

  useEffect(() => {
    const handleMediaQuery = () => {
      if (window.innerWidth < 768) {
        setMediaQuery(true);
      } else {
        setMediaQuery(false);
      }
    };
    handleMediaQuery();
    window.addEventListener('resize', handleMediaQuery);
    return () => window.removeEventListener('resize', handleMediaQuery);
  }, [mediaQuery]);

  return (
    <div
      className={`flex gap-4 items-center relative
      ${!props.progress ? 'p-4 rounded-md' : ''}
        ${props.progress && mediaQuery ? 'h-20 justify-between' : ''}
        ${className}
    `}
    >
      <div className="flex gap-2  items-center">
        <div
          className={`rounded-full relative overflow-hidden w-14 h-14
        `}
        >
          <Image
            src={props.image}
            alt=""
            height={500}
            width={500}
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
        <div className="flex flex-col min-w-[3rem] gap-1">
          <span>{props.contestantName}</span>
          <span>{props.party}</span>
          {!props.progress && (
            <span className="font-bold text-primary text-[12px]">{formatWithCommas(props.votesNo)} votes</span>
          )}
        </div>
      </div>
      {props.progress && (
        <div className={`w-full ${mediaQuery ? 'absolute bottom-[-0.8rem]' : ''}`}>
          <ProgressDemo
            className={classStyle}
            props={props.progress}
          />
        </div>
      )}
      {props.progress && (
        <span className={`font-bold ${mediaQuery ? '' : 'w-[12rem]'}`}>{formatWithCommas(props.votesNo)} votes</span>
      )}
    </div>
  );
};
