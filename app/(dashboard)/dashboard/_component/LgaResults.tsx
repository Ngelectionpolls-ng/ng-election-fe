'use client';
import React from 'react';
import ElectionInfo from './ElectionInfo';
import { CandidateInfo, ElectionProps } from './CandidateInfo';
import Status from './status';
import { pullingUnitData } from '@/utils/data/DummyObjects';
import Link from 'next/link';

type LgaResultProps = {
  issues?: string;
  arr: ElectionProps[] | undefined;
  link?: string;
  hover?: boolean;
};

export default function LgaResults({hover, arr, issues, link }: LgaResultProps) {
  return (
    <Link className={`p-4 flex flex-col bg-white shadow-md w-full rounded-md gap-3 border 
      ${hover && 'absolute z-10'}
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
        <div>
          <h2 className="font-bold">Issues Reported in this polling unit</h2>
          <p>{issues}</p>
        </div>
      )}
    </Link>
  );
}
// election-result/stateID/lgaID/wardID/pollingUnitID
