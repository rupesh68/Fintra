import React from "react";
import Navbar from "../components/NavBar";

import img3 from "../assets/Vectorplus sign.svg";
import FeaturesCom from "../components/FeaturesCom";
import AboutComp2 from "../components/AboutComp2";
import FeaturesInfoComp from "../components/FeaturesInfoComp";
import CreditCard from "../components/CreditCard";
import Footer from "../components/Footer";
import FeesAndCharges from "../components/FeesAndCharges";
import CreditCardHeading from "../components/CreditCardHeading";
import NavbarSearch from "../components/NavbarSearch";

const IndivdualCreditCard = () => {
  return (
    <div className=" rounded-[10px] flex flex-col justify-center">
      <div>
        <NavbarSearch />
      </div>

      <div>
        <CreditCardHeading />
      </div>

      <div className="flex  justify-center gap-6 mt-10 w-[90vw]">
        <div className="w-[131px] h-[32px] bg-[#00C6CA] rounded-[5px] flex items-center justify-center">
          <button className="bg-[#00C6CA]  text-[#FFFFFF] font-montserrat text-[14px] w-[128px] h-[30px]  rounded-[5px] flex justify-center items-center">
            Apply Now
          </button>
        </div>
        <img className="cursor-pointer" src={img3} alt="" />
      </div>

      <div className="flex justify-center mt-8">
        <FeaturesCom />
      </div>

      <div className="flex justify-center mt-4">
        <AboutComp2 />
      </div>

      <div className="mt-4 flex justify-center">
        <FeaturesInfoComp />
      </div>

      <div className="mt-4 flex justify-center">
        <FeesAndCharges />
      </div>

      <div className="mt-4 flex justify-center">
        <div className="w-[90vw] h-[100px] rounded-[10px]  border-solid border-[1px] border-black flex p-2 ">
          <p>HDFC Bank Regalia Rating & Reviews</p>
        </div>
      </div>

      <div className="flex  justify-center  mt-10 w-[90vw]">
        <p className=" font-montserrat font-semibold text-[20px] leading-[24.38px] ">
          Most Compared Credit Cards
        </p>
      </div>

      <div className="flex justify-center mt-8 ">
        <CreditCard />
      </div>
      <div className="flex justify-center mt-8">
        <CreditCard />
      </div>

      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
};

export default IndivdualCreditCard;
