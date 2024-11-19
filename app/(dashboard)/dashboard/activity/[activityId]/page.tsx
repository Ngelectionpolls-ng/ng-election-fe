'use client';

import Svg from '@/components/common/Svg';
import TimeStamp from '@/components/common/TimeStamp';
import { Button } from '@/components/ui/button';
import CollapsibleComponent from '@/components/ui/collapsible';
import { DownloadIcon, ShareIcon } from '@/public/assets/icons';
import { dummyNewsArr } from '@/utils/data/DummyObjects';
import { dateHandler } from '@/utils/functions/FunctionUtils';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import EyeWitnessImpressions from '../../_component/EyeWitnessImpressions';
import { useState } from 'react';
import { Clock5 } from 'lucide-react';
import { CircleCheck } from 'lucide-react';

type ActivityPage = {
  params: { activityId: string };
};

export default function Page({ params }: ActivityPage) {
  const { activityId } = params;
  const activity = dummyNewsArr.find(
    (item) => item.id === parseInt(activityId),
  );
  const router = useRouter();
  const data = {
    createdAt: 'string',
    impressions: 49,
    likes: 2,
  };

  const [dashboard, setDashboard] = useState<
    'subscriber' | 'eyewitness' | 'pullingAgent' | null
  >('subscriber');

  return (
    <section className="grid gap-5 p-4">
      <div onClick={() => router.back()} className="flex flex-col p-1 w-14">
        <MoveLeft size={32} />
        Back
      </div>
      {dashboard === 'pullingAgent' && (
        <div>
          <h3>Your Activities</h3>
          <p>{activity?.title}</p>
        </div>
      )}
      {dashboard === 'subscriber' && <h2>hasTags</h2>}
      <Image
        className="w-full rounded-lg max-w-[64rem]"
        src={activity?.src ?? ''}
        alt="activity"
      />
      <div className="flex flex-col bg-slate-100 shadow-md rounded-md gap-5 p-3">
        <span>Pulling unit, Ward, Local govt, State</span>
        {dashboard === 'subscriber' && <EyeWitnessImpressions props={data} />}
        {dashboard === 'pullingAgent' && <div>
          <div>
            <Clock5 className="h-4 w-4" />{' '}
            <span>{dateHandler('hfhfhf')}</span>
          </div>
          <div>
          <CircleCheck />
          <span>status</span>
          </div>
        </div>}
      </div>
    </section>
  );
}
