import { Dispatch, SetStateAction } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import newsImg from '@/public/assets/images/bg-2.png';
import ProgressDemo from '@/components/ui/Progress';
import { FieldValues } from 'react-hook-form';

interface ResultTableProps {
  data: {
    contestantName: string;
    partyName: string;
    votesNo: number;
  }[];
  formData: FieldValues[];
  setFormStep: Dispatch<SetStateAction<1 | 2 | 3>>;
}

export default function ResultTable({ props }: { props: ResultTableProps }) {
  return (
    <div className="flex flex-col gap-10 py-5 pt-12">
      <Button
        variant={'ghost'}
        onClick={() => props.setFormStep(1)}
        className="bg-white absolute top-12 right-6 text-black max-w-max rounded-md"
      >
        Add Result
      </Button>
      <div className="bg-white px-4 py-8 flex flex-col gap-3 text-black rounded-md">
        <span className="">21st september 2024</span>
        <div className="flex justify-between text-[15px]">
          <span>Leading Candidates</span>
          <span>Accumulated Votes</span>
        </div>
        {props.formData.map((res, id) => (
          <div key={id} className="flex gap-4 items-center relative">
            <div className="flex gap-2 items-center">
              <div className="rounded-full relative overflow-hidden w-8 h-8">
                <Image
                  src={newsImg}
                  alt=""
                  height={300}
                  width={300}
                  className="absolute left-0 top-0 h-full w-full"
                />
              </div>
              <div className="flex flex-col text-[12px] min-w-[3rem] gap-1">
                <span>{res.contestantName}</span>
                <span>{res.party}</span>
              </div>
            </div>
            <ProgressDemo />
            <span className="font-bold text-[12px]">{res.votesNo}</span>
          </div>
        ))}
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
      <Button onClick={() => props.setFormStep(3)} className="rounded-md mx-auto w-[14rem]">
        Submit
      </Button>
    </div>
  );
}
