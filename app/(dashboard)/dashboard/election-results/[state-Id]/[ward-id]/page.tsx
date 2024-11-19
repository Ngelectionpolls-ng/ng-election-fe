'use client';
import React from 'react';
import TableComponent from '../../../_component/TableComponent';
import { useRouter } from 'next/navigation';
import { StepBack } from 'lucide-react';
import { MoveLeft } from 'lucide-react';

type Props = {};

export default function WardId({}: Props) {
  const router = useRouter();
  return (
    <section className="grid gap-4 p-4">
      <div className='flex gap-2 cursor-pointer'
        onClick={() => router.back()}
      >
        <MoveLeft />
        Go Back
      </div>
      <div className="flex ml-3 flex-col">
        <h1 className="text-lg font-bold">
          Wards under Orhinmwon Local government area
        </h1>
        <span>There are 12 wards in this LGA</span>
      </div>
      <div className="flex justify-between px-3 flex-wrap mb-5">
        <span>Election type</span>
        <span className="text-green-600">
          year
        </span>
      </div>
      <TableComponent onClick={() => router.push('uyo/pullingUnitID')} />
    </section>
  );
}
