import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/assets/images/eyewitnessFlag.png"; // Replace with your actual image path
import { Button } from "components/ui/button";
import { Separator } from "components/ui/separator";

function EyeWitnesses() {
  return (
    <>
      <section className="w-screen flex justify-center bg-gray-50 show-on-scroll overflow-hidden">
        <div className="md:w-[1124px] w-full flex flex-col md:flex-row px-4 md:px-0" >
          <div className="w-screen md:w-1/2 flex justify-right md:justify-center overflow-hidden">
            <img src="/assets/home/Team-cuate.png" className="w-full scale-150" alt="" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-green-900 font-bold md:ml-[50%] md:text-right text-3xl text-center">
              Become an Eyewitness today and help curb misinformation. Together lets make our nation great again.
            </h1>
            <div className="flex w-[350px] mx-auto md:mr-0 md:ml-auto mt-4 border-2 space-x-2 p-1 my-2 rounded-xl h-12 border-black/20 items-center shadow-lg bg-white md:self-right">
                <p className="w-1/2 text-xs text-green-900 pl-1" >Become an eye witness</p>                
                <Button className="w-1/2 rounded-xl border border-black/50 text-black hover:text-white font-semibold h-full bg-green-200"><Link href="/auth/signup">Join Us</Link></Button>                                                              
            </div>
          </div>
          
        </div>
      </section>
      
      <section className="bg-white w-screen flex justify-center show-on-scroll">
        <div className="md:w-[1124px] py-16 w-full px-4 md:px-0">
          <div className="w-full md:w-4/5">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center md:text-left">
              How to become an eyewitness
            </h2>
            <p className="text-gray-600 mb-16 text-center md:text-left">
              We want to let you know that your security and privacy is our
              priority, and that your personal information will not be made public
              unless you permit it.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-gray-400 hidden md:block">01</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                    Click on the CTA buttons on the page.
                  </h3>
                  <p className="text-gray-600 text-center md:text-left">
                    Clicking on the call to action opens the authentication page
                    where you can input your personal information.
                  </p>
                  {/* <Separator className="w-1/3 my-1 block mx-auto md:hidden bg-gray-400"/> */}
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-gray-400 hidden md:block">02</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                    Verify your information and identify
                  </h3>
                  <p className="text-gray-600 text-center md:text-left">
                    Your identity will be verified as we aim at curbing
                    misinformation and promoting transparency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-gray-400 hidden md:block">03</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center md:text-left">
                    Start reporting news, events happening in your voting centers.
                  </h3>
                  <p className="text-gray-600 text-center md:text-left">
                    As an eyewitness, you will join other well-meaning Nigerians
                    and non-Nigerians in updating the public with verified
                    information on the latest occurrences in your voting area or
                    center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EyeWitnesses;
