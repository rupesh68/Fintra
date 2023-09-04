import React from "react";

export default function Button(props) {
  return (
    <div className="h-fit w-fit py-1 text-center rounded-[10px] text-black  border-black border-2 p-2 ">
      {props.name}
    </div>
  );
}
