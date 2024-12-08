"use client"

import SenatorialElections from "./SenatorialElections"
import LiveElectionNews from "./LiveElectionNews"

export default function LiveElectionUpdates() {
    return (
        <section className="my-14 px-4 lg:px-10  gap-20 flex flex-col md:flex-row bg-white py-16">
            <SenatorialElections />
            <LiveElectionNews />
        </section>
    )
}