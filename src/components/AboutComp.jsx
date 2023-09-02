import React from "react";

function AboutComp(props) {
  return (
    <div className="p-4  flex-col">
      <div className="mt-0 text-black mb-4 text-sm flex justify-center text-start font-montserrat font-semibold">
        {props.heading}
        <br />
      </div>
      <div className="mt-0 text-black mb-4 text-xs flex justify-center text-justify font-montserrat font-normal">
        {props.content}
        <br />
      </div>
    </div>
  );
}
export default AboutComp;
