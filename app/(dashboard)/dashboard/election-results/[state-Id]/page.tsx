'use client';
import React from 'react';
import LgaResults from '../../_component/LgaResults';
import { newsReportImg } from '@/public/assets/images/home';

type Props = {};

export default function StateId({}: Props) {
  return (
    <section className="grid gap-4 p-4">
      <div className="flex justify-between flex-wrap">
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