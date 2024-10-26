import React from 'react';
import { CircleCheckBig, PencilLine, CloudUpload } from 'lucide-react';

interface ResultProps {
  setFormStep: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

export default function Results({props}: {props: ResultProps}) {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <CircleCheckBig />
          <div className="flex flex-col text-[12px]">
            <span>PU 12/10/01/012 Result</span>
            <span>saved to IGUBEN</span>
          </div>
        </div>
        <div className="flex items-center text-[12px] gap-2 cursor-pointer"
          onClick={() => props.setFormStep(2)}
        >
          <div className="border px-2 py-0 rounded-xl">
            <PencilLine />
          </div>
          <span className="bg-slate-100 text-black px-2 py-1 rounded-xl">Click to Edit</span>
        </div>
      </div>
      <div className="flex gap-2 bg-[#2B8769] text-accent rounded-md">
        <div className="bg-[#1F6E54] w-16 flex items-center justify-center rounded-md">
          <CloudUpload />
        </div>
        <div className="flex flex-col justify-center py-3 ">
          <span className="text-base font-bold">Result saved successfully</span>
          <span className="text-sm">1 PU Result complete</span>
        </div>
      </div>
    </div>
  );
}
