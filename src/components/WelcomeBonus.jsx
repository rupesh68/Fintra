import React from "react";

const WelcomeBonus = (props) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={props.img} alt="" />
      <h5 className="font-montserrat font-semibold ">{props.name}</h5>
    </div>
  );
};

export default WelcomeBonus;
