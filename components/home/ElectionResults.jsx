import Image from 'next/image';
import { useEffect, useState } from 'react';

const candidates = [
  { name: 'APC', percentage: 59, votes: '343,000', color: 'bg-green-600', img: '/assets/images/apc.png' },
  { name: 'PDP', percentage: 14, votes: '223,000', color: 'bg-pink-600', img: '/assets/images/pdp.png' },
  { name: 'LP', percentage: 7, votes: '1,129,000', color: 'bg-yellow-600', img: '/assets/images/apc.png' },
  { name: 'NNPP', percentage: 3, votes: '4,890', color: 'bg-green-400', img: '/assets/images/pdp.png' },
];

export default function ElectionResults({state, width=400, height=260, x=50, y=100, visible=false, onMouseOver, onMouseLeave}) {
  
  return (
      // <div className={`fixed min-w-[${width}px] h-[${height}px] p-3 bg-gray-800 text-white rounded-lg shadow-lg space-y-3 z-[10] ${visible ? 'block' : 'hidden'}`} 
      <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} 
           className={`fixed min-w-[450px] h-[${height}px] p-3 bg-gray-800 text-white rounded-lg shadow-lg space-y-3 z-[10] ${visible ? 'block' : 'hidden'}`} 
           style={{'left' : `${x}px`, 'top' : `${y}px`}} >
        {/* Title */}
        <div>
          <h2 className="text-sm font-semibold">{state} State Election</h2>
          <p className="text-xs text-gray-200">Top 4 of 18</p>
        </div>

        {/* Candidates List */}
        <div className="space-y-2">
          {candidates.map((candidate, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Image
                src={candidate.img}
                alt={candidate.name}
                width={24}
                height={24}
                className="rounded-full"
              />
              <p className="w-10 text-xs font-semibold">{candidate.name}</p>
              <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden max-w-[50%]">
                <div
                  className={`h-full ${candidate.color} text-[10px] text-center text-white font-semibold`}
                  style={{ width: `${candidate.percentage}%` }}
                >
                  {candidate.percentage}%
                </div>
              </div>
              <p className="text-xs text-gray-400">{candidate.votes} votes</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-2 border-t border-gray-600">
          <p className="text-xs text-gray-400">Total Registered Voters: 2.5M</p>
          <button className="text-xs font-semibold text-white bg-green-700 px-3 py-1 rounded-lg hover:bg-green-800">
            More →
          </button>
        </div>
      </div>
  );
}
