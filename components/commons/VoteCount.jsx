"use client"

import { ellipsify } from "helpers";

export default function VoteCount({data, total, type="normal"}){

    const width = Math.round((data.votes / total) * 400);

    const percentage = Math.round((data.votes / total) * 100);
    const indicatorLeft = width > 30 ? width - 30 : width;
    const indicatorColor = width > 30 ? 'text-white' : 'text-black';

    return (
        <div className="w-full py-1 flex justify-between items-center">
            <div className={`w-44 flex ${type == 'small' ? 'space-x-2' : 'space-x-4'}`}>
                <img src={data.image} alt=""  className={`${type == 'small' ? 'w-10 h-10' : 'w-12 h-12'} rounded-full`} />
                <div className={`flex flex-col ${type == 'small' ? 'items-start space-y-0.5 h-10' : 'items-center space-y-1 h-12'} justify-center  w-[100px] max-w-[100px]`}>
                    <h6 className={`text-xs text-gray-800 ${type == 'small' ? 'text-left' : ''}`}>{ellipsify(data.name)}</h6>
                    <p className={`text-sm text-gray-800`}>{data.acronym}</p>
                </div>
            </div>
            
            <div className={`${type == 'small' ? 'h-4 w-[350px]' : 'h-6 w-[400px]'}  rounded-full relative bg-black/20 overflow-hidden`}>
                <div className={`${data.color} h-full`} style={{ width: `${width}px` }} ></div>
                <div className={`absolute z-10 h-full w-full top-0 left-0 text-xs 
                                shadow-white shadow-2xl mx-auto my-auto text-black 
                                flex items-center`}>
                    <span className={`rounded-full px-2 py-1 ${indicatorColor} text-[10px] font-semibold`} 
                        style={{marginLeft: `${indicatorLeft}px`}}>{percentage}%
                    </span>
                </div>
            </div>

            <p className="text-xs font-semibold w-[100px] text-right text-gray-800">{data.votes} votes</p>
            
        </div>
    )
}