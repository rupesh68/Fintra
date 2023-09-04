import React from "react";
import HomePage from "./HomePage";
import MutualFundPage from "./MutualFundPage";
import CalculatorPage from "./CalculatorPage";
import SipCalculator from "./SipCalculatorPage";

const PostPage = ({ post }) => {
  if (post.id === "home") {
    return <HomePage />;
  } else if (post.id === "mutual-funds") {
    return <MutualFundPage />;
  } else if (post.id === "tools") {
    return <CalculatorPage />;
  } else {
    return (
      <div className="h-screen p-4 justify-center text-center items-center place-content-center text-black font-montserrat">
        Page Under Development
      </div>
    );
  }
};
export default PostPage;
