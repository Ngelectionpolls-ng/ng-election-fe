'use client';
import { dummyNewsArr } from '@/utils/data/DummyObjects';
import CollapsibleComponent from '@/components/ui/collapsible';
import Activities from './_component/Activities';
import { useState } from 'react';
import FormControl from '@/components/common/FormControl';
import Image from 'next/image';
import { newsReportImg } from '@/public/assets/images/home';
import ProgressDemo from '@/components/ui/Progress';
import { Clock5, ChartNoAxesColumn } from 'lucide-react';
import { Heart } from 'lucide-react';
import { Share2 } from 'lucide-react';

export default function Page() {
  const [dashboard, setDashboard] = useState<
    'subscriber' | 'eyewitness' | 'pullingAgent' | null
  >('subscriber');
  return (
    <section className="grid gap-10 p-4">
      {dashboard === 'eyewitness' && (
        <div className="grid gap-10 p-4">
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
        </div>
      )}
      {dashboard === 'subscriber' && (
        <div>
          <div className="grid gap-2 shadow-sm p-3 rounded-md">
            <div className="flex justify-between">
              <FormControl
                as="select"
                options={[{ value: 'eyewitness', label: 'Eyewitness' }]}
              />
              <span>21st september 2024</span>
            </div>
            <div className="flex justify-between text-[15px]">
              <span>Leading Candidates</span>
              <span>Accumulated Votes</span>
            </div>
            <div className="flex gap-6 flex-col">
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
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col text-[10px]">
                <span>Total Accredicted Voters</span>
                <span className="text-primary font-black">500</span>
              </div>
              <div className="flex flex-col text-[10px]">
                <span>Total Votes Count</span>
                <span className="text-primary font-black">51200</span>
              </div>
              <div className="flex flex-col text-[10px]">
                <span>Total Valid Votes</span>
                <span className="text-primary font-black">65500</span>
              </div>
              <div className="flex flex-col text-[10px]">
                <span>Total Valid Votes</span>
                <span className="text-primary font-black">500899</span>
              </div>
            </div>
          </div>
          <div className="p-3 grid gap-2">
            <h2>Other Candidates</h2>
            <div className="grid grid-cols-3 gap-3 shadow-sm p-2 max-w-max">
              <div className="grid gap-4 p-3 rounded-md max-w-max shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full relative overflow-hidden w-14 h-14">
                    <Image
                      src={newsReportImg}
                      alt=""
                      height={300}
                      width={300}
                      className="absolute left-0 top-0 h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>contestantName</span>
                    <span>party</span>
                    <span>votesNo</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-3 rounded-md max-w-max shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full relative overflow-hidden w-14 h-14">
                    <Image
                      src={newsReportImg}
                      alt=""
                      height={300}
                      width={300}
                      className="absolute left-0 top-0 h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>contestantName</span>
                    <span>party</span>
                    <span>votesNo</span>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-3 rounded-md max-w-max shadow-sm">
                <div className="flex gap-4 items-center">
                  <div className="rounded-full relative overflow-hidden w-14 h-14">
                    <Image
                      src={newsReportImg}
                      alt=""
                      height={300}
                      width={300}
                      className="absolute left-0 top-0 h-full w-full"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span>contestantName</span>
                    <span>party</span>
                    <span>votesNo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2>Recent Updates of Eyewitness Report from all Polling Unit </h2>
            <div className="grid grid-cols-3 gap-3 shadow-sm p-2 max-w-max">
              <div className="flex flex-col gap-2">
                <span className="text-sm">
                  PU 020, Ewossa Ward, Igueben LGA
                </span>
                <Image
                  src={newsReportImg}
                  height={300}
                  width={300}
                  className="rounded-md"
                  alt=""
                />
                <p>
                  There was a little conflict between some ballot box snatchers
                  and the civilians at ikutekpene
                </p>
                <div className="flex gap-3">
                  <div className="flex gap-1">
                    <Clock5 /> <span>11:57am</span>
                  </div>
                  <div className="flex gap-1">
                    <ChartNoAxesColumn /> <span>40k</span>
                  </div>
                  <Heart />
                  <Share2 />
                </div>
                <span>Edo State, Nigeria</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm">
                  PU 020, Ewossa Ward, Igueben LGA
                </span>
                <Image
                  src={newsReportImg}
                  height={300}
                  width={300}
                  className="rounded-md"
                  alt=""
                />
                <p>
                  There was a little conflict between some ballot box snatchers
                  and the civilians at ikutekpene
                </p>
                <div className="flex gap-3">
                  <div className="flex gap-1">
                    <Clock5 /> <span>11:57am</span>
                  </div>
                  <div className="flex gap-1">
                    <ChartNoAxesColumn /> <span>40k</span>
                  </div>
                  <Heart />
                  <Share2 />
                </div>
                <span>Edo State, Nigeria</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-sm">
                  PU 020, Ewossa Ward, Igueben LGA
                </span>
                <Image
                  src={newsReportImg}
                  height={300}
                  width={300}
                  className="rounded-md"
                  alt=""
                />
                <p>
                  There was a little conflict between some ballot box snatchers
                  and the civilians at ikutekpene
                </p>
                <div className="flex gap-3">
                  <div className="flex gap-1">
                    <Clock5 /> <span>11:57am</span>
                  </div>
                  <div className="flex gap-1">
                    <ChartNoAxesColumn /> <span>40k</span>
                  </div>
                  <Heart />
                  <Share2 />
                </div>
                <span>Edo State, Nigeria</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
