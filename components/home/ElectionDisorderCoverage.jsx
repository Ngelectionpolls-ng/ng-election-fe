"use client"
import Link from "next/link";
import Image from "next/image";
import {
    nationalAssemblyImg,
    robberyImg,
    thugAttackImg,
  } from "../../public/assets/images/home";

export default function ElectionDisorderCoverage(){
    const newContent = [
        {
          id: 0,
          icon: nationalAssemblyImg,
          heading: "Election Tribunal",
          content:
            "Incongruences in constitution and Tribunal judgements prompt protests and attacks on government facilities.",
        },
        {
          id: 1,
          icon: thugAttackImg,
          heading: "Lagos",
          content:
            "Thugs reigns supreme as widespread violence mars state house of assembly elections.",
        },
        {
          id: 2,
          icon: robberyImg,
          heading: "Edo",
          content:
            "Targeted attacks against political figures continue after elections",
        },
    ];
    return (
            <div className="w-full">
                <div className="mb-6">
                    <h3 className="text-xl font-bold">
                        Election-Related Disorder Coverage
                    </h3>
                    <p className="text-sm mt-2">
                        This list includes elections held last month, as well as those
                        planned during this month, and the next two months.
                    </p>
                    </div>
                    <div>
                    <div className="bg-green-900  p-3 text-white font-bold w-full">
                        <p className="px-2">Live Updates</p>
                    </div>
                    <div className="bg-gray-100 flex flex-col gap-8 p-4 text-sm">
                        {newContent.map((content) => {
                        return (
                            <div className="flex items-center gap-6" key={content.id}>
                            <Image
                                className="rounded-full border"
                                src={content.icon}
                                width={60}
                                height={60}
                                alt=""
                            />
                            <div className="flex flex-col">
                                <p><span className="font-bold">{content.heading}: </span> <span className="font-bold text-black">Nov 8 - 11:40PM ET </span></p>
                                <p>{content.content}</p>
                                <Link
                                    href={"#"}
                                    className="text-green-900 mt-2 hover:underline"
                                >
                                    Read more
                                </Link>
                            </div>
                            </div>
                        );
                        })}
                    </div>
                    <div className="bg-green-900  p-3 text-white font-bold w-full">
                        <p className="px-2">September 2023</p>
                    </div>
                </div>
            </div>
    );
}