import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function StayInformed() {
  return (
    <section className="my-14 px-4 lg:px-10 w-full lg:w-[85%] flex  flex-col justify-center mx-auto max-w-[1280px]">
      <div className="mt-4 lg:m-0 flex justtify-center items-center flex-col gap-6">
        <h3 className="text-primary text-5xl font-bold text-center px-10">
          {"Stay Informed. Monitor Election Results in Real-Time."}
        </h3>
        <p className="text-xl text-primary">
          Join Millions of Nigerian citizens and well wishers of Nigerian of in
          tracking live and Recorded election results. Become an Eyewitness
          today. Lets come together and promote transparency and credibility.
        </p>
        <button className="bg-primary text-white w-auto text-center px-6 py-3 rounded-2xl max-w-[281px]">See election updates</button>
        <img src={"/stayInformed.png"} width={"100%"} height={100} alt="" />
      </div>
    </section>
  );
}

export default StayInformed;
