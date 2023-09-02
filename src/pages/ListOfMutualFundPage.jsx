import React from "react";
import Footer from "../components/Footer";

import NavbarSearch from "../components/NavbarSearch";
import DropDown from "../components/DropDown";
import ListCard from "../components/ListCard";

const ListOfMutualFundPage = () => {
  return (
    <div className=" h-screen">
      <NavbarSearch />

      <div>
        <div className="text-[#00000099] font-semibold text-sm flex justify-center mt-10">
          <h1 className="">Mutual Fund</h1>
        </div>

        <div className="mt-10 mr-56 text-lg font-semibold">
          <h3>
            Home{">"}Mutual Fund{">"}List of Mutual Funds
          </h3>
        </div>
      </div>

      <div className="mt-10 flex gap-5">
        <DropDown name="Equity" />
        <DropDown name="Low Risk" />
        <DropDown name="Lumpsump" />
        <DropDown name="Large Cap" />
      </div>

      <div className="mt-7 mr-80 showing text-lg font-bold">
        <h2>Showing : 20 resuls</h2>
      </div>

      <div className="mt-10 mb-4 flex justify-center ">
        <ListCard />
      </div>
      <div className="mt-5 mb-4 flex justify-center">
        <ListCard />
      </div>
      <div className="mt-5 mb-4 flex justify-center">
        <ListCard />
      </div>
      <div className="mt-5 mb-4 flex justify-center">
        <ListCard />
      </div>
      <div className="mt-5 mb-4 flex justify-center">
        <ListCard />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default ListOfMutualFundPage;
