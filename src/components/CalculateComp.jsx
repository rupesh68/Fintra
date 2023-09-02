import React from "react";
import img1 from "../assets/image_1.svg";
import search from "../assets/Vector.svg";
import drawer from "../assets/Vector1.svg";

function CalculateComp() {
  return (
    <div className="flex-col p-4">
      <div className="mt-1 text-[#000000] text-sm flex justify-start text-start font-montserrat font-semibold">
        Investment amount <div className="text-[#FF0000] ml-1">*</div>
      </div>
      <input
        type="text"
        placeholder="Eg. 10000"
        className="w-full  text-black py-1 pl-2 pr-4  border-[#000000C7] border-[0.5px] rounded-[5px] outline-0 bg-white font-montserrat text-xs "
      />
      <div className="mt-2 text-[#000000] text-sm flex justify-start text-start font-montserrat font-semibold">
        Expected Rate of Return <div className="text-[#FF0000] ml-1">*</div>
      </div>
      <input
        type="text"
        placeholder="Eg. 12%"
        className="w-full text-black  py-1 pl-2 pr-4  border-[#000000C7] border-[0.5px] rounded-[5px] outline-0 bg-white font-montserrat text-xs  "
      />
      <div className="mt-2 text-[#000000] text-sm flex justify-start text-start font-montserrat font-semibold">
        Tenure (in years) <div className="text-[#FF0000] ml-1">*</div>
      </div>
      <input
        type="text"
        placeholder="Eg. 5"
        className="w-full text-black  py-1 pl-2 pr-4 mb-8 border-[#000000C7] border-[0.5px] rounded-[5px] outline-0 bg-white font-montserrat text-xs  "
      />
      <div className="flex justify-center">
        <button className="bg-[#00C6CA] mr-6 w-1/4 text-white font-montserrat text-xs rounded-[5px] py-1 px-4">
          Calculate
        </button>
        <button className="bg-[#00C6CA] ml-6 w-1/4 text-white font-montserrat text-xs rounded-[5px] py-1 px-4">
          Reset
        </button>
      </div>
    </div>
  );
}

export default CalculateComp;
//
