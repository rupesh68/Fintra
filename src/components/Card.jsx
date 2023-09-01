import React from "react";
import img from "../assets/image 57.svg";
export default function Card(props) {
  if (props.isBlue) {
    return (
      <div
        className={
          "w-4/5 h-1/5 bg-white rounded-[15px] shadow-lg p-4 flex flex-col justify-center  items-center mt-4 mb-4 self-center border-[#00C6CA] border-[1px]"
        }
      >
        <img className="object-center w-20 h-20" src={img} alt="" />
        <div className=" text-black font-montserrat text-base font-semibold text-center mt-2">
          HDFC Mutual Funds
        </div>
      </div>
    );
  } else
    return (
      <div
        className={
          "w-4/5 h-1/5 bg-white rounded-[15px] shadow-lg p-4 flex flex-col justify-center  items-center mt-4 mb-4 self-center border-transparent"
        }
      >
        <img className="object-center w-20 h-20" src={img} alt="" />
        <div className=" text-black font-montserrat text-base font-semibold text-center mt-2">
          HDFC Mutual Funds
        </div>
      </div>
    );
}
