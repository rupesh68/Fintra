import React from "react";
import img1 from "../assets/image_1.svg";

import drawer from "../assets/Vector1.svg";
import SearchComponent from "./SearchBar";



const NavbarSearch = () => {
  return (
    <div>
      <nav className=" flex items-center py-5  top-0 z-20 bg-white rounded-t-lg p-4 border border-sky-500 justify-between ">
        <div className="flex flex-row  justify-between  gap-6">
          <img className="w-8 h-8 rounded-full" src={img1} alt="" />
          <div className="text-cyan-500 text-lg font-bold font-montserrat">
            Fintra{" "}
          </div>
        </div>
        <div className="flex flex-row  justify-between  gap-6">
          {/* <img className="w-8 h-8" src={search} alt="" /> */}
          <SearchComponent />

          <img className="w-8 h-8" src={drawer} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default NavbarSearch;
