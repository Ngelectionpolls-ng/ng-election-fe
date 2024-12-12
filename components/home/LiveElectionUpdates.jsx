"use client"

import SenatorialElections from "./SenatorialElections"
import ElectionDisorderCoverage from "./ElectionDisorderCoverage"

export default function LiveElectionUpdates() {
    
    return (
        <section className="w-screen flex justify-center py-16">

            <div className="md:w-[1104px] flex flex-col md:flex-row md:space-x-16">
                <div className="w-screen md:w-1/2">
                    <SenatorialElections />
                </div>
                <div className="w-screen md:w-1/2">
                    <ElectionDisorderCoverage /> 
                </div>               
            </div>
            
        </section>
    )
}