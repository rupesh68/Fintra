import React from "react";

function ResultComp() {
  return (
    <div className="m-4 border-[#00C6CA] p-4 border-2 rounded-lg bg-[#00C6CA1A] flex-col">
      <div className="flex justify-between mx-2 my-4">
        <div className="text-black text-xs font-montserrat font-semibold">
          Future Value
        </div>
        <div className="text-[#00C6CA] text-xs font-montserrat font-semibold">
          ₹ 1,00,000
        </div>
      </div>
      <div className="flex justify-between mx-2 my-4">
        <div className="text-black text-xs font-montserrat font-semibold">
          Total Amount Deposited
        </div>
        <div className="text-[#00C6CA] text-xs font-montserrat font-semibold">
          ₹ 1,00,000
        </div>
      </div>
      <div className="flex justify-between mx-2 my-4">
        <div className="text-black text-xs font-montserrat font-semibold">
          Total Earnings
        </div>
        <div className="text-[#00C6CA] text-xs font-montserrat font-semibold">
          ₹ 1,00,000
        </div>
      </div>
    </div>
  );
}
export default ResultComp;
