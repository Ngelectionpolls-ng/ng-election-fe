import Link from 'next/link'
import { Button } from "../ui/button"

export default function ElectionDataSection() {
  return (
    <section className="bg-black/5 w-screen flex justify-center py-12 show-on-scroll overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between md:w-[1124px] w-full md:space-x-8" >
        {/* Text Section */}
        <div className="text-md w-full md:w-1/2 flex flex-col justify-center space-y-12 px-4 md:px-0 mb-8">
          <h1 className="font-bold text-gray-900 text-3xl text-center md:text-left">
            Nigerian Election data you can trust
          </h1>
          <p className="text-gray-600 mb-6 text-sm text-center md:text-left">
            Follow verified election results to stay updated.
          </p>
          <Button className="bg-green-900 text-white w-[200px] rounded-[5px] hover:bg-black block mx-auto md:ml-0">
              <Link href="/auth/create-account">
                  JOIN NOW FOR FREE
              </Link>
          </Button>
          <p className="text-gray-600 text-sm text-center md:text-left mb-8">
            Available in 774 LGAs and 141,300 Electoral Wards
          </p>
        </div>

        {/* Image Section */}
        
          <img
            src={"/assets/home/stay-informed.png"}
            className="w-screen md:w-1/2 scale-125"
            alt=""
          />
      </div>
    </section>
  );
}
