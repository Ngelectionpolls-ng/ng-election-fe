import { CircleHelp } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"
import Link from "next/link"
import { Button } from "../ui/button"

function FAQSection() {
    const faqs = [
        {
            id: 0,
            question: "How is ngelectionpolls.org staffed?",
            answer: `ngelectionpolls.org programs are directed by experts, who design and implement activities
            in cooperation with other nongovernmental organizations, and partners across all nation in Africa.
            Program directors have extensive experience in international affairs, public or government service,
            and/or academe. There are approximately 50 employees at the headquarters and thousands more in
            field offices around the world.`
        },
        {
            id: 1,
            question: "How is ngelectionpolls.org funded?",
            answer: `ngelectionpolls.org operates under a non-governmental organization, financed by private
            donations from individuals, foundations, corporations, and international development assistance agencies.
            Contributions by citizens and companies are tax-deductible as allowed by law. All donations of $1,000 or
            more are published in our annual reports (including audited financial statements), available for public consumption.`
        },
        {
            id: 2,
            question: "How do I volunteer as an eyewitness?",
            answer: `You can sign up as an eyewitness reporter at ngelectionpolls.com`
        },
        {
            id: 3,
            question: "How do I volunteer as a Polling unit agent?",
            answer: `You can sign up as a polling unit agent at ngelectionpolls.com`
        },
    ]
    return (
        <section className="py-10 px-4 sm:px-10 md:px-20 bg-white">
            <div className="flex flex-col items-center mb-8">
                <div className="py-3 px-5 flex items-center gap-2 w-fit text-primary border-2 border-[#E4E4E7] rounded-[48px]">
                    <CircleHelp strokeWidth={1.5} color="black" />
                    Faqs
                </div>
                <h2 className="text-black-500 mt-[10px] text-2xl md:text-3xl font-bold">Your questions answered.</h2>
            </div>
            <div className="lg:max-w-[60%] mx-auto">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq) => {
                        return (
                            <AccordionItem value={`item-${faq.id}`} key={faq.id}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        )
                    })}
                </Accordion>
            </div>
            <div className="flex flex-col gap-2 items-center mt-10">
                Still have a question?
                <Link href={'/contact-us'}>
                    <Button variant='outline' className="rounded-md text-primary font-normal">Contact Us</Button>
                </Link>
            </div>

        </section>
    )
}

export default FAQSection
