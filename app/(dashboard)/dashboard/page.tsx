'use client';
import { dummyNewsArr } from '@/utils/data/DummyObjects';
import CollapsibleComponent from '@/components/ui/collapsible';
import Activities from './_component/Activities';

export default function Page() {
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
          <h5>Pulling Unit</h5>
          <span>IGUEGBEN - EKEKHEN/IDUMU/OGO/EGBIKE</span>
        </div>
      </CollapsibleComponent>
      <Activities arr={dummyNewsArr} />
    </section>
  );
}
