"use client"

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

export default function FAQSection() {
  const faqs = [
    {
      id: 0,
      question: "How is ngelectionpolls.org staffed?",
      answer: `ngelectionpolls.org programs are directed by experts, who design and implement activities
            in cooperation with other nongovernmental organizations, and partners across all nation in Africa.
            Program directors have extensive experience in international affairs, public or government service,
            and/or academe. There are approximately 50 employees at the headquarters and thousands more in
            field offices around the world.`,
    },
    {
      id: 1,
      question: "How is ngelectionpolls.org funded?",
      answer: `ngelectionpolls.org operates under a non-governmental organization, financed by private
            donations from individuals, foundations, corporations, and international development assistance agencies.
            Contributions by citizens and companies are tax-deductible as allowed by law. All donations of $1,000 or
            more are published in our annual reports (including audited financial statements), available for public consumption.`,
    },
    {
      id: 2,
      question: "How do I volunteer as an eyewitness?",
      answer: `You can sign up as an eyewitness reporter at ngelectionpolls.com`,
    },
    {
      id: 3,
      question: "How do I volunteer as a Polling unit agent?",
      answer: `You can sign up as a polling unit agent at ngelectionpolls.com`,
    },
  ];
  return (
    <section className="bg-white/70 w-screen flex justify-center py-12 ">
      <div className="md:w-[1124px] flex flex-col md:flex-row space-y-8">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Image src={'/assets/home/FAQs-cuate.png'} alt="" width={200} height={300} className="block mx-auto md:ml-0" />
          <h2 className="text-4xl font-bold text-green-900 leading-tight -mt-12">
            Do You <br/> Have Any <br/> Question?
            <br /> We have <br/> the Answers!
          </h2>
          <div className="flex justify-center md:justify-start">
              <div className="flex justify-start mt-8 border-2 border-primary rounded-s-sm">
                <button className="border border-green-800 text-green-800 px-6 py-2 rounded-lg font-medium hover:bg-green-800 hover:text-white transition">
                  For Further Enquiry <span className="font-bold">Contact Us</span>
                </button>
              </div>
          </div>
        </div>

        <div className="space-y-4 w-full md:w-1/2 flex flex-col justify-center">
          
          <div className="w-full border-red-500">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq) => {
                return (
                  <AccordionItem value={`item-${faq.id}`} key={faq.id} className="border-none">
                    <AccordionTrigger className="rounded-2xl bg-gray-100 shadow-lg border-none my-2 px-4">{faq.question}</AccordionTrigger>
                    <AccordionContent className="p-4 border-none">{faq.answer}</AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

