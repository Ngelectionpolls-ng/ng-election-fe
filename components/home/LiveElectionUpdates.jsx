"use client"

import SenatorialElections from "./SenatorialElections"
import ElectionDisorderCoverage from "./ElectionDisorderCoverage"

export default function LiveElectionUpdates() {
    
    return (
        <section className="w-screen flex justify-center py-16 show-on-scroll">

            <div className="md:w-[1124px] flex flex-col md:flex-row md:space-x-16">
                <div className="w-full md:w-1/2">
                    <SenatorialElections />
                </div>
                <div className="w-full md:w-1/2">
                    <ElectionDisorderCoverage /> 
                </div>               
            </div>
            
        </section>
    )
}