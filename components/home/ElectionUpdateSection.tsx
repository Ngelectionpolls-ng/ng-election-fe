import Link from "next/link"
import Image from "next/image"
import { nationalAssemblyImg, robberyImg, thugAttackImg } from "@/public/assets/images/home"

function ElectionUpdateSection() {
    const upcomingElectionData = [
        { id: 0, date: "September 21, 2024", state: "Edo State", electionType: "State Election" },
        { id: 1, date: "June 13, 2024", state: "Delta State", electionType: "State Election" },
        { id: 2, date: "Febraury 3, 2024", state: "Anambra State", electionType: "State Election" },
        { id: 3, date: "Febraury 16, 2024", state: "Imo State", electionType: "State Election" },
    ]

    const newContent = [
        {
            id: 0,
            icon: nationalAssemblyImg,
            heading: "Election Tribunal",
            content: "Incongruences in constitution and Tribunal judgements prompt protests and attacks on government facilities."
        },
        {
            id: 1,
            icon: thugAttackImg,
            heading: "Lagos",
            content: "Thugs reigns supreme as widespread violence mars state house of assembly elections."
        },
        {
            id: 2,
            icon: robberyImg,
            heading: "Edo",
            content: "Targeted attacks against political figures continue after elections"
        },
    ]
    return (
        <section className='my-14 px-4 lg:px-10 max-w-[1280px] gap-20 flex flex-col md:flex-row'>
            <div className="w-full md:w-1/2">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">Recent & Upcoming Elections</h3>
                    <p className="text-gray-500 mt-2">This list includes elections held last month, as well as those planned during this month, and the next two months.</p>
                </div>
                <div>
                    <div className="bg-primary grid grid-cols-3 p-3 text-white font-bold w-full">
                        <p className="px-2">Date</p>
                        <p className="px-2">State</p>
                        <p className="px-2">Type of Election</p>
                    </div>
                    {upcomingElectionData.map((data) => {
                        return (
                            <div className="grid grid-cols-3 h-20" key={data.id}>
                                <div className="mt-2 px-1 text-center text-sm bg-gray-100 flex items-center justify-center">{data.date}</div>
                                <div className="mx-2 mt-2 px-1 text-center text-sm bg-gray-100 flex items-center justify-center">{data.state}</div>
                                <div className="mt-2 px-1 text-center text-sm bg-gray-100 flex items-center justify-center">{data.electionType}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">Election-Related Disorder Coverage</h3>
                    <p className="text-sm mt-2">This list includes elections held last month, as well as those planned during this month, and the next two months.</p>
                </div>
                <div>
                    <div className="bg-primary p-3 text-white font-bold w-full">
                        <p className="px-2">February 2023</p>
                    </div>
                    <div className="bg-gray-100 flex flex-col gap-4 p-4 text-sm">
                        {newContent.map((content) => {
                            return (
                                <div className="flex items-center gap-4" key={content.id}>
                                    <Image src={content.icon} width={60} height={60} alt="" />
                                    <div className="flex flex-col">
                                        <p><span className="font-bold">{content.heading}: </span>{content.content}</p>
                                        <Link href={"#"} className="text-[#6366F1] mt-2 hover:underline">Read more</Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="bg-primary p-3 text-white font-bold w-full">
                        <p className="px-2">September 2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ElectionUpdateSection
