"use client";

import { dummyNewsArr } from '@/utils/data/DummyObjects';
import CollapsibleComponent from '@/components/ui/collapsible';
import { CameraIcon, TrendIcon } from '@/public/assets/icons';
import Activities from './_component/Activities';
import Modal from '@/components/common/Modal';
import { useState } from 'react';
import Svg from '@/components/common/Svg';

function Page() {
  const [open, setOpen] = useState(false);
  return (
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
          <div className="flex gap-4" onClick={() => setOpen(true)}>
            <div className="flex flex-col justify-between p-4 w-full max-w-[18rem] h-[9rem] rounded-xl bg-current">
              <Svg width={'3rem'} height={'3rem'} SvgIcon={TrendIcon} />
              <span className="text-accent md:text-2xl font-bold">Input Result</span>
            </div>
            <div className="flex bg-[#A5E2ACCC] flex-col justify-between p-4 w-full max-w-[18rem] h-[9rem] rounded-xl border border-dashed border-green-700">
              <Svg width={'3rem'} height={'3rem'} SvgIcon={CameraIcon} />
              <span className='md:text-2xl font-bold'>Capture</span>
            </div>
          </div>
        </CollapsibleComponent>
        <Modal isVisible={open} closeModal={() => setOpen(false)} className='min-w-28 text-white bg-black'>
          <h2>Result (EC8A)</h2>
          <h2>Election material</h2>
          <h2>Eyewitness Report</h2>
        </Modal>
        <Activities arr={dummyNewsArr} />
      </section>
  );
}

export default Page;
