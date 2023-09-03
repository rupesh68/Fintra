import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import "./index.css";
import HomePage from "./pages/HomePage";
import CalculatorPage from "./pages/CalculatorPage";
import { Routes, Route } from "react-router-dom";
import MutualFundPage from "./pages/MutualFundPage";
import React, { useState, useEffect } from "react";
import ListOfMutualFundPage from "./pages/ListOfMutualFundPage";

import SipCalculator from "./pages/SipCalculatorPage";
import PostPage from "./pages/PostPage";

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

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("test");
    fetch("https://fintra.co.in/english?debug=true")
      .then((response) => response.json())
      .then((data) => {
        console.log(data["navigation"]);
        setPosts(data["navigation"]);
        console.log(posts[0].id);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="App bg-white  h-full w-full flex-col ">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="sipCalc" element={<SipCalculator />} />
        {posts.map((item, index) => (
          <Route
            key={index}
            path={item.href}
            element={<PostPage post={item} />}
          />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
