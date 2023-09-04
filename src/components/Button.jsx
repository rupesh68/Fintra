import React from "react";


export default function Button({ bg, bordercolor, name,textcolor,borderradius, textsize,width,height,alignitems,justifycontent,displayflex, py,p,fontweight}) {





  return (
    // <div className="h-fit w-fit py-1 text-center rounded-[10px] text-black  border-black border-2 p-2">
    //   {props.name}
      
    // </div>
    <button
     
borderradius="rounded-[10px]"
className={`${bg}  ${borderradius} ${textcolor}   ${bordercolor} ${textsize} ${width} ${fontweight} ${height} ${displayflex}  ${justifycontent} ${alignitems} ${py} ${p} border-1  cursor-pointer font-montserrat`}
    >
      {name}
    </button>
  );
}
