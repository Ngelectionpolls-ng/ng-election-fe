import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/assets/images/eyewitnessFlag.png"; // Replace with your actual image path

function EyeWitnesses() {
  return (
    <>
      <section className="bg-white w-screen flex justify-center">
        <div className="md:w-[1124px] w-full flex flex-col md:flex-row px-4 md:px-0" >
          <div className="w-full md:w-1/2 flex justify-right md:justify-center">
            <img src="/assets/home/Team-cuate.png" className="w-full" alt="" />
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-green-900 font-bold md:ml-[50%] md:text-right text-3xl">
              Become an Eyewitness today and help curb misinformation. Together lets make our nation great again.
            </h1>
          </div>
          
        </div>
      </section>
      
      <section className="bg-white w-screen flex justify-center">
        <div className="md:w-[1124px] py-16 w-full px-4 md:px-0">
          <div className="w-4/5">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              How to become an eyewitness
            </h2>
            <p className="text-gray-600 mb-16">
              We want to let you know that your security and privacy is our
              priority, and that your personal information will not be made public
              unless you permit it.
            </p>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-gray-400">01</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Click on the CTA buttons on the page.
                  </h3>
                  <p className="text-gray-600">
                    Clicking on the call to action opens the authentication page
                    where you can input your personal information.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-gray-400">02</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Verify your information and identify
                  </h3>
                  <p className="text-gray-600">
                    Your identity will be verified as we aim at curbing
                    misinformation and promoting transparency.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <span className="text-2xl font-bold text-gray-400">03</span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Start reporting news, events happening in your voting centers.
                  </h3>
                  <p className="text-gray-600">
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
