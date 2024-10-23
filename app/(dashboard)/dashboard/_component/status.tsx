import { Dot } from 'lucide-react';
import React from 'react';

type StatusProps = {
  text: string;
  stat: boolean;
};

export default function Status({ stat, text }: StatusProps) {
  return (
    <div className="flex text-sm gap-[2px]">
      <Dot className={`${stat ? 'text-green-500' : 'text-red-500'}`} />
      <span>{text}</span>
    </div>
  );
}
// text-green-500
