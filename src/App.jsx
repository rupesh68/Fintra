import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import { Routes, Route } from "react-router-dom";
import MutualFundPage from "./pages/MutualFundPage";
import React from "react";
import ListOfMutualFundPage from "./pages/ListOfMutualFundPage";
import DropDown from "./components/DropDown";
import ListCard from "./components/ListCard";

import SipCalculator from "./pages/SipCalculatorPage";
import IndivdualCreditCard from "./pages/IndivdualCreditCard";
import StarRating from "./components/StarRating";
import WelcomeBonus from "./components/WelcomeBonus";
import AnnualFee from "./components/AnnualFee";
import AboutComp from "./components/AboutComp";
import AboutComp2 from "./components/AboutComp2";
import CreditCard from "./components/CreditCard";
import FeaturesCom from "./components/FeaturesCom";
import FeaturesInfoComp from "./components/FeaturesInfoComp";
import FeesAndCharges from "./components/FeesAndCharges";

// export default function App() {
//   return (
//     <div className="App bg-white  h-full w-full flex-col ">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/calc" element={<CalculatorPage />} />
//         <Route path="/mutualFund" element={<MutualFundPage />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// }

// const App = () => {
//   return (

//     <div className="App bg-white  h-full w-full flex-col ">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/calc" element={<CalculatorPage />} />
//         <Route path="/mutualFund" element={<MutualFundPage />} />
//         <Route path="/sipCalc" element={<SipCalculator />} />
//       </Routes>
//       <Footer />
//   );
// };

// export default App;

const App = () => {
  return (
    <div>
      <ListOfMutualFundPage />
      <IndivdualCreditCard />
      {/* <StarRating/> */}
      {/* <WelcomeBonus/> */}
      {/* <AnnualFee/> */}
      {/* <AboutComp2/> */}

      {/* <CreditCard/> */}
      {/* <FeaturesCom/> */}
      {/* <FeaturesInfoComp/> */}
      {/* <FeesAndCharges/> */}
    </div>
  );
};

export default App;
