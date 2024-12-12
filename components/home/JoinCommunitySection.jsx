import { ArrowRight } from "lucide-react"
import Link from "next/link"

function JoinCommunitySection() {
    return (
        <section className="w-screen flex justify-center py-16">
            <div className="flex flex-col lg:flex-row w-full md:w-[1104px]">
                <div className="bg-green-900 w-full lg:w-1/2">
                    <div className="p-4 md:p-8">
                        <h3 className="tracking-[12.3px] text-2xl md:text-4xl text-white text-center font-bold py-2">ONE NAIJA FOR</h3>
                        <div className="p-3 bg-white text-3xl md:text-[40px] text-green-900 text-center font-bold">ELECTORAL REFORM</div>
                    </div>
                </div>
                <div className="flex justify-between items-center border-[1.5px] border-gray-400 rounded-b-md lg:rounded-bl-none lg:rounded-r-md w-full lg:w-1/2 px-8 pb-4">
                    <Link href={"#"} className="flex flex-col md:flex-row gap-3 w-full justify-between items-center cursor-pointer">
                        <div className="mt-4 lg:m-0">
                            <h3 className="text-green-900 text-2xl font-bold underline">Join the Discussion</h3>
                        </div>
                        <div><ArrowRight color="#285D2D" size={22} strokeWidth={3} /></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default JoinCommunitySection
