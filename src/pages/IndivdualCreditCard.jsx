import React from "react";
import Navbar from "../components/NavBar";
import img from "../assets/image 154.svg";
import img2 from "../assets/image 125.svg";
import StarRating from "../components/StarRating";
import img3 from "../assets/Vectorplus sign.svg";
import FeaturesCom from "../components/FeaturesCom";
import AboutComp2 from "../components/AboutComp2";
import FeaturesInfoComp from "../components/FeaturesInfoComp";
import CreditCard from "../components/CreditCard";
import Footer from "../components/Footer";
import FeesAndCharges from "../components/FeesAndCharges";

const IndivdualCreditCard = () => {
  return (
    <div className=" w-[100vw] h-[100%] rounded-[10px] flex flex-col">
      <div>
      <Navbar />
      </div>

      <div className="flex justify-center items-center">
        <div className="  flex justify-center mt-10 w-[256px] h-[29px]  items-center ">
          <h1 className="text-[#00000099] font-montserrat font-semibold text-[35px]">
            Credit Cards
          </h1>
        </div>
      </div>

      <div className="w-[240px]  ml-6 h-[10px] font-normal font-montserrat mt-10 text-[10px]  flex ">
        <h3>
          Home{">"}Mutual Fund{">"}List of Mutual Funds
        </h3>
      </div>

      <div className=" flex items-center gap-3 mt-5 ml-4">
        <div className="w-[49px] h-[45px] rounded-[10px] border flex justify-center items-center">
          <img className=" w-[41px] h-[39px] " src={img} alt="" />
        </div>

        <p className="font-montserrat font-semibold text-[#5C5A5A] text-[14px]">
          HDFC Regalia Gold
        </p>
      </div>

      <div className=" py-3 flex flex-col items-center ">
        <div className="w-[156px] h-[100px] rounded-[5px] ">
          <img src={img2} alt="" />
        </div>
        <div className="h-[18.38px] w-[100px] mt-3">
          <StarRating />
        </div>
      </div>

      <div className="flex  justify-center gap-6 py-5">
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

      <div className="mt-4">
        <FeaturesInfoComp />
      </div>

      <div className="mt-4">
        <FeesAndCharges />
      </div>

      <div className="mt-4">
        <div className="w-[100%] h-[100px] rounded-[10px]  border-solid border-[1px] border-black flex p-2 ">
          <p>HDFC Bank Regalia Rating & Reviews</p>
        </div>
      </div>

      <div className="mt-10">
        <p className=" font-montserrat font-semibold text-[20px] leading-[24.38px] ">
          Most Compared Credit Cards
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <CreditCard />
      </div>
      <div className="flex justify-center mt-8">
        <CreditCard />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default IndivdualCreditCard;
