interface ElectionProps {
  TotalAccredictedVoters: number;
  TotalVotesCount: number;
  TotalValidVotes: number;
  TotalRejectedVotes: number;
};

export default function ElectionInfo({props}: {props: ElectionProps}) {
  return (
    <div className="flex justify-between w-full">
      <div className="flex flex-col text-[10px]">
        <span>Total Accredicted Voters</span>
        <span className="text-primary font-black">{props.TotalAccredictedVoters}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Votes Count</span>
        <span className="text-primary font-black">{props.TotalVotesCount}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Valid Votes</span>
        <span className="text-primary font-black">{props.TotalValidVotes}</span>
      </div>
      <div className="flex flex-col text-[10px]">
        <span>Total Rejected Votes</span>
        <span className="text-primary font-black">{props.TotalRejectedVotes}</span>
      </div>
    </div>
  );
}
