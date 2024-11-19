'use client';
import React from 'react';
import ElectionInfo from './ElectionInfo';
import { CandidateInfo, ElectionProps } from './CandidateInfo';
import Status from './status';
import { pullingUnitData } from '@/utils/data/DummyObjects';
import Link from 'next/link';
import { dateHandler } from '@/utils/functions/FunctionUtils';
import { Clock5 } from 'lucide-react';
import { ChartNoAxesColumn } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Share2 } from 'lucide-react';
import EyeWitnessImpressions from './EyeWitnessImpressions';

type LgaResultProps = {
  issues?: string;
  arr: ElectionProps[] | undefined;
  link?: string;
  className?: string;
} & React.HTMLProps<HTMLAnchorElement>;

export default function LgaResults({
  arr,
  issues,
  link,
  className,
  ...props
}: LgaResultProps) {
  const data = {
    createdAt: '2023-08-17T18:57:48.921Z',
    impressions: 80,
    likes: 34,
  };
  
  return (
    <Link
      {...props}
      className={`p-4 flex flex-col bg-white shadow-md rounded-md gap-10 border 
      ${className}
      `}
      href={link || '.'}
    >
      <div className="flex justify-between">
        <h2 className="font-bold">LGA</h2>
        <div className="flex gap-1 flex-col sm:gap-10 sm:flex-row">
          <Status stat={true} text={'voting status'} />
          <Status stat={false} text={'election status'} />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {arr?.map((item, id) => (
          <CandidateInfo
            key={id}
            className="border border-green-200"
            props={item}
          />
        ))}
      </div>
      <ElectionInfo props={pullingUnitData[0].electionInfo} />
      {issues && (
        <div className="flex flex-col gap-4">
          <h2 className="font-bold">Issues Reported in this polling unit</h2>
          <p>{issues}</p>
          <EyeWitnessImpressions props={data} />
        </div>
      )}
    </Link>
  );
}
// election-result/stateID/lgaID/wardID/pollingUnitID
