'use Client';

import Activity from '@/components/common/Activity';
import CollapsibleComponent from '@/components/ui/collapsible';
import Image, { StaticImageData } from 'next/image';
import { useState, useEffect, useMemo } from 'react';

type NewsItem = {
  id: number;
  src: StaticImageData;
  poolingUnit: string;
  localGovt: string;
  state: string;
  title: string;
  status: string;
  createdAt: string;
};

export default function Activities({ arr }: { arr: NewsItem[] }) {
  const [_, setCurrentTime] = useState(new Date());

  // Update the time periodically (optional, for real-time updates)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date()); // Update current time every minute
    }, 60000); // Update every 60 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <CollapsibleComponent header={'Your Activities'}>
      {arr.map((newsItem: NewsItem) => (
        <Activity id={newsItem.id} key={newsItem.id} info={newsItem} />
      ))}
    </CollapsibleComponent>
  );
}
