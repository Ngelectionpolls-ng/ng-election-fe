"use client"

import { makeSlug, titleCase } from "helpers";
import VoteCount from "components/commons/VoteCount";
import { Separator } from "components/ui/separator"

export default function HationalResults({candidates}){

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
                            <VoteCount key={index} data={candidate} total={1750000} />
                            <Separator />
                        </>
                        
                    ))
                }
            </div>

            {/* Vote statistics */}
            <div className="w-full flex justify-between">
                <div className="my-4 flex flex-col w-1/5 justify-between">
                    <h6 className="text-xs">
                        Total Accumulated Votes
                    </h6>
                    <span className="text-sm font-bold text-green-800">
                        12345678
                    </span>
                </div>
                <div className="my-4 flex flex-col w-1/5 justify-between">
                    <h6 className="text-xs">
                        Total votes count
                    </h6>
                    <span className="text-sm font-bold text-green-800">
                        12345678
                    </span>
                </div>
                <div className="my-4 flex flex-col w-1/5 justify-between">
                    <h6 className="text-xs">
                        Total valid votes
                    </h6>
                    <span className="text-sm font-bold text-green-800">
                        12345678
                    </span>
                </div>
                <div className="my-4 flex flex-col w-1/5 justify-between">
                    <h6 className="text-xs">
                        Total rejected votes
                    </h6>
                    <span className="text-sm font-bold text-green-800">
                        345678
                    </span>
                </div>
            </div>
        </>

    );
}