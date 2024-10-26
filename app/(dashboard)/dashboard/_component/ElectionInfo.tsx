"use client";

export interface ElectionInfoProps {
  totalAccredictedVoters: number;
  totalRegisteredVoters: number;
  totalVotesCount: number;
  totalValidVotes: number;
  totalRejectedVotes: number;
};

export default function ElectionInfo({props}: {props: ElectionInfoProps}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 w-full">
      <div className="flex flex-col text-[10px]">
        <span>Total Registered Voters</span>
        <span className="text-primary font-black">{props.totalRegisteredVoters}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Accredicted Voters</span>
        <span className="text-primary font-black">{props.totalAccredictedVoters}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Votes Count</span>
        <span className="text-primary font-black">{props.totalVotesCount}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Valid Votes</span>
        <span className="text-primary font-black">{props.totalValidVotes}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Rejected Votes</span>
        <span className="text-primary font-black">{props.totalRejectedVotes}</span>
      </div>
    </div>
  );
}
