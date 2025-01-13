
"use client";

import React, {useEffect, useState} from 'react';
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../ui/carousel"


export default function SenatorialElections(){

    const candidates = [
        { name: 'APC', percentage: 59, votes: '343,000', color: 'bg-green-600', img: '/assets/images/apc.png' },
        { name: 'PDP', percentage: 14, votes: '223,000', color: 'bg-pink-600', img: '/assets/images/pdp.png' }        
    ];

    return (
        <div className="w-full flex flex-col">

            <div className="relative w-full flex justify-center">
                <svg viewBox="0 0 670 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="653" cy="281" r="13" fill="#65B765"></circle>
                    <circle cx="657" cy="323" r="12.5" fill="#83A811" stroke="black"></circle>
                    <circle cx="554" cy="279" r="13" fill="#65B765"></circle>
                    <circle cx="586" cy="279" r="13" fill="#65B765"></circle>
                    <circle cx="620" cy="280" r="13" fill="#65B765"></circle>
                    <circle cx="528" cy="323" r="13" fill="#044AAF"></circle>
                    <circle cx="560" cy="323" r="13" fill="#F98232"></circle>
                    <circle cx="593" cy="323" r="12.5" fill="#F98232" stroke="black"></circle>
                    <circle cx="625" cy="323" r="12.5" fill="#EFF970" stroke="black"></circle>
                    <circle cx="13" cy="322" r="13" fill="#5698F8"></circle>
                    <circle cx="17" cy="282" r="13" fill="#5698F8"></circle>
                    <circle cx="26" cy="241" r="13" fill="#5698F8"></circle>
                    <circle cx="41" cy="203" r="13" fill="#5698F8"></circle>
                    <circle cx="60" cy="166" r="13" fill="#5698F8"></circle>
                    <circle cx="84" cy="133" r="13" fill="#5698F8"></circle>
                    <circle cx="111" cy="103" r="13" fill="#5698F8"></circle>
                    <circle cx="143" cy="76" r="13" fill="#5698F8"></circle>
                    <circle cx="176" cy="54" r="13" fill="#5698F8"></circle>
                    <circle cx="214" cy="36" r="13" fill="#5698F8"></circle>
                    <circle cx="253" cy="23" r="13" fill="#5698F8"></circle>
                    <circle cx="294" cy="15" r="13" fill="#5698F8"></circle>
                    <circle cx="335" cy="13" r="13" fill="#5698F8"></circle>
                    <circle cx="377" cy="15" r="13" fill="#ED7672"></circle>
                    <circle cx="45" cy="322" r="13" fill="#5698F8"></circle>
                    <circle cx="50" cy="281" r="13" fill="#5698F8"></circle>
                    <circle cx="60" cy="240" r="13" fill="#5698F8"></circle>
                    <circle cx="77" cy="322" r="13" fill="#5698F8"></circle>
                    <circle cx="84" cy="279" r="13" fill="#5698F8"></circle>
                    <circle cx="96" cy="238" r="13" fill="#5698F8"></circle>
                    <circle cx="109" cy="322" r="13" fill="#5698F8"></circle>
                    <circle cx="116" cy="280" r="13" fill="#5698F8"></circle>
                    <circle cx="130" cy="240" r="13" fill="#5698F8"></circle>
                    <circle cx="141" cy="322" r="13" fill="#5698F8"></circle>
                    <circle cx="150" cy="278" r="13" fill="#5698F8"></circle>
                    <circle cx="167" cy="238" r="13" fill="#5698F8"></circle>
                    <circle cx="195" cy="202" r="13" fill="#5698F8"></circle>
                    <circle cx="180" cy="171" r="13" fill="#5698F8"></circle>
                    <circle cx="173" cy="134" r="13" fill="#5698F8"></circle>
                    <circle cx="160" cy="104" r="13" fill="#5698F8"></circle>
                    <circle cx="193" cy="82" r="13" fill="#5698F8"></circle>
                    <circle cx="210" cy="111" r="13" fill="#5698F8"></circle>
                    <circle cx="213" cy="145" r="13" fill="#5698F8"></circle>
                    <circle cx="150" cy="203" r="13" fill="#5698F8"></circle>
                    <circle cx="117" cy="200" r="13" fill="#5698F8"></circle>
                    <circle cx="100" cy="166" r="13" fill="#5698F8"></circle>
                    <circle cx="126" cy="133" r="13" fill="#5698F8"></circle>
                    <circle cx="143" cy="163" r="13" fill="#5698F8"></circle>
                    <circle cx="79" cy="200" r="13" fill="#5698F8"></circle>
                    <circle cx="229" cy="174" r="13" fill="#5698F8"></circle>
                    <circle cx="269" cy="153" r="13" fill="#5698F8"></circle>
                    <circle cx="313" cy="142" r="13" fill="#5698F8"></circle>
                    <circle cx="357" cy="142" r="13" fill="#5698F8"></circle>
                    <circle cx="356" cy="46" r="13" fill="#5698F8"></circle>
                    <circle cx="314" cy="46" r="13" fill="#5698F8"></circle>
                    <circle cx="291" cy="80" r="13" fill="#5698F8"></circle>
                    <circle cx="291" cy="113" r="13" fill="#5698F8"></circle>
                    <circle cx="252" cy="126" r="13" fill="#5698F8"></circle>
                    <circle cx="249" cy="91" r="13" fill="#5698F8"></circle>
                    <circle cx="272" cy="52" r="13" fill="#5698F8"></circle>
                    <circle cx="230" cy="64" r="13" fill="#5698F8"></circle>
                    <circle cx="379" cy="80" r="13" fill="#ED7672"></circle>
                    <circle cx="335" cy="78" r="13" fill="#5698F8"></circle>
                    <circle cx="335" cy="111" r="13" fill="#5698F8"></circle>
                    <circle cx="173" cy="322" r="13" fill="#5698F8"></circle>
                    <circle cx="184" cy="280" r="13" fill="#5698F8"></circle>
                    <circle cx="204" cy="241" r="13" fill="#5698F8"></circle>
                    <circle cx="234" cy="210" r="13" fill="#5698F8"></circle>
                    <circle cx="271" cy="187" r="13" fill="#5698F8"></circle>
                    <circle cx="313" cy="174" r="13" fill="#5698F8"></circle>
                    <circle cx="357" cy="174" r="13" fill="#5698F8"></circle>
                    <circle cx="417" cy="23" r="13" fill="#ED7672"></circle>
                    <circle cx="455" cy="36" r="13" fill="#ED7672"></circle>
                    <circle cx="492" cy="54" r="13" fill="#ED7672"></circle>
                    <circle cx="527" cy="76" r="13" fill="#ED7672"></circle>
                    <circle cx="559" cy="103" r="13" fill="#ED7672"></circle>
                    <circle cx="587" cy="133" r="13" fill="#ED7672"></circle>
                    <circle cx="610" cy="166" r="13" fill="#ED7672"></circle>
                    <circle cx="629" cy="203" r="13" fill="#ED7672"></circle>
                    <circle cx="644" cy="241" r="13" fill="#65B765"></circle>
                    <circle cx="401" cy="153" r="13" fill="#ED7672"></circle>
                    <circle cx="441" cy="173" r="13" fill="#ED7672"></circle>
                    <circle cx="475" cy="202" r="13" fill="#ED7672"></circle>
                    <circle cx="502" cy="237" r="13" fill="#ED7672"></circle>
                    <circle cx="520" cy="278" r="13" fill="#65B765"></circle>
                    <circle cx="539" cy="240" r="13" fill="#ED7672"></circle>
                    <circle cx="574" cy="238" r="13" fill="#ED7672"></circle>
                    <circle cx="609" cy="240" r="13" fill="#65B765"></circle>
                    <circle cx="593" cy="202" r="13" fill="#ED7672"></circle>
                    <circle cx="554" cy="199" r="13" fill="#ED7672"></circle>
                    <circle cx="518" cy="203" r="13" fill="#ED7672"></circle>
                    <circle cx="490" cy="171" r="13" fill="#ED7672"></circle>
                    <circle cx="528" cy="163" r="13" fill="#ED7672"></circle>
                    <circle cx="571" cy="165" r="13" fill="#ED7672"></circle>
                    <circle cx="543" cy="133" r="13" fill="#ED7672"></circle>
                    <circle cx="511" cy="105" r="13" fill="#ED7672"></circle>
                    <circle cx="496" cy="134" r="13" fill="#ED7672"></circle>
                    <circle cx="457" cy="145" r="13" fill="#ED7672"></circle>
                    <circle cx="460" cy="110" r="13" fill="#ED7672"></circle>
                    <circle cx="476" cy="82" r="13" fill="#ED7672"></circle>
                    <circle cx="438" cy="63" r="13" fill="#ED7672"></circle>
                    <circle cx="398" cy="51" r="13" fill="#ED7672"></circle>
                    <circle cx="421" cy="92" r="13" fill="#ED7672"></circle>
                    <circle cx="418" cy="125" r="13" fill="#ED7672"></circle>
                    <circle cx="378" cy="113" r="13" fill="#ED7672"></circle>
                    <circle cx="399" cy="187" r="13" fill="#ED7672"></circle>
                    <circle cx="436" cy="210" r="13" fill="#ED7672"></circle>
                    <circle cx="466" cy="241" r="13" fill="#ED7672"></circle>
                    <circle cx="486" cy="279" r="13" fill="#65B765"></circle>
                    <circle cx="496" cy="323" r="13" fill="#044AAF"></circle>
                        
                </svg>
                <Image src={"/assets/images/home/senate.png"} 
                       className="w-[150px] md:w-[200px] absolute -bottom-1 z-10"                         
                       width={300} height={150} 
                       alt="" />
            </div>

            
            <div className="w-full px-4 md:px-0">
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className=""
                    >
                    <CarouselContent className="w-screen md:w-full">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem key={index} className="py-8 basis-1/1 md:basis1/2">
                                <div className={`w-[250px] md:w-[230px] bg-gray-800 text-white flex flex-col p-4 rounded-xl shadow-lg space-y-3`} >                                
                                    {/* Title */}
                                    <div>
                                        <h2 className="text-xs font-semibold">PROJECTED SENATORIAL ELECTIONS WINNER Election</h2>
                                    </div>

                                    {/* Candidates List */}
                                    <div className="space-y-2">
                                        {candidates.map((candidate, index) => (
                                            <div key={index} className="flex items-center space-x-1">
                                                <Image
                                                    src={candidate.img}
                                                    alt={candidate.name}
                                                    width={24}
                                                    height={24}
                                                    className="rounded-full"
                                                />
                                                <p className="w-10 text-xs font-semibold">{candidate.name}</p>
                                                <div className="flex-1 h-3 bg-gray-300 rounded-full overflow-hidden max-w-[50%] grow">
                                                    <div
                                                    className={`h-full ${candidate.color} text-[10px] text-center text-white font-semibold`}
                                                    style={{ width: `${candidate.percentage}%` }}
                                                    >
                                                    {candidate.percentage}%
                                                    </div>
                                                </div>
                                                <p className="text-[8px] text-white">{candidate.votes} votes</p>
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <h2 className="text-xs font-semibold">Edo central senatorial distric election race</h2>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>

        </div>
    )
}