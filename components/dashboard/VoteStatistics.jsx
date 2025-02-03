"use client"

import { makeSlug, titleCase, ellipsify } from "helpers";

export default function VoteStatistics({accumulated_votes, vote_count, valid_votes, rejected_votes, type="normal"}){

    return (
        <div className="w-full flex justify-between text-gray-800 mt-auto h-auto">
            <div className="my-4 flex flex-col w-1/5 justify-between">
                <h6 className={`${type == 'small' ? 'text-[12px]' : 'text-xs'}`}>
                    {ellipsify('Total Accumulated Votes', 15)}
                </h6>
                <span className="text-sm font-bold text-green-800">
                    {accumulated_votes}                    
                </span>
            </div>
            <div className="my-4 flex flex-col w-1/5 justify-between">
                <h6 className={`${type == 'small' ? 'text-[12px]' : 'text-xs'}`}>
                     {ellipsify('Total votes count', 15)}
                </h6>
                <span className="text-sm font-bold text-green-800">
                    {vote_count}                    
                </span>
            </div>
            <div className="my-4 flex flex-col w-1/5 justify-between">
                <h6 className={`${type == 'small' ? 'text-[12px]' : 'text-xs'}`}>
                     {ellipsify('Total valid votes', 15)}
                </h6>
                <span className="text-sm font-bold text-green-800">
                    {valid_votes}                    
                </span>
            </div>
            <div className="my-4 flex flex-col w-1/5 justify-between">
                <h6 className={`${type == 'small' ? 'text-[12px]' : 'text-xs'}`}>
                     {ellipsify('Total rejected votes', 15)}
                </h6>
                <span className="text-sm font-bold text-green-800">
                    {rejected_votes}                    
                </span>
            </div>
        </div>
    )

}

