import ProgressDemo from '@/components/ui/Progress'
import { newsReportImg } from '@/public/assets/images/home'
import Image from 'next/image'
import React from 'react'

type ElectionProps = {}

export const CandidateInfo = ({props}: {props: ElectionProps}) => {
  return (
    <div className="flex gap-4 items-center relative">
    <div className="flex gap-2 items-center">
      <div className="rounded-full relative overflow-hidden w-10 h-10">
        <Image
          src={newsReportImg}
          alt=""
          height={300}
          width={300}
          className="absolute left-0 top-0 h-full w-full"
        />
      </div>
      <div className="flex flex-col text-[12px] min-w-[3rem] gap-1">
        <span>contestantName</span>
        <span>party</span>
      </div>
    </div>
    <ProgressDemo />
    <span className="font-bold text-[12px]">votesNo</span>
  </div>
  )
}