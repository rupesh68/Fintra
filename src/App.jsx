import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import { Routes, Route } from "react-router-dom";
import MutualFundPage from "./pages/MutualFundPage";

export default function App() {
  return (
    <div className="App bg-white  h-full w-full flex-col ">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calc" element={<CalculatorPage />} />
        <Route path="/mutualFund" element={<MutualFundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
