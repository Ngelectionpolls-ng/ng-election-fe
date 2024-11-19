import React from 'react';
import { Clock5, ChartNoAxesColumn, Heart, Share2 } from 'lucide-react';
import { dateHandler } from '@/utils/functions/FunctionUtils';

interface ImpressionProps {
  createdAt: string;
  impressions: number;
  likes: number;
};

export default function EyeWitnessImpressions({ props }: {props: ImpressionProps}) {
  return (
    <div className="flex flex-wrap gap-4 text-sm items-center">
      <div className="flex items-center gap-1">
        <Clock5 className="h-4 w-4" /> <span>{dateHandler(props.createdAt)}</span>
      </div>
      <div className="flex items-center gap-1">
        <ChartNoAxesColumn className="h-4 w-4" /> <span>{props.impressions}</span>
      </div>
      <div className="flex items-center gap-1">
        <Heart className="h-4 w-4" /> <span>{props.likes}</span>
      </div>
      <Share2 className="h-4 w-4" />
    </div>
  );
}
