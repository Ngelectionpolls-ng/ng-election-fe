import { newsReportImg } from "@/public/assets/images/home"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function NewsAndReports() {
  const newsAndReportContent = [
    {
      id: 0, image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 1, image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 2, image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 3, image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
    {
      id: 4, image: newsReportImg,
      title: "Violence mars one-third of Nigeria’s post-election demonstrations | Eyewitness Insight",
      textContent: "A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...",
      date: "5 February 2024"
    },
  ]
  return (
    <section className='max-w-[1280px] mx-auto px-0 sm:px-10 pt-4 pb-8 mt-10 bg-white md:mx-'>
      <div className="ml-9">
        <h2 className='text-xl md:text-3xl font-bold'>News & Reports</h2>
        <p className='text-gray-500'>Latest installments in the Election Watxh Series. Click here to watch the Eyewitness Documentary</p>
      </div>
      <div className="mt-5 px-10">
        <Carousel>
          <CarouselContent>
            {newsAndReportContent.map((data) => {
              return (
                <CarouselItem className="basis-11/12 md:basis-1/4 overflow-hidden" key={data.id}>
                  <div className="max-w-fit rounded-md border-b bg-[#f7f7f7] border-gray-900 pb-6 shadow-md">
                    <div className="w-full h-[170px] bg-cover rounded-tl-md rounded-tr-md  bg-[50% bg-center" style={{ background: `url(${data.image.src})`, backgroundPosition: '50%', backgroundSize: 'cover' }}></div>
                    <div className="px-2 mt-6 flex flex-col gap-4">
                      <h5 className="font-bold">{data.title}</h5>
                      <p className="text-xs">{data.date}</p>
                      <p className="text-sm">{data.textContent}</p>
                      <Link href={"#"} className="flex items-center text-sm leading-none gap-1">Read more<span><ChevronRight size={16} /></span> </Link>
                    </div>
                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}

export default NewsAndReports
