'use client';

import Image from 'next/image';
import { dateHandler } from '../../utils/functions/FunctionUtils';
import { NewsDetails } from '@/types';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EyeWitnessImpressions from '@/app/(dashboard)/dashboard/_component/EyeWitnessImpressions';

type NewsProps = {
  info: NewsDetails;
  id: number;
};

export default function Activity({ info, id }: NewsProps) {
  const [mediaWidth, setmediaWidth] = useState<number | undefined>(undefined);
  // const navigate = useNavigate();
  useEffect(() => {
    function handleResize() {
      window.innerWidth <= 768 ? setmediaWidth(window.innerWidth) : undefined;
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const truncateText = (text: string, maxLength?: number) => {
    if (maxLength && maxLength < 500) {
      return text.slice(0, maxLength - 290) + '...';
    }
    return text;
  };

  const data = {
    createdAt: '2023-08-17T18:57:48.921Z',
    impressions: 80,
    likes: 34,
  };

  return (
    <Link href={`/dashboard/activity/${id}`} className="flex flex-col sm:flex-row gap-4">
      <Image src={info.src} alt="img" className="sm:max-w-52 rounded-md" />
      <div className="flex flex-col justify-between gap-1">
        <span className="text-xs">
          {info.poolingUnit}, {info.localGovt}, {info.state}
        </span>
        <span className="leading-5 font-normal">
          {truncateText(info.title, mediaWidth)}
        </span>
        <div className="flex text-xs gap-2">
          <span>{info.status}</span>
          <span>{dateHandler(info.createdAt)}</span>
        </div>
        <EyeWitnessImpressions props={data} />
      </div>
    </Link>
  );
}
