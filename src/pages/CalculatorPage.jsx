import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Card2 from "../components/Card2";
import Button from "../components/Button";

function CalculatorPage() {
  return (
    <div className="h-full flex-col items-center place-items-center">
      <div className="mt-4 text-[#00C6CA] text-base flex justify-center text-center font-montserrat font-semibold ">
        Simplifying <br />
        Personal Finance
      </div>
      <div className="mt-4 text-[#00000094] text-xs flex justify-center text-center font-montserrat font-normal">
        India’s Most Loved Personal Finance Platform
      </div>
      {/* <div className="flex justify-center ">
        <Button />
      </div> */}
      {/* {Array(4).fill(
        <div className="flex justify-center ">
          <Card />
        </div>
      )} */}
      {Array(7).fill(
        <div className="flex justify-center ">
          <Card2 />
        </div>
      )}
    </div>

    //   <Footer />
    // </div>
  );
}

export default CalculatorPage;
