import React from "react";
import CalculateComp from "../components/CalculateComp";
import illus1 from "../assets/illus1.png";
import ResultComp from "../components/ResultComp";
import ExploreLinks from "../components/ExploreLinkComp";
import AboutComp from "../components/AboutComp";


function SipCalculator() {
  return (
    <div className="flex-col h-full w-full ">
    
      <div className="mt-4 text-[#00000094] text-2xl flex justify-center text-center font-montserrat font-semibold">
        Sip Calculator
      </div>
      <div className="flex justify-center">
        <img src={illus1} />
      </div>
      <div className="mt-1 text-[#000000] text-sm flex justify-center text-center font-montserrat font-semibold mx-2">
        Grow your wealth periodically using our SIP calculator
      </div>
      <div className="bg-gray-400 flex justify-center mx-12 my-2 h-36 font-montserrat text-center items-center">
        Advertisement
      </div>
      <div className="flex justify-center">
        <hr className="w-full bg-black m-2" />
      </div>
      <CalculateComp />
      <ResultComp />
      <hr className="bg-grey m-2" />
      <ExploreLinks
        heading="Explore Other Popular Calculators"
        arr={[
          "EMI Calculator",
          "Sukanya Samridhi Yojana Calculator",
          "Home Loan Calculator",
          "Income Tax Calculator",
        ]}
      />
      <hr className="bg-grey m-2" />
      <AboutComp
        heading="About Fintra’s SIP Calculator "
        content="Fintra’s SIP calculator is a simple tool to compute returns made on your SIP primarily on your mutual fund investments. This is an approximate return and the actual return may vary due to tax, exit loads, expense ratio, etc. Fintra encourages you to invest in mutual fund via SIP as it brings in financial discipline and inculcates the habit of saving. Most importantly you will benefit from the power of compounding when you invest in Mutual Funds via SIP.
"
      />
      <ExploreLinks
        heading="You may also be Interested in -"
        arr={[
          "Top 10 Mutual Fund SIPs to grow your wealth ",
          "Advantages of SIP over Lumpsump investment",
          "Top 10 Mutual Fund SIPs to grow your wealth ",
          "",
        ]}
      />
      <></>
    </div>
  );
}

export default SipCalculator;
