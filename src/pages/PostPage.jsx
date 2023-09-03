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
    return <SipCalculator />;
  }
};
export default PostPage;
