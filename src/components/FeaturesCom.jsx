import React from "react";
import WelcomeBonus from "./WelcomeBonus";
import img from "../assets/VectorCheck.svg";
import img2 from "../assets/cancel.svg";

const FeaturesCom = (props) => {
  return (
    <div className="w-[90vw] h-[100%] rounded-[10px]  border-solid border-[1px] border-black ">
      <div className=" w-[229px] h-[15px]  m-2   flex items-center ">
        <p className="leading-[14.63px] font-semibold text-[12px] font-montserrat ">
          Key Features of Regalia Gold Card
        </p>
      </div>

      <div className="flex justify-around ">
        <div className=" w-fit">
          <div className=" flex items-center  w-32 mx-2  py-1 mt-2">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Welcome Bonus" />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Fule" />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Rewards" />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Cashback" />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Dining" />
            </div>
          </div>
        </div>
        <div className=" w-[164px]">
          <div className=" flex items-center  w-32 mx-2  py-1 mt-2">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img2} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Insurance" />
            </div>
          </div>
          <div className=" flex items-center   w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img2} />
            </div>
            <div className="w-[97px] h-[12px]   font-montserrat font-medium text-[10px] flex justify-start items-center leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Airport Lounge " />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img2} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Interest" />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img2} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Invite Only" />
            </div>
          </div>
          <div className=" flex items-center  w-32 mx-2  py-1">
            <div className=" w-[15px] h-[15px]">
              <WelcomeBonus img={img2} />
            </div>
            <div className="w-[97px] h-[12px]  font-montserrat font-medium text-[10px] flex justify-start leading-[12.19px] text-[#000000]">
              <WelcomeBonus name="Travel" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCom;
