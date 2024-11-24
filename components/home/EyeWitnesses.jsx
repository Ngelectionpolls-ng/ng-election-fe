import Image from "next/image";
import Link from "next/link";
import backgroundImage from "../../public/assets/images/eyewitnessFlag.png"; // Replace with your actual image path

function EyeWitnesses() {
  return (
    <div className="bg-white">
      <div
        className="relative w-full px-[15%] h-screen flex items-center max-h-[591px] mt-20 justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <div className="absolute inset-0 bg-[#17633BCC]/80 h-full  opacity-40"></div>{" "}
        {/* Optional overlay for better text readability */}
        <div className="relative p-6 ">
          <h1 className="text-white text-4xl md:text-5xl text-left  !leading-[60px] font-semibold mb-12">
            Become an Eyewitness today and help curb misinformation. Together
            let's make our nation great again.
          </h1>

          <div className="flex justify-start p-3">
            <div className="flex justify-center space-x-2 bg-white rounded-[16px] p-1">
              <button className="px-6 py-3 bg-white text-[#39693D] rounded-full border border-gray-200 font-semibold">
                Become an eyewitness
              </button>
              <button className="px-6 py-3 bg-green-200 text-[#39693D] rounded-[16px] border border-green-400 font-semibold">
                Join Us →
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="px-[15%] py-16 w-full">
        <div className="  w-4/5">
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
    </div>
  );
}

export default EyeWitnesses;
