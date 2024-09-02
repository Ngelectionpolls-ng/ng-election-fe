import { newsReportImg } from "@/public/assets/images/home"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

function NewsAndReports() {
  return (
    <section className='max-w-[1280px] mx-auto px-10 pt-4 pb-8 mt-10 bg-white md:mx-'>
      <div className="ml-9">
        <h2 className='text-xl md:text-3xl font-bold'>News & Reports</h2>
        <p className='text-gray-500'>Latest installments in the Election Watxh Series. Click here to watch the Eyewitness Documentary</p>
      </div>
      <div className="mt-5 px-10">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-1/4 overflow-hidden">
              <div className="border border-red-600">
                <div className="w-[290px] h-[170px] bg-cover bg-[50% bg-center" style={{ background: `url(${newsReportImg.src})`, backgroundPosition: '50%', backgroundSize: 'cover' }}></div>
                <div className="px-1 mt-6 flex flex-col gap-4">
                  <h5 className="font-bold">Violence mars one-third of Nigeria&apos;s post-election demonstrations | Eyewitness Insight</h5>
                  <p className="text-xs">5 February 2024</p>
                  <p className="text-sm">A disputed presidential election has rekindled Nigerian’s long - lasting political crisis, sparking a significant increase in...</p>
                  <Link href={"#"}>Read more <ChevronRight /></Link>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

      </div>
    </section>
  )
}

export default NewsAndReports
