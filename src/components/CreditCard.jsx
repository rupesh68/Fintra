import React from "react";
import img from "../assets/image 125.svg";
import Button from "./Button";

const CreditCard = () => {
  return (
    <div className=" h-[100%] w-[328px] rounded-[15px] shadow-xl">
      <div className="flex justify-center pt-6 pb-1">
        <img className="w-[220px] h-[142.4px]" src={img} alt="" />
      </div>
      <div className=" flex justify-center">
        <p className="w-[145px] h-[11px] font-montserrat font-semibold mt-2 items-center text-[14px] text-[#5C5A5A] leading-[17.07px]">
          HDFC Regalia Gold
        </p>
      </div>

      <div className=" mt-2 mb-5 p-5  flex flex-col font-montserrat  ">
        <div className="flex justify-start gap-x-[70px] ">
          <p className="text-xs text-[#00C6CA] font-medium">Joining Fees</p>
          <p className="text-xs mr-10 text-[#5C5A5A] font-medium">
            Rs. 500+GST
          </p>
        </div>
        <div className="flex justify-start mt-2 p-4  bg-red-500">
          <p className="text-xs text-[#00C6CA] font-semibold">Rewards Rate </p>
          <div className="flex bg-black ml-16">
          <p className="text-xs text-[#00C6CA] font-medium">5% cashback at select partner online merchants and 1% cashback</p>
        </div>
        </div>
      </div>

      <div className="flex justify-around  p-5">
        <button className="bg-white border-[#00C6CA] text-[#00C6CA] text-[14px] w-[128px] h-[30px]  rounded-[5px] flex justify-center items-center">
          View Details
        </button>
        <button className="bg-[#00C6CA]  text-[#FFFFFF] text-[14px] w-[128px] h-[30px]  rounded-[5px] flex justify-center items-center">
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default CreditCard;
