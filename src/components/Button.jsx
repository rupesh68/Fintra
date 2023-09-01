import React from "react";

export default function Button(props) {
  return (
    <div className="h-fit w-fit py-1 text-center rounded-[10px] text-black  border-black bg-[#00C6CAB8] border-2 w-36 ">
      {props.name}
    </div>
  );
}
