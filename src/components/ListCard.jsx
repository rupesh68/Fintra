import React from "react";
import img95 from "../assets/image 95.png";
import Button from "./Button";
import '../Style/global.css';

const ListCard = () => {
  return (
    <div className=" h-52 w-[70vh] flex gap-20 items-center rounded-3xl border border-slate-950">
      <div className="w-36 h-52   flex items-center justify-center">
        <img src={img95} alt="" className="w-16 rounded-xl bg-orange-300" />
      </div>

      <div className="flex flex-col">
        <div className="">
          <h3 className="text-black mr-32 ">
            Axis Small Cap Fund Direct Growth
          </h3>
        </div>
        <div className="flex gap-3 text-center">
          <h3 className="bg-[#00C6CAB8] px-2 rounded font-semibold text-xs flex items-center text-white">
            Small Cap
          </h3>
          <h3 className="bg-[#00C6CAB8] px-2 rounded font-semibold text-xs flex items-center text-white">
            Axix Mutual Fund
          </h3>
        </div>

        <div className="flex text-xs mt-4">
          <h4>Very High Risk |</h4>
          <h4>Equity |</h4>
          <h4>5* |</h4>
          <h4>25.73% |</h4>
          <h4>AUM Rs. 14252 Cr.</h4>
        </div>
        <div className="flex justify-end gap-2 mt-12 mx-8">
          {/* <Button name="Apply Now" /> */}
          <button className="h-fit w-fit py-1 text-center rounded-[10px] text-white   bg-[#00C6CAB8]  w-32 listcard-btn-1">Apply Now</button>
          <button className="h-fit w-fit  py-1 text-center rounded-[10px] text-[#00C6CAB8]   bg-white border-[#00C6CAB8]  w-44 listcard-btn-2">Add to Compare</button>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
