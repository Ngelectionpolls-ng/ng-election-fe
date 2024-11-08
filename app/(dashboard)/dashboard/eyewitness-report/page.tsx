import React from 'react';
import Activities from '../_component/Activities';
import Activity from '@/components/common/Activity';
import { dummyNewsArr } from '@/utils/data/DummyObjects';
import FormControl from '@/components/common/FormControl';

function EyewitnessReport() {
  return (
    <section className="grid gap-4 p-4">
      {/* Eye Report */}
      <div className='flex flex-col gap-1 sm:flex-row sm:justify-between items-center'>
        <h1 className="">Latest Updates from eyeWitness</h1>
        <div className="flex gap-4">
          <FormControl
            as="select"
            className="max-w-[200px]"
            placeholder="Select election type"
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
            className="max-w-[200px]"
            placeholder="Select election year"
            options={[{ value: '1', label: '2014' }]}
            // label="Select State"
          />
        </div>
      </div>
      {dummyNewsArr.map((news) => (
        <Activity id={news.id} key={news.id} info={news} />
      ))}
    </section>
  );
}

export default EyewitnessReport;
