import { dateHandler } from '@/utils/functions/FunctionUtils';
import { ChartNoAxesColumn, Heart, Share2, Clock5 } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

export interface EyewitnessProps {
  src: StaticImageData;
  title: string;
  localGovt: string;
  impressions: number;
  id: number;
  state: string;
  createdAt: string;
}

export default function EyewitnessUpdates({ props }: { props: EyewitnessProps}) {
  return (
    <div className="flex flex-col justify-evenly min-h-[29rem] shadow-md p-3 rounded-md gap-2">
      <span className="text-sm">
        PU 020, Ewossa Ward, {props.localGovt} LGA
      </span>
      <Image
        src={props.src}
        height={300}
        width={250}
        className="rounded-md"
        alt=""
      />
      <p className='max-w-[21rem]'>{props.title}</p>
      <div className="flex flex-wrap gap-4">
        <div className="flex gap-2">
          <Clock5 /> <span>{dateHandler(props.createdAt)}</span>
        </div>
        <div className="flex gap-2">
          <ChartNoAxesColumn /> <span>{props.impressions}</span>
        </div>
        <div>
          <Heart />
        </div>
        <div>
          <Share2 />
        </div>
      </div>
      <span>{props.state}, Nigeria</span>
    </div>
  );
}
