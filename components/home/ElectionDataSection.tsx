import Image from "next/image";
import electionImage from "/public/assets/images/election-data.png"; // Replace with actual path to your image
import electionImage2 from "/public/assets/images/election-data2.png"; // Replace with actual path to your image

export default function ElectionDataSection() {
  return (
    <div className="flex items-center justify-between max-w-6xl mx-auto px-4 py-16 space-x-8">
      {/* Text Section */}
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Nigerian Election data you can trust
        </h1>
        <p className="text-gray-600 mb-6">
          Follow verified election results to stay updated.
        </p>
        <button className="bg-green-700 text-white font-semibold py-2 px-6 rounded-lg mb-6">
          JOIN NOW FOR FREE
        </button>
        <p className="text-gray-600">
          Available in 3400 LGAs and 141,300 Electoral Wards
        </p>
      </div>

      {/* Image Section */}
      <div className="relative ">
        <div className="overflow-hidden rounded-full">
          <Image
            src={electionImage}
            alt="People voting in Nigeria"
            objectFit="cover"
            className="rounded-full"
            width={432}
          />
        </div>
      </div>
    </div>
  );
}
