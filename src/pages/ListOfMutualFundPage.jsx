import React from "react";
import Footer from "../components/Footer";

import NavbarSearch from "../components/NavbarSearch";
import DropDown from "../components/DropDown";
import ListCard from "../components/ListCard";

const ListOfMutualFundPage = () => {
  return (
    <div className="w-[100vw] h-[100%] flex flex-col">


      <div>
      <NavbarSearch />
      </div>

      <div className="flex justify-center items-center">
        <div className="  flex justify-center mt-10 w-[256px] h-[29px]  items-center ">
          <h1 className="text-[#00000099] font-montserrat font-semibold text-[35px]">
            Credit Cards
          </h1>
        </div>
      </div>

      <div className="w-[135px]  ml-6 h-[7px] font-normal font-montserrat mt-10 text-[6px] leading-[7.31px]  flex ">
        <h3>
          Home{">"}Mutual Fund{">"}List of Mutual Funds
        </h3>
      </div>










      <div className=" flex justify-evenly mt-10">

        <DropDown name="Equity" />
        <DropDown name="Low Risk" />
        <DropDown name="Lumpsump" />
        <DropDown name="Large Cap" />
      </div>









      <div className="w-[83px] h-[10px] mt-16 ">
        <h2 className="text-[#5C5A5A] leading-[9.75px] text-[8px] font-semibold">Showing : 20 resuls</h2>
      </div>








      <div className="mt-5 mb-4 flex justify-center ">
        <ListCard />
      </div>
      <div className="mt-2 mb-4 flex justify-center">
        <ListCard />
      </div>
      <div className="mt-2 mb-4 flex justify-center">
        <ListCard />
      </div>
      <div className="mt-2 mb-4 flex justify-center">
        <ListCard />
      </div>
      <div className="mt-2 mb-4 flex justify-center">
        <ListCard />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ListOfMutualFundPage;
