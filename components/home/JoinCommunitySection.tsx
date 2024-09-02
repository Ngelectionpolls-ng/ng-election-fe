import { ArrowRight } from "lucide-react"
import Link from "next/link"

function JoinCommunitySection() {
    return (
        <section className="my-14 px-4 lg:px-10 w-full lg:w-[85%] flex justify-center mx-auto max-w-[1280px]">
            <div className="flex flex-col lg:flex-row w-full">
                <div className="bg-primary w-full lg:w-1/2">
                    <div className="p-4 md:p-8">
                        <h3 className="tracking-[12.3px] text-2xl md:text-4xl text-white text-center font-bold py-2">ONE NAIJA FOR</h3>
                        <div className="p-3 bg-white text-3xl md:text-[40px] text-primary text-center font-bold">ELECTORAL REFORM</div>
                    </div>
                </div>
                <div className="flex justify-between items-center border-[1.5px] border-gray-400 rounded-b-md lg:rounded-bl-none lg:rounded-r-md w-full lg:w-1/2 px-8 pb-4">
                    <Link href={"#"} className="flex flex-col md:flex-row gap-3 w-full justify-between items-center cursor-pointer">
                        <div className="mt-4 lg:m-0">
                            <h3 className="text-primary text-2xl font-bold underline">Join the community</h3>
                            <p className="text-xl">Vote, report, elect</p>
                        </div>
                        <div><ArrowRight color="#285D2D" size={22} strokeWidth={3} /></div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default JoinCommunitySection
