import Map from "./Map";
import React from "react";

function Hero() {
  return (
    <div className="" style={{ backgroundColor: "rgba(0,0,0,.3)" }}>
      <div
        className="relative bg-[#F2F2F2] flex flex-col items-center w-full"
        style={{
          backgroundImage: `url('/assets/images/home/background.jpeg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Map />
        <div className="absolute left-[80px] top-[200px] w-[300px] hidden md:block">
          <div className="w-full shadow-2xl">
            <div className="bg-white rounded-tl-xl rounded-tr-xl p-2 border-b-2 border-primary pt-6">
              <h3 className="font-bold text-lg">PRESIDENTIAL</h3>
              <p className="text-sm">Election results</p>
            </div>
            <select className="w-full px-5 text-[11px] py-2 bg-white ">
              <option>Select Year</option>
              <option>2027</option>
              <option>2031</option>
              <option>2035</option>
            </select>
          </div>
          <div className="bg-white border-l-2 mt-2 border-[#A5E2AC] text-[10px] flex items-center p-2 shadow-md rounded-bl-xl rounded-br-xl">
            Click on a state to view election and report details
          </div>
        </div>
        <div className="md:absolute bottom-4 md:left-[80px]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <div className="size-4 bg-primary"></div>Past elections
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="size-4 bg-orange-400"></div>Upcoming elections
            </div>
          </div>
        </div>
      
      </div>
    </div>
  );
}

export default Hero;
