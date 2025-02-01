"use client"

import { makeSlug, titleCase } from "helpers";
import VoteCount from "components/commons/VoteCount";
import VoteStatistics from "components/dashboard/VoteStatistics";
import { Separator } from "components/ui/separator";

export default function ResultProgress({candidates, type="normal"}){

    return (
        <>
            <div className="w-full flex flex-col space-y-4">
                <div className="w-full flex justify-between text-xs py-2">
                    <span>Leading candidates</span>
                    <span>Accumulated votes</span>
                </div>
                {
                    candidates.map((candidate, index) => (
                        <>
                            <VoteCount key={index} data={candidate} total={1750000} type={type} />
                            <Separator />
                        </>
                        
                    ))
                }
            </div>

            {/* Vote statistics */}
            <VoteStatistics accumulated_votes="12345678" vote_count="12345678" 
                    valid_votes="12345678" rejected_votes="345678" type={type}/>
        </>

    );
}