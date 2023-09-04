import React from 'react'
import img from "../assets/image 154.svg";
import img2 from "../assets/image 125.svg";
import StarRating from "../components/StarRating";

const CreditCardHeading = () => {
  return (



<div className="">

<div className="flex justify-center items-center">
  <div className="  flex justify-center mt-10 w-[256px] h-[29px]  items-center ">
    <h1 className="text-[#00000099] font-montserrat font-semibold text-[35px]">
      Credit Cards
    </h1>
  </div>
</div>

<div className="w-[240px]  ml-6 h-[10px] font-normal font-montserrat mt-10 text-[10px]  flex ">
  <h3>
    Home{">"}Mutual Fund{">"}List of Mutual Funds
  </h3>
</div>

<div className=" flex items-center gap-3 mt-5 ml-4">
  <div className="w-[49px] h-[45px] rounded-[10px] border flex justify-center items-center">
    <img className=" w-[41px] h-[39px] " src={img} alt="" />
  </div>

  <p className="font-montserrat font-semibold text-[#5C5A5A] text-[14px]">
    HDFC Regalia Gold
  </p>
</div>

<div className=" py-3 flex flex-col items-center ">
  <div className="w-[156px] h-[100px] rounded-[5px] ">
    <img src={img2} alt="" />
  </div>
  <div className="h-[18.38px] w-[100px] mt-3">
    <StarRating />
  </div>
</div>



</div>



  )
}

export default CreditCardHeading