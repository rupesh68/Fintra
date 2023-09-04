import React from "react";
import img95 from "../assets/image 95.png";
import Button from "./Button";

// import "../Style/global.css";

const ListCard = () => {
  return (
    <div className=" h-[106px] w-[326px] rounded-[15px] border-solid border-[1px] border-black flex">
      <div className=" flex items-center px-3 rounded-[15px]">
        <div className="w-[43px] h-[39px] rounded-[10px] bg-[#FFFFFF] border-solid border-[0.5px] border-[#D9D9D9] flex items-center justify-center ">
          <img src={img95} alt="" className=" w-[32px] h-[30.48px]" />
        </div>
      </div>

      <div className="rounded-[15px] w-[257px] ">
        <div className="w-[197px] h-[10px] py-1 ">
          <h3 className="text-[#5C5A5A] font-montserrat font-medium text-[11px] leading-[13.41px]">
            Axis Small Cap Fund Direct Growth
          </h3>
        </div>

        <div className="flex gap-2">
          <div className="w-[42px] h-[9px] rounded-[2px] bg-[#00C6CAB8] mt-2 flex justify-center items-center">
            <h3 className="w-[26px] h-[6px] font-montserrat font-semibold text-[5px] leading-[6.1px] text-[#ffffff]">
              Small Cap
            </h3>
          </div>

          <div className="w-[56px] h-[9px] rounded-[2px] bg-[#00C6CAB8] mt-2 flex justify-center items-center">
            <h3 className="w-[46px] h-[6px] font-montserrat font-semibold text-[5px] leading-[6.1px] text-[#ffffff]">
              Axis Mutual Fund
            </h3>
          </div>
        </div>

        <div className="mt-2 flex">
          <div className="w-[64px] h-[10px] ">
            <p className="text-[#5C5A5A] text-[8px] leading-[9.75px] font-montserrat font-medium">
              Very High Risk |{" "}
            </p>
          </div>

          <div className="w-[33px] h-[10px] ">
            <p className="text-[#5C5A5A] text-[8px] leading-[9.75px] font-montserrat font-medium">
              Equity |{" "}
            </p>
          </div>

          <div className="w-[27px] h-[10px] ">
            <p className="text-[#5C5A5A] text-[8px] leading-[9.75px] font-montserrat font-medium">
              5* |{" "}
            </p>
          </div>

          <div className="w-[32px] h-[10px] ">
            <p className="text-[#5C5A5A] text-[8px] leading-[9.75px] font-montserrat font-medium">
              25.73% |{" "}
            </p>
            <p className="text-[5px]">1Y</p>
          </div>

          <div className="w-[49px] h-[10px] ">
            <p className="text-[#5C5A5A] text-[8px] leading-[9.75px] font-montserrat font-medium">
              AUM
            </p>
            <h4 className="text-[#5C5A5A] text-[8px] leading-[9.75px] font-montserrat font-medium">
              Rs. 14252 Cr.
            </h4>
          </div>
        </div>

        <div className="flex gap-2 mt-8 justify-end px-3">
          <Button
            name="Apply Now"
            width="5px"
            height="h-[13px]"
            borderradius="rounded-[2px]"
            bg="bg-[#00C6CAB8]"
            displayflex="flex"
            justifycontent="justify-center"
            alignitems="items-center"
            textcolor="text-[#ffffff]"
            textsize="text-[8px]"
            fontweight="font-medium"
          />

          <Button
            name="Add to Compare"
            width="15px"
            height="h-[13px]"
            borderradius="rounded-[2px]"
            bg="bg-[#00C6CAB8]"
            displayflex="flex"
            justifycontent="justify-center"
            alignitems="items-center"
            textcolor="text-[#ffffff]"
            textsize="text-[8px]"
            fontweight="font-medium"
          />
        </div>
      </div>
    </div>
  );
};

export default ListCard;
