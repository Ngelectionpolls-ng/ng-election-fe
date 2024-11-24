import { newsReportImg } from "../../public/assets/images/home"
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
        
      </div>
    </section>
  )
}

export default NewsAndReports
