import React from "react";
import Card2 from "../components/Card2";
import { useNavigate } from "react-router-dom";

function CalculatorPage() {
  const navigate = useNavigate();
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
        <div
          className="flex justify-center hover:cursor-pointer"
          onClick={() => navigate("/sipCalc", { replace: true })}
        >
          <Card2 />
        </div>
      )}
    </div>

    //   <Footer />
    // </div>
  );
}

export default CalculatorPage;
