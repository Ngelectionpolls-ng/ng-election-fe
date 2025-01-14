import Image from "next/image";

const initiativesData = [
  {
    title: "Eyewitness Report",
    description:
      "Enable logged-in users to upload videos or images and provide real-time reports from polling stations. Before being published, reports are authenticated.",
    image: "/assets/images/eyewitness-report.png",
  },
  {
    title: "Election Live Stream",
    description:
      "Provide citizens a clear and transparent view of the electoral process by live-streaming election results and activity from polling stations.",
    image: "/assets/images/education-livestream.png",
  },
  {
    title: "Post Election Reports",
    description:
      "Provide in-depth evaluations of voter turnout, election results, and any irregularities that have been recorded. For transparency’s sake, make sure these reports are available to the public.",
    image: "/assets/images/library.png",
  },
  {
    title: "Public Polls & Surveys",
    description:
      "Collect real-time data from citizens on election day to evaluate voter satisfaction and highlight areas for improvement.",
    image: "/assets/images/public-polls.png",
  },
  {
    title: "Rural Sensitization",
    description:
      "Conduct grass-roots campaigns to educate voters in rural areas on the importance of voting and how to avoid misleading information.",
    image: "/assets/images/rural-sensitisation.png",
  },
  {
    title: "Research & Development",
    description:
      "Actively develop the platform through researching new approaches to promote transparency, including collaboration with academic institutions and NGOs.",
    image: "/assets/images/research-dev.png",
  },
];

const Initiatives = () => {
  return (
    <section className="w-screen flex bg-black/5 justify-center py-16 show-on-scroll">
      <div className="flex flex-col items-center md:w-[1124px] px-4 md:px-0">
        <h2 className="text-3xl font-bold mb-8">Our Initiatives</h2>
        <div className="w-full md:w-[1124px] grid grid-cols-1 md:grid-cols-3 md:gap-24">
          {initiativesData.map((initiative, index) => (
            <div
              key={index}
              className="mb-24 group relative cursor-pointer overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out rounded-3xl"
            >
              <div className="relative w-full h-[500px]">
                <img
                  src={initiative.image}
                  alt={initiative.title}
                  className="rounded-lg w-full h-full"
                />
              </div>
              <div className="absolute inset-0 bg-[#17633BB2]/70 p-4 px-8 text-white flex flex-col justify-start">
                <div className="w-[85%] mt-10">
                  <h3 className="text-2xl font-bold text-left">
                    {initiative.title}
                  </h3>
                  <p className="text-base mt-2 text-left leading-10 transition-opacity duration-300 ease-in-out ">
                    {initiative.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Initiatives;
