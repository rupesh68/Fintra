import React from "react";

export default function Card2(props) {
  return (
    <div
      className={
        "w-4/5 h-1/5 bg-white border-2 border-[#00000040] rounded-[15px] shadow-lg p-4 flex flex-col justify-center  items-center mt-4 mb-4 self-center"
      }
    >
      <img
        className="object-center w-20 h-20"
        src="./src/assets/image 57.svg"
        alt=""
      />
      <div className="text-black font-montserrat text-base font-semibold text-center mt-2 ">
        Calculators
      </div>
      <div className="text-black font-montserrat text-xs font-normal     text-center mt-2 ">
        Grow your wealth periodically using our SIP Calculator
      </div>
    </div>
  );
}
