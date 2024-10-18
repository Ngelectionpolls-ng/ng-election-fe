import ProgressDemo from '@/components/ui/Progress';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

type ElectionProps = {
  contestantName: string;
  party: string;
  votesNo: number;
  image: StaticImageData;
  progress?: {
    percent: number;
    className?: string;
    setPercent: React.Dispatch<React.SetStateAction<number>>;
  };
};

export const CandidateInfo = ({ props }: { props: ElectionProps }) => {
  const [mediaQuery, setMediaQuery] = useState<boolean>(false);

  useEffect(() => {
    const handleMediaQuery = () => {
      if (window.innerWidth < 768) {
        setMediaQuery(true);
      } else {
        setMediaQuery(false);
      }
    };
    handleMediaQuery();
    window.addEventListener('resize', handleMediaQuery);
    return () => window.removeEventListener('resize', handleMediaQuery);
  }, [mediaQuery]);

  return (
    <div
      className={`flex gap-4 items-center relative
      ${!props.progress ? 'shadow-md p-3 rounded-md' : ''}
        ${props.progress && mediaQuery ? 'h-20 justify-between' : ''}
    `}
    >
      <div className="flex gap-2 items-center">
        <div
          className={`rounded-full relative overflow-hidden w-10 h-10
          ${!props.progress ? 'w-14 h-14' : 'w-10 h-10'}
        `}
        >
          <Image
            src={props.image}
            alt=""
            height={300}
            width={300}
            className="absolute left-0 top-0 h-full w-full"
          />
        </div>
        <div className="flex flex-col text-[12px] min-w-[3rem] gap-1">
          <span>{props.contestantName}</span>
          <span>{props.party}</span>
          {!props.progress && (
            <span className="font-bold text-[12px]">{props.votesNo}</span>
          )}
        </div>
      </div>
      {props.progress && (
        <div className={`w-full ${mediaQuery ? 'absolute bottom-0' : ''}`}>
          <ProgressDemo
          props={props.progress}
        />
        </div>
      )}
      {props.progress && (
        <span className="font-bold text-[12px]">{props.votesNo}</span>
      )}
    </div>
  );
};
