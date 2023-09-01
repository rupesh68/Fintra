import React from "react";
import Footer from "../components/Footer";
// import Navbar from "../components/NavBar";
import NavbarSearch from "../components/NavbarSearch";
import DropDown from "../components/DropDown";
import ListCard from "../components/ListCard";

const ListOfMutualFundPage = () => {
  return (
    <div className=" h-screen">
      <NavbarSearch />

      <div className="text-[#00000099] font-semibold text-sm flex justify-center mt-10">
        <h1 className="">Mutual Fund</h1>
      </div>

      <div className="mt-10 mr-[200px]  text-xs">
        <h3>Home{'>'}Mutual Fund{'>'}List of Mutual Funds</h3>
      </div>

      <div className="mt-10 flex gap-5 drop">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>

      <div className="mt-7 showing">
        <h2>Showing : 20 resuls</h2>
      </div>

      

      <div className="mt-10 mb-4 ">
        <ListCard />
        </div>
        <div className="mt-5 mb-4">
        <ListCard />
        </div>
        <div className="mt-5 mb-4">
        <ListCard />
        </div>
        <div className="mt-5 mb-4">
        <ListCard />
        </div>
        <div className="mt-5 mb-4">
        <ListCard />
        </div>
        


      {/* <Footer/> */}
    </div>
  );
};

export default ListOfMutualFundPage;
