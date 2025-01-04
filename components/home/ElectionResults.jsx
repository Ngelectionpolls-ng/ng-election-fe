import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {Button} from "components/ui/button";
import { ChevronRight } from 'lucide-react';

const candidates = [
  { name: 'APC', percentage: 59, votes: '343,000', color: 'bg-green-600', img: '/assets/images/apc.png' },
  { name: 'PDP', percentage: 14, votes: '223,000', color: 'bg-pink-600', img: '/assets/images/pdp.png' },
  { name: 'LP', percentage: 7, votes: '1,129,000', color: 'bg-yellow-600', img: '/assets/images/apc.png' },
  { name: 'NNPP', percentage: 3, votes: '4,890', color: 'bg-green-400', img: '/assets/images/pdp.png' },
];

export default function ElectionResults({state, width=400, height=260, x=50, y=100, visible=false, onMouseEnter, onMouseLeave}) {
  
  
  return (
      // <div className={`fixed min-w-[${width}px] h-[${height}px] p-3 bg-gray-800 text-white rounded-lg shadow-lg space-y-3 z-[10] ${visible ? 'block' : 'hidden'}`} 
      <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} id="election_result" 
           className={`fixed w-[450px] p-3 bg-white rounded-xl shadow-xl justify-between z-[10] ${visible ? 'block' : 'hidden'} text-gray-900`} 
           style={{'left' : `${x}px`, 'top' : `${y}px`}} >
        {/* Title */}
        <div className="flex flex-col space-y-1 my-2 w-full">
          <h2 className="text-md font-bold">Presidential Election</h2>
          <h2 className="text-sm font-semibold text-green-900">{state} State</h2>
          <p className="text-xs">Total Registered Voters: 2,501,081</p>
          <div className="flex justify-between text-xs">
            <span>Leading candidates</span>
            <span>Top 4 of 18</span>
          </div>
        </div>

        {/* Candidates List */}
        <div className="h-grow space-y-4 mb-8 w-full">
          {candidates.map((candidate, index) => (
            <div key={index} className="flex items-center space-x-2 w-full">
              <Image
                src={candidate.img}
                alt={candidate.name}
                width={30}
                height={30}
                className="rounded-full"
              />
              <p className="w-10 text-xs font-semibold -ml-2">{candidate.name}</p>
              <div className="flex-1 h-4 bg-gray-400 rounded-full overflow-hidden border-1 border-black/70">
                <div
                  className={`h-full ${candidate.color} text-[10px] text-center text-white font-semibold border-gray-950`}
                  style={{ width: `${candidate.percentage}%` }}
                >
                  {candidate.percentage}%
                </div>
              </div>
              <p className="text-xs w-[72px]">{candidate.votes} votes</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-600 w-full">
          <div className="">            
            <p className="text-xs">Click to view result from all Polling Unit </p>
          </div>          
          <Button className="w-[150px] space-x-2 text-xs flex font-semibold text-white bg-green-900 p-3 py-4 hover:bg-green-800 rounded-xl">
            <span className="w-[100px] rounded-xl text-left py-2">Click to view More</span>
            <ChevronRight />
          </Button>
        </div>
      </div>
  );
}
