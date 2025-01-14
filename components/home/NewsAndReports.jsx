"use client"

import { newsReportImg } from "../../public/assets/images/home"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"

function NewsAndReports() {
  const newsAndReportContent = [
    {
      id: 0, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 1, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 2, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 3, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 4, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 5, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 6, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 7, 
      image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
  ]
  return (
    <section className="bg-white/90 w-screen flex flex-col justify-center items-center py-12 show-on-scroll">
      <div className="md:w-[1124px] px-4 md:px-0">
        <h2 className='text-xl md:text-3xl font-bold text-center md:text-left'>Election News & Reports</h2>
        <p className='text-gray-500 text-sm text-center md:text-left'>Latest installments in the Election Watxh Series. Click here to watch the Eyewitness Documentary</p>
      </div>
      <div className="w-full md:w-[1124px]  px-4 md:px-0">
        <div className="w-full">
            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
                >
                <CarouselContent className="">
                    {newsAndReportContent.map((item, index) => (
                        <CarouselItem key={index} className="p-2 basis-1/1 md:basis-1/4">
                            <div className="w-[230px] shadow-xl mx-1 flex flex-col rounded-md">

                              <Image width={'100%'} src={newsReportImg}  className="w-full rounded-t-md" alt="" />

                              <div className="p-3 flex flex-col space-y-4 bg-black/5">
                                
                                <h4 className="text-sm font-bold">{item.title}</h4>

                                <h4 className="text-xs">{item.date}</h4>

                                <p className="text-sm">{item.textContent}</p>

                                <Link href="#" className="text-blue-700 text-xs">Read more...</Link>
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
    </section>
  )
}

export default NewsAndReports
