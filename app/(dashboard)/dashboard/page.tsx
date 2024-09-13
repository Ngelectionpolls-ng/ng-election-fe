"use client";

import { dummyNewsArr } from '@/utils/data/DummyObjects';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import Image, { StaticImageData } from 'next/image';
import ghostImg from '@/public/assets/images/ghost.png';
import CollapsibleComponent from '@/components/ui/collapsible';
import { cameraIcon, trendIcon } from '@/public/assets/icons';
import Activities from './_component/Activities';

  interface NewsItem {
    id: number;
    src: StaticImageData;
    poolingUnit: string;
    localGovt: string;
    state: string;
    title: string;
    status: string;
    createdAt: string;
  }

function Page() {
  return (
    <DashboardLayout>
      <section className="grid gap-10 p-4">
        <CollapsibleComponent header="Capture Results">
          <span className="border-[3px] w-max rounded-md border-gray-400 text-lg p-3">
            LGA
          </span>
          <div>
            <h5>Ward</h5>
            <span>IGUEGBEN - EKEKHEN/IDUMU/OGO/EGBIKE</span>
          </div>
          <div>
            <h5>Pooling Unit</h5>
            <span>IGUEGBEN - EKEKHEN/IDUMU/OGO/EGBIKE</span>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col justify-between p-4 w-full max-w-[18rem] h-[9rem] rounded-xl bg-current">
              <Image src={trendIcon} alt="" />
              <span className="text-accent">Input Result</span>
            </div>
            <div className="flex bg-[#A5E2ACCC] flex-col justify-between p-4 w-full max-w-[18rem] h-[9rem] rounded-xl border border-dashed border-green-700">
              <Image src={cameraIcon} alt="" />
              <span>Capture</span>
            </div>
          </div>
        </CollapsibleComponent>
        <Activities arr={dummyNewsArr} />
      </section>
    </DashboardLayout>
  );
}

export default Page;
