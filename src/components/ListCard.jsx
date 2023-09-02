import React from "react";
import img95 from "../assets/image 95.png";

import "../Style/global.css";

const ListCard = () => {
  return (
    <div className=" h-52 w-[100%] flex gap-10 items-center rounded-3xl border border-black">
      <div className="w-36 h-52   flex items-center justify-center">
        <img src={img95} alt="" className="w-16 rounded-xl " />
      </div>

      <div className="flex flex-col ">
        <div className="mr-20">
          <h3 className="text-[#5C5A5A]">Axis Small Cap Fund Direct Growth</h3>
        </div>
        <div className="flex gap-3 text-center">
          <h3 className="bg-[#00C6CAB8] px-2 rounded font-semibold text-xs flex items-center text-white">
            Small Cap
          </h3>
          <h3 className="bg-[#00C6CAB8] px-2 rounded font-semibold text-xs flex items-center text-white">
            Axix Mutual Fund
          </h3>
        </div>

        <div className="flex text-xs mt-4 ml-4 text-[#5C5A5A] gap-2 mr-10">
          <h4>Very High Risk | </h4>
          <h4> Equity | </h4>
          <h4> 5* | </h4>
          <div>
          <h4>25.73% | </h4>
          <h6 className="text-xs">1Y</h6>
          </div>

          <div>
          <h4>AUM</h4> <h4>Rs. 14252 Cr.</h4>
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-12 items-center ml-12">
          {/* <Button name="Apply Now" /> */}
          <button className="h-fit w-fit py-1 text-center rounded-[6px] text-white   bg-[#00C6CAB8]   listcard-btn-1 hover:bg-[#ffffff] hover:text-[#00C6CA] hover:border-[00C6CA] flex items-center">
            Apply Now
          </button>

          <button className="h-fit w-fit  py-1 text-center rounded-[6px] text-[#00C6CAB8]   bg-white border-[#00C6CAB8]   listcard-btn-2 hover:bg-[#00C6CA] hover:text-[#ffffff] hover:border-[#00C6CA] flex items-center">
            Add to Compare
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
