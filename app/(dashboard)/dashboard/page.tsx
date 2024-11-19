'use client';
import {
  dummyNewsArr,
  resultData,
  resultData2,
} from '@/utils/data/DummyObjects';
import CollapsibleComponent from '@/components/ui/collapsible';
import Activities from './_component/Activities';
import { useEffect, useState } from 'react';
import FormControl from '@/components/common/FormControl';
import { CandidateInfo } from './_component/CandidateInfo';
import ElectionInfo from './_component/ElectionInfo';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import EyewitnessUpdates from './_component/EyewitnessUpdates';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [dashboard, setDashboard] = useState<
    'subscriber' | 'eyewitness' | 'pullingAgent' | null
  >('subscriber');

  const electionProps = {
    totalRegisteredVoters: 500,
    totalAccredictedVoters: 500,
    totalVotesCount: 500,
    totalValidVotes: 500,
    totalRejectedVotes: 500,
  };

  // State for "Other Candidates" carousel
  const [otherCandidatesApi, setOtherCandidatesApi] = useState<CarouselApi>();
  const [otherCandidatesCurrent, setOtherCandidatesCurrent] = useState(0);
  const [otherCandidatesCount, setOtherCandidatesCount] = useState(0);

  // State for "Eyewitness Report" carousel
  const [eyewitnessApi, setEyewitnessApi] = useState<CarouselApi>();
  const [eyewitnessCurrent, setEyewitnessCurrent] = useState(0);
  const [eyewitnessCount, setEyewitnessCount] = useState(0);

  useEffect(() => {
    if (otherCandidatesApi) {
      setOtherCandidatesCount(otherCandidatesApi.scrollSnapList().length);
      setOtherCandidatesCurrent(otherCandidatesApi.selectedScrollSnap() + 1);

      otherCandidatesApi.on('select', () => {
        setOtherCandidatesCurrent(otherCandidatesApi.selectedScrollSnap() + 1);
      });
    }
  }, [otherCandidatesApi]);

  useEffect(() => {
    if (eyewitnessApi) {
      setEyewitnessCount(eyewitnessApi.scrollSnapList().length);
      setEyewitnessCurrent(eyewitnessApi.selectedScrollSnap() + 1);

      eyewitnessApi.on('select', () => {
        setEyewitnessCurrent(eyewitnessApi.selectedScrollSnap() + 1);
      });
    }
  }, [eyewitnessApi]);

  const router = useRouter();
  const tailwindColors = [
    'bg-red-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-purple-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-indigo-500',
    'bg-orange-500',
    'bg-gray-500',
  ];
  
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
        <div className="relative w-full overflow-hidden">
          <div className="grid gap-2 shadow-sm m-1 p-3 rounded-md">
            <div className="flex mb-4 justify-between flex-wrap">
              <FormControl
                as="select"
                className="max-w-[200px] text-[8px] sm:text-base"
                placeholder="Select election type"
                options={[
                  { value: '1', label: 'presidential' },
                  { value: '2', label: 'Gubernatorial' },
                  { value: '3', label: 'Federal House of Assembly' },
                  { value: '4', label: 'State House of Assembly' },
                  { value: '5', label: 'Local government' },
                  { value: '6', label: 'Off-cycle elections' },
                ]}
                // label="Select State"
              />
              <FormControl
                as="select"
                className="max-w-[200px] text-[8px] sm:text-base"
                placeholder="Select election year"
                options={[{ value: '1', label: '2014' }]}
                // label="Select State"
              />
            </div>
            <div className="flex justify-between gap-10 mb-9 text-[15px]">
              <span>Leading Candidates</span>
              <span className='justify-end'>Accumulated Votes</span>
            </div>
            <div className="flex gap-6 flex-col mb-9">
              {resultData2.map((res, id) => (
                <CandidateInfo props={res} key={id} classStyle={tailwindColors[id % tailwindColors.length]} />
              ))}
            </div>
            <ElectionInfo props={electionProps} />
          </div>

          {/* Other Candidates Carousel */}
          <div className="p-3 grid gap-4 relative overflow-hidden">
            <span>Other Candidates</span>
            <div className="w-full relative overflow-hidden">
              <Carousel id="candidatesApi" setApi={setOtherCandidatesApi}>
                <CarouselContent className="p-1">
                  {resultData.map((res, index) => (
                    <CarouselItem
                      key={index}
                      className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    >
                      <CandidateInfo className="shadow-md rounded-md" props={res} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
              <span className="py-2 text-sm flex justify-center">
                Slide {otherCandidatesCurrent} of {otherCandidatesCount}
              </span>
            </div>
          </div>

          {/* Eyewitness Report Carousel */}
          <div className="relative overflow-hidden p-2">
            <div className="flex justify-between items-center w-full">
              <span>
                Recent Updates of Eyewitness Report from all Polling Units
              </span>
              <Button
                variant={'outline'}
                className="max-w-max text-[10px] md:text-sm text-green-900"
                onClick={() => router.push('/dashboard/eyewitness-report')}
              >
                View More
              </Button>
            </div>
            <div className="relative mt-4">
              <Carousel id="eyewitnessApi" setApi={setEyewitnessApi}>
                <CarouselContent className="p-1">
                  {dummyNewsArr.map((res, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                    >
                      <EyewitnessUpdates props={res} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
              <span className="py-2 text-sm flex justify-center">
                Slide {eyewitnessCurrent} of {eyewitnessCount}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
