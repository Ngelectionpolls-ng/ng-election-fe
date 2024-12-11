import Link from 'next/link'
import { Button } from "../ui/button"
import Image from "next/image";
import electionImage from "/public/assets/images/election-data.png"; // Replace with actual path to your image
import electionImage2 from "/public/assets/images/election-data2.png"; // Replace with actual path to your image

export default function ElectionDataSection() {
  return (
    <section className="bg-black/5 w-screen flex justify-center py-12">
      <div className="flex justify-between md:w-[1024px] w-full space-x-8" >
        {/* Text Section */}
        <div className="text-md w-full md:w-1/2 flex flex-col justify-center space-y-12 pr-[15%]">
          <h1 className="font-bold text-gray-900 text-3xl">
            Nigerian Election data you can trust
          </h1>
          <p className="text-gray-600 mb-6 text-sm">
            Follow verified election results to stay updated.
          </p>
          <Button className="bg-green-900 text-white min-w-[100px] rounded-[5px] hover:bg-black">
              <Link href="/auth/create-account">
                  JOIN NOW FOR FREE
              </Link>
          </Button>
          <p className="text-gray-600 text-sm">
            Available in 774 LGAs and 141,300 Electoral Wards
          </p>
        </div>

        {/* Image Section */}
        
          <img
            src={"/assets/home/stay-informed.png"}
            className="w-full md:w-1/2"
            alt=""
          />
      </div>
    </section>
  );
}
