'use client';
import React from 'react';
import TableComponent from '../../../../_component/TableComponent';
import { pullingUnitData } from '@/utils/data/DummyObjects';
import { MoveLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PullingUnitId() {
  const router = useRouter();
  return (
    <section className="grid gap-4 p-4">
      <div className="flex ml-3 flex-col">
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => router.back()}
        >
          <MoveLeft />
          Go Back
        </div>
        <h1 className="text-lg font-bold">
          Polling units under URHONIGBE NORTH
        </h1>
        <span>There are 21 polling units in this Ward</span>
      </div>
      <div className="flex px-3 justify-between flex-wrap mb-5">
        <span>Election type</span>
        <span className="text-green-600">
          year
        </span>
      </div>
      <TableComponent
        arr={pullingUnitData[0].candidates}
        electionInfo={pullingUnitData[0].electionInfo}
        issues={pullingUnitData[0].issues}
      />
    </section>
  );
}
