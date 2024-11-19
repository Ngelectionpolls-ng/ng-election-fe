'use client';
import React from 'react';
import LgaResults from '../../_component/LgaResults';
import { newsReportImg } from '@/public/assets/images/home';
import FormControl from '@/components/common/FormControl';

type Props = {};

export default function StateId({}: Props) {
  return (
    <section className="grid gap-4 p-4">
      <div className="flex justify-between flex-wrap">
      <FormControl
        as="select"
        className='max-w-[200px]'
        placeholder='Select election type'
        options={[
          { value: '1', label: 'presidential' },
          { value: '2', label: 'Gubernatorial' },
          { value: '3', label: 'Federal House of Assembly' },
          { value: '4', label: 'State House of Assembly' },
          { value: '5', label: 'Local government' },
          { value: '6', label: 'Off-cycle elections' },

        ]}
        // label="Select State"
      />
      <FormControl
        as="select"
        className='max-w-[200px]'
        placeholder='Select election year'
        options={[
          { value: '1', label: '2014' },
        ]}
        // label="Select State"
      />
      </div>
      <div className="flex justify-between px-4 flex-wrap">
        <h2>LGA votes and top emerged candidates</h2>
        <span className="text-green-600">
          Total of 19 local government areas
        </span>
      </div>
      <LgaResults
        link={`/dashboard/election-results/akwa-ibom/uyo`}
        arr={[
          {
            contestantName: 'John Doe',
            party: 'PDP',
            votesNo: 1000,
            image: newsReportImg,
          },
          {
            contestantName: 'John Doe',
            party: 'PDP',
            votesNo: 1000,
            image: newsReportImg,
          },
          {
            contestantName: 'John Doe',
            party: 'PDP',
            votesNo: 1000,
            image: newsReportImg,
          },
        ]}
      />
    </section>
  );
}
// election-result/stateID/lgaID/wardID/pollingUnitID