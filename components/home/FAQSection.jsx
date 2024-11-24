
// function FAQSection() {
//   const faqs = [
//     {
//       id: 0,
//       question: "How is ngelectionpolls.org staffed?",
//       answer: `ngelectionpolls.org programs are directed by experts, who design and implement activities
//             in cooperation with other nongovernmental organizations, and partners across all nation in Africa.
//             Program directors have extensive experience in international affairs, public or government service,
//             and/or academe. There are approximately 50 employees at the headquarters and thousands more in
//             field offices around the world.`,
//     },
//     {
//       id: 1,
//       question: "How is ngelectionpolls.org funded?",
//       answer: `ngelectionpolls.org operates under a non-governmental organization, financed by private
//             donations from individuals, foundations, corporations, and international development assistance agencies.
//             Contributions by citizens and companies are tax-deductible as allowed by law. All donations of $1,000 or
//             more are published in our annual reports (including audited financial statements), available for public consumption.`,
//     },
//     {
//       id: 2,
//       question: "How do I volunteer as an eyewitness?",
//       answer: `You can sign up as an eyewitness reporter at ngelectionpolls.com`,
//     },
//     {
//       id: 3,
//       question: "How do I volunteer as a Polling unit agent?",
//       answer: `You can sign up as a polling unit agent at ngelectionpolls.com`,
//     },
//   ];
//   return (
//     <section className="py-10 sm:px-10 bg-white border-red-600">
//       <div className="mx-auto p-8 space-y-10 grid grid-cols-2 px-[10%] w-full">
//         <div className="text-left w-fill">
//           <p className="text-green-700 font-medium">FAQs</p>
//           <h2 className="text-4xl sm:text-5xl font-bold text-green-900 leading-tight">
//             Do You <br/> Have Any <br/> Question?
//             <br /> We have <br/> the Answers!
//           </h2>
//           <div className="flex">
//               <div className="flex justify-start mt-8 border-2 border-primary rounded-s-sm">
//                 <button className="border border-green-800 text-green-800 px-6 py-2 rounded-lg font-medium hover:bg-green-800 hover:text-white transition">
//                   For Further Enquiry <span className="font-bold">Contact Us</span>
//                 </button>
//               </div>
//           </div>
//         </div>

//         <div className="space-y-4 w-full max-w-[941px]">
//           {/* <div className="flex flex-col items-center mb-8">
//             <div className="py-3 px-5 flex items-center gap-2 w-fit text-primary border-2 border-[#E4E4E7] rounded-[48px]">
//               <CircleHelp strokeWidth={1.5} color="black" />
//               Faqs
//             </div>
//             <h2 className="text-black-500 mt-[10px] text-2xl md:text-3xl font-bold">
//               Your questions answered.
//             </h2>
//           </div> */}

//           <div className="w-full border-red-500">
//             <Accordion type="single" collapsible className="w-full">
//               {faqs.map((faq) => {
//                 return (
//                   <AccordionItem value={`item-${faq.id}`} key={faq.id}>
//                     <AccordionTrigger>{faq.question}</AccordionTrigger>
//                     <AccordionContent>{faq.answer}</AccordionContent>
//                   </AccordionItem>
//                 );
//               })}
//             </Accordion>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function FAQSection() {
  return (
    <div>
      FAQ
    </div>
  );
};
