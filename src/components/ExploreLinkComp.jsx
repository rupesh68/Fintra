import React from "react";

function ExploreLinks(props) {
  return (
    <div className="p-4  flex-col">
      <div className="mt-0 text-[#000000B8] mb-4 text-lg flex justify-start text-start font-montserrat font-semibold">
        {props.heading}
      </div>
      <div className="flex justify-start">
        <div className="flex flex-col">
          {props.arr.map((linkText) => {
            return (
              <div className="text-[#4040FA] font-montserrat text-sm font-normal m-1">
                {linkText}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default ExploreLinks;
