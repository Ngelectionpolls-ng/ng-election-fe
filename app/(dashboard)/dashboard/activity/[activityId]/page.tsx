'use client';

import Svg from '@/components/common/Svg';
import TimeStamp from '@/components/common/TimeStamp';
import DashboardLayout from '@/components/dashboard/DashboardLayout';
import { Button } from '@/components/ui/button';
import CollapsibleComponent from '@/components/ui/collapsible';
import { DownloadIcon, ShareIcon } from '@/public/assets/icons';
import { dummyNewsArr } from '@/utils/data/DummyObjects';
import { dateHandler } from '@/utils/functions/FunctionUtils';
import { MoveLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

type ActivityPage = {
  params: { activityId: string };
};

export default function Page({ params }: ActivityPage) {
  const { activityId } = params;
  const activity = dummyNewsArr.find(
    (item) => item.id === parseInt(activityId),
  );
  return (
    <section className="grid gap-10 p-4">
      <Link href={`/dashboard`} className="flex flex-col p-1 w-14">
        <MoveLeft size={32} />
        Back
      </Link>
      <h3>Your Activities</h3>
      <TimeStamp time={dateHandler(activity?.createdAt)} />
      <Image
        className="w-full max-w-[64rem]"
        src={activity?.src ?? ''}
        alt="activity"
      />
      <div className="flex flex-col gap-3">
        <h3>Caption</h3> <hr />
        <span>{activity?.title}</span>
      </div>
      <div className="flex gap-7 flex-col sm:flex-row">
        <Button
          size={'lg'}
          variant={'download'}
          className="gap-2 flex justify-center"
        >
          Download Image
          <Svg SvgIcon={DownloadIcon} />
        </Button>
        <Button size={'lg'} variant={'default'} className="gap-2">
          Share Post
          <Svg SvgIcon={ShareIcon} />
        </Button>
      </div>
    </section>
  );
}
