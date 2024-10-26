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

type LgaResultProps = {
  issues?: string;
  arr: ElectionProps[] | undefined;
  link?: string;
  className?: string;
} & React.HTMLProps<HTMLAnchorElement>;

export default function LgaResults({ arr, issues, link, className, ...props }: LgaResultProps) {
  return (
    <Link {...props} className={`p-4 flex flex-col bg-white shadow-md rounded-md gap-3 border 
      ${className}
      `}
      href={link || '.'}
    >
      {!issues && (
        <div className="flex justify-between">
          <h2 className="font-bold">LGA</h2>
          <div className="flex gap-1 flex-col sm:gap-10 sm:flex-row">
            <Status stat={true} text={'voting status'} />
            <Status stat={false} text={'election status'} />
          </div>
        </div>
      )}
      <ElectionInfo props={pullingUnitData[0].electionInfo} />
      <div className="grid gap-4 sm:grid-cols-3">
        {arr?.map((item, id) => (
          <CandidateInfo
            key={id}
            className="border border-green-200"
            props={item}
          />
        ))}
      </div>
      {issues && (
        <div className='flex flex-col gap-4'>
          <h2 className="font-bold">Issues Reported in this polling unit</h2>
          <p>{issues}</p>
          <div className="flex flex-wrap gap-4">
        <div className="flex gap-2">
          <Clock5 /> <span>{dateHandler('2023-08-17T18:57:48.921Z')}</span>
        </div>
        <div className="flex gap-2">
          <ChartNoAxesColumn /> <span>{67}</span>
        </div>
        <div>
          <Heart />
        </div>
        <div>
          <Share2 />
        </div>
      </div>
        </div>
      )}
    </Link>
  );
}
// election-result/stateID/lgaID/wardID/pollingUnitID
