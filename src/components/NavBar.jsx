import React from "react";

function Navbar() {
  return (
    <nav className=" flex items-center py-5  top-0 z-20 bg-white rounded-t-lg p-4 border border-sky-500 justify-between ">
      <div className="flex flex-row  justify-between  gap-6">
        <img
          className="w-8 h-8 rounded-full"
          src="./src/assets/image_1.svg"
          alt=""
        />
        <div className="text-cyan-500 text-lg font-bold font-montserrat">
          Fintra{" "}
        </div>
      </div>
      <div className="flex flex-row  justify-between  gap-6">
        <img className="w-8 h-8" src="./src/assets/Vector.svg" alt="" />
        <img className="w-8 h-8" src="./src/assets/Vector1.svg" alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
