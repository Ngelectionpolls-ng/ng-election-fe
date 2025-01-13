"use client"

import React, {useEffect, useState} from "react";
import { makeSlug, titleCase } from "helpers";
import { Separator } from "components/ui/separator"

export default function WardResults({wardValue, pollingUnits, pollingUnitResults}){

    return (
        <>
            <div className="w-full p-4 text-xs">
                Result from {pollingUnits?.length} Polling Units in <span className="text-green-800 font-bold">{titleCase(wardValue)} Ward</span>
            </div>

            <div className="">
                <div className={`w-full flex flex-col min-w-[800px]`}>
                    <div className={`w-full flex justify-between px-4 py-2 bg-slate-100 font-semibold text-xs`}>
                        <span className="w-1/4" >
                            Polling unit
                        </span>
                        <span className="w-1/6">
                            Accredited voters
                        </span>
                        <span className="w-1/6">
                            Vote counts
                        </span>
                        <span className="w-1/6">
                            Status
                        </span>
                        <span className="w-1/6">
                            Report
                        </span>
                    </div>
                </div>
                {
                    pollingUnitResults.map((result, index) => (
                        <Row result={result} key={index} />
                    ))
                }
            </div>
            
        </>
    )

    function Row({result}){

        const [showDetails, setShowDetails] = useState(false);

        const handleMouseOver = () => {
            if(!showDetails){
                setShowDetails(true);
            } 
        }

        const handleMouseOut = () => {
            if(showDetails){
                setShowDetails(false);
            } 
        }

        return (
            <div className={`w-full flex flex-col min-w-[800px]`}>
                <div onClick={() => setShowDetails(!showDetails)} 
                    // onMouseOver={() => handleMouseOver()} 
                    // onMouseOut={() => handleMouseOut()} 
                    className={`w-full flex justify-between p-4 text-xs hover:bg-slate-100 cursor-pointer`}>

                    <span className="w-1/4">
                        { result.pollingUnit.name}
                    </span>
                    <span className="w-1/6">
                        { result.stats.total_accredited} votes
                    </span>
                    <span className="w-1/6">
                        { result.stats.total_valid} votes
                    </span>
                    <span className="w-1/6">
                        { result.stats.status}
                    </span>
                    <span className="w-1/6">
                        { result.stats.report}
                    </span>
                </div>
                <Separator />
                <div className={`w-full p-4 rounded-xl shadow flex flex-col space-y-2 ${showDetails ? 'block' : 'hidden'}`}>
                    
                    <div className="w-full flex justify-between">
                        <div className="w-40 flex flex-col justify-center">                                        
                            <p className="text-xs">
                            Leading candidates
                            </p>
                        </div>
                        
                    </div>

                    <div className="w-full flex flex-col md:flex-row md:justify-between">
                        {
                            result.candidates.map((item, index2) => (
                                <div key={index2} className="w-full md:w-[180px] border border-gree-700 flex space-x-4 rounded-xl p-4 bg-green-50">
                                    <img src={item.image} alt=""  className="w-12 h-12 rounded-full" />
                                    <div className="flex flex-col justify-center space-y-1 h-12 w-[100px] max-w-[100px]">
                                        <h6 className="text-[10px]">{item.name}</h6>
                                        <p className="text-xs">{item.acronym}</p>
                                        <p className="text-sm font-bold text-green-900">{item.votes}</p>
                                    </div>            
                                </div>
                            ))                                                    
                        }
                    </div>
                    
                    {/* Vote statistics */}
                    <div className="w-full flex flex-col md:flex-row justify-between">
                        <div className="my-4 flex flex-col w-full md:w-1/5 justify-between">
                            <h6 className="text-xs">
                                Total Accumulated Votes
                            </h6>
                            <span className="text-xs font-bold text-green-800">
                                {result.stats.total_accredited}
                            </span>
                        </div>
                        <div className="my-4 flex flex-col w-full md:w-1/5 justify-between">
                            <h6 className="text-xs">
                                Total votes count
                            </h6>
                            <span className="text-xs font-bold text-green-800">
                                {result.stats.total_votes}
                            </span>
                        </div>
                        <div className="my-4 flex flex-col w-full md:w-1/5 justify-between">
                            <h6 className="text-xs">
                                Total valid votes
                            </h6>
                            <span className="text-xs font-bold text-green-800">
                                {result.stats.total_valid}
                            </span>
                        </div>
                        <div className="my-4 flex flex-col w-full md:w-1/5 justify-between">
                            <h6 className="text-xs">
                                Total rejected votes
                            </h6>
                            <span className="text-xs font-bold text-green-800">
                                {result.stats.total_rejected}
                            </span>
                        </div>
                    </div>   

                    {/* Issues reported */}
                    <div className="w-full flex flex-col justify-between">
                        <h6 className="text-xs font-bold">
                            Issues reported for this polling unit
                        </h6>
                        <div className="my-4 flex flex-col w-full justify-between bg-gray-100 rounded-lg">
                            {
                                result.issues?.map((issue, index) => (
                                    <p key={index} className="text-sm  text-black p-4">
                                        {issue.details}
                                    </p>
                                ))
                            }                                        
                        </div>
                    </div>        

                    {/* Engagement stats */}
                    <div className="pt-2 flex space-x-2">
                        <div className="text-[10px] text-gray-800 w-16 flex space-x-1">
                            <p className="flex space-x-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-gray-600 fill-current">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                                </svg>
                                <span>{result.activity.created_at}</span>
                            </p>
                        </div>
                        <div className="text-xs text-black w-16 flex space-x-1">
                            <p className="flex space-x-1 items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-600 fill-current">
                                    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm4.5 7.5a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0v-2.25a.75.75 0 0 1 .75-.75Zm3.75-1.5a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0V12Zm2.25-3a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 1-1.5 0V9.75A.75.75 0 0 1 13.5 9Zm3.75-1.5a.75.75 0 0 0-1.5 0v9a.75.75 0 0 0 1.5 0v-9Z" clipRule="evenodd" />
                                </svg>
                                <span>{result.activity.views}</span>
                            </p>
                        </div>
                        <div className="text-xs text-gray-800 w-16 flex space-x-1">
                            <div className="flex space-x-1 items-center px-2 py-1 cursor-pointer rounded-full hover:bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-green-800 fill-current">
                                    <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                </svg>
                                <span>{result.activity.likes}</span>
                            </div>
                        </div>
                        <div className="text-xs text-gray-800 w-16 flex space-x-1">
                            <div className="w-10 h-10 cursor-pointer flex justify-center items-center rounded-full hover:bg-slate-200">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-4 text-gray-800 fill-current">
                                    <path fillRule="evenodd" d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>        

                </div>
            </div>
        )
    }
}