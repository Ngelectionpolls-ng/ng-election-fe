"use client";
import { formatWithCommas } from "@/utils/functions/FunctionUtils";

export interface ElectionInfoProps {
  totalAccredictedVoters: number;
  totalRegisteredVoters: number;
  totalVotesCount: number;
  totalValidVotes: number;
  totalRejectedVotes: number;
};

export default function ElectionInfo({props}: {props: ElectionInfoProps}) {
  return (
    <div className="grid gap-2 grid-cols-2 lg:grid-cols-5 w-full">
      <div className="flex flex-col">
        <span>Total Registered Voters</span>
        <span className="text-primary font-black">{formatWithCommas(props.totalRegisteredVoters)}</span>
      </div>
      <div className="flex flex-col">
        <span>Total Accredicted Voters</span>
        <span className="text-primary font-black">{formatWithCommas(props.totalAccredictedVoters)}</span>
      </div>
      <div className="flex flex-col">
        <span>Total Votes Count</span>
        <span className="text-primary font-black">{formatWithCommas(props.totalVotesCount)}</span>
      </div>
      <div className="flex flex-col">
        <span>Total Valid Votes</span>
        <span className="text-primary font-black">{formatWithCommas(props.totalValidVotes)}</span>
      </div>
      <div className="flex flex-col">
        <span>Total Rejected Votes</span>
        <span className="text-primary font-black">{formatWithCommas(props.totalRejectedVotes)}</span>
      </div>
    </div>
  );
}
