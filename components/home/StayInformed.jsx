import Image from "next/image";
import Link from "next/link";

function StayInformed() {
  return (
    <section className="my-14 px-4 lg:px-10 w-full lg:w-[85%] flex  flex-col justify-center mx-auto max-w-[1280px] show-on-scroll">
      <div className="mt-4 lg:m-0 flex justtify-center items-center flex-col gap-6">
        <h3 className="text-green-900 text-3xl font-bold text-center px-10">
          "Stay Informed. Monitor Election Results in Real-Time."
        </h3>
        <p className="text-sm text-green-900 text-center px-12 md:px-24">
          Join Millions of Nigerian citizens and well wishers of Nigerian of in
          tracking live and Recorded election results. Become an Eyewitness
          today. Lets come together and promote transparency and credibility.
        </p>
        <button className="bg-green-900 text-white w-auto text-center px-6 py-3 rounded-2xl max-w-[281px]">See election updates</button>
        <img src={"/assets/home/stay-informed.png"} className="w-[600px]" alt="" />
      </div>
    </section>
  );
}

export default StayInformed;
