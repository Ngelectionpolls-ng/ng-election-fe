import { nationalAssemblyIcon, thugAttackIcon, robberyIcon } from "@/public/assets/icons"
import Link from "next/link"
import Svg from "../common/Svg"

function ElectionUpdateSection() {
    const upcomingElectionData = [
        { id: 0, date: "September 21, 2024", state: "Edo State", electionType: "State Election" },
        { id: 1, date: "June 13, 2024", state: "Delta State", electionType: "State Election" },
        { id: 2, date: "Febraury 3, 2024", state: "Anambra State", electionType: "State Election" },
        { id: 3, date: "Febraury 16, 2024", state: "Imo State", electionType: "State Election" },
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
                        <div className="flex items-center gap-4">
                            <Svg width={'60px'} height={'60px'} SvgIcon={nationalAssemblyIcon} />
                            <div className="flex flex-col">
                                <p><span className="font-bold">Election Tribunal: </span>Incongruences in constitution and Tribunal judgements prompt protests and attacks
                                    on government facilities.</p>
                                <Link href={"#"} className="text-[#6366F1] mt-2 hover:underline">Read more</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Svg width={'60px'} height={'60px'} SvgIcon={thugAttackIcon} />
                            <div className="flex flex-col">
                                <p><span className="font-bold">Lagos: </span>Thugs reigns supreme as widespread violence mars state house of assembly elections.</p>
                                <Link href={"#"} className="text-[#6366F1] mt-2 hover:underline">Read more</Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <Svg width={'60px'} height={'60px'} SvgIcon={robberyIcon} />
                            <div className="flex flex-col">
                                <p><span className="font-bold">Edo: </span>Targeted attacks against political figures continue after elections</p>
                                <Link href={"#"} className="text-[#6366F1] mt-2 hover:underline">Read more</Link>
                            </div>
                        </div>
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
