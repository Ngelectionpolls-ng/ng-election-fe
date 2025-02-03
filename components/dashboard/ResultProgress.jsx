"use client"

import { makeSlug, titleCase } from "helpers";
import VoteCount from "components/commons/VoteCount";
import VoteStatistics from "components/dashboard/VoteStatistics";
import { Separator } from "components/ui/separator";

export default function ResultProgress({data, type="normal"}){

    return (
        <div className="w-full flex flex-col justify-between h-full">
            <div className="w-full flex flex-col space-y-4 h-grow overflow-y-scroll">
                <div className="w-full flex justify-between text-xs py-2">
                    <span>Leading candidates</span>
                    <span>Accumulated votes</span>
                </div>
                {
                    data.candidates.map((candidate, index) => (
                        <>
                            <VoteCount key={index} data={candidate} total={data.accreditedVoters} type={type} />
                            <Separator />
                        </>
                        
                    ))
                }
            </div>

            {/* Vote statistics */}
            <VoteStatistics accumulated_votes={data.accreditedVoters} vote_count={data.validVotes} 
                    valid_votes={data.validVotes} rejected_votes={data.rejectedVotes} type={type}/>
        </div>

    );
}