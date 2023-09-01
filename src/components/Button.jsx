import React from "react";

export default function Button(props) {
  return (
    <div className="h-fit w-fit py-2 px-4 text-center rounded-[5px] text-black  border-black border-2 ">
      {props.name}
    </div>
  );
}
