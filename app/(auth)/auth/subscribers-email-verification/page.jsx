"use client";
import Image from "next/image";
import { postData } from "@/services/api/axiosAuth";

const SubscribersEmailVerification = () => {
  return (
    <div className="min-h-screen flex flex-col items-center px-5  bg-white px-[10%]">
      {/* Header */}
      <div className="w-full max-w-xl p-4 bg-green-700 text-white  !rounded-t-2xl mt-5">
        <div className="flex items-center justify-between">
          <Image
            src={"/Nigelctionpolls 1.svg"}
            width={250}
            height={50}
            alt="NG Election logo"
            className="w-[140px] h-auto cursor-pointer"
          />
        </div>
      </div>

      {/* Email Verification Section */}
      <div className="w-full max-w-xl bg-white shadow-md rounded-b-md p-6 text-center px-[10%]">
        <h2 className="text-3xl font-bold mb-12">EMAIL VERIFICATION</h2>

        <div className="text-leftflex flex-col gap-12 mb-20">
          <p className="text-gray-700 mb-6">
            Hi Subscriber,
            <br />
          </p>
          <p className="text-gray-700 mb-6">
            Thank you so much for subscribing to{" "}
            <strong>ngelectionpolls</strong>!
          </p>

          <p className="text-gray-700 mb-6">
            The next step is to activate your subscription by clicking on the
            link below:
          </p>
        </div>

        {/* Verify Button */}
        <div className="flex justify-center mt-20 cursor-pointer">
          {/* <button className="px-6 py-3 bg-green-500 text-white font-bold text-lg rounded-full shadow-md hover:bg-green-600 transition">
            CLICK TO VERIFY EMAIL →
          </button> */}
          <Image
            className="my-20 hover:cursor-pointer"
            src={"/Button.png"}
            width={350}
            height={150}
            alt="NG Election logo"
          />
        </div>

        {/* Footer Message */}
        <p className="text-gray-500 text-sm mt-20">
          Don’t hesitate to get in touch should you need any assistance
        </p>
        <a
          href="mailto:support@ngelectionpolls.ng"
          className="text-blue-500 underline text-sm"
        >
          support@ngelectionpolls.ng
        </a>
      </div>

      {/* Footer Button */}
    </div>
  );
};
export default SubscribersEmailVerification;
