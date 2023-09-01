import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import SearchComponent from "../components/SearchBar";
import img from "../assets/image 57.svg";

function MutualFundPage() {
  return (
    <div className="h-full flex-col items-center place-items-center">
      <div className="mt-4 text-[#00000094] text-2xl flex justify-center text-center font-montserrat font-semibold">
        Explore the Benefits of Diversification
      </div>

      {/* {Array(4).fill(
        <div className="flex justify-center ">
          <Card />
        </div>
      )} */}

      {Array(4).fill(
        <div className="flex justify-center ">
          <Card />
        </div>
      )}
      <div className="flex justify-center m-16">
        <Button name="View all AMCs" />
      </div>
      <div className="mt-4 mb-8 text-[#00000094] text-2xl flex justify-center text-center font-montserrat font-semibold">
        Curated Collections
      </div>
      {Array(4).fill(
        <div className="flex justify-center ">
          <Card isBlue={true} />
        </div>
      )}
      <div className="flex justify-center m-12">
        <Button name="Explore Now" />
      </div>
      <div className="mt-4 text-[#00000094] text-2xl flex justify-center text-center font-montserrat font-semibold">
        All the Mutual Funds in one place
      </div>
      {Array(4).fill(
        <div className="flex justify-center ">
          <Card />
        </div>
      )}
      <div className="flex justify-center m-12">
        <Button name="View all funds" />
      </div>
      <div className="mt-4 text-[#00000094] text-2xl flex justify-center text-center font-montserrat font-semibold">
        Get Started with Mutual Funds
      </div>
      <div className="justify-center flex">
        <div
          className={
            "w-3/5 h-1/5 bg-white rounded-[15px] shadow-lg p-4 flex flex-col justify-center  items-center mt-4 mb-4 self-center border-transparent"
          }
        >
          <img className="object-center w-20 h-20" src={img} alt="" />
        </div>
      </div>
      <div className="mt-1 text-[#000000] text-sm flex justify-center text-center font-montserrat font-semibold">
        How to invest in Mutual Funds?
      </div>
      <div className="mt-4 text-[#00000094] text-lg flex justify-center text-center font-montserrat font-semibold">
        Click to read more articles about Mutual Funds
      </div>
      {/* <SearchComponent /> */}
    </div>

    //   <Footer />
    // </div>
  );
}

export default MutualFundPage;
