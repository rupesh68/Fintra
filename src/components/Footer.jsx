import React from "react";
import img1 from "../assets/image_1.svg";
import linkedIn from "../assets/linkedin.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import messenger from "../assets/messenger.svg";
import youtube from "../assets/youtube.svg";
import gplay from "../assets/gplay.png";
import apple from "../assets/appstore.png";
import heart from "../assets/heart.svg";

function Footer() {
  return (
    <div className="flex-col bottom-0 h-fit   rounded-tl-[15px] rounded-tr-[15px] bg-black bg-opacity-75">
      <div className="flex">
        <div className="flex-col flex-1 place-content-evenly">
          <div className="inline-flex mt-4 ml-4 gap-4">
            <img className="w-8 h-8 rounded-full" src={img1} alt="" />
            <div className="text-cyan-500 text-[18px] font-bold font-montserrat ">
              Fintra
            </div>
          </div>
          <div className="text-white text-[8px] font-medium flex ml-4 mt-2 font-montserrat">
            Address: Plot No, 4th Floor, Sri Dheera's North East, 101, Road
            Number,2, Kakatiya Hills, Madhapur, Telangana - 500033
          </div>
          <div className="flex flex-row gap-3  m-4">
            <img className="w-4 h-4" src={linkedIn} alt="" />
            <img className="w-4 h-4" src={insta} alt="" />
            <img className="w-4 h-4" src={twitter} alt="" />
            <img className="w-4 h-4" src={messenger} alt="" />
            <img className="w-4 h-4" src={youtube} alt="" />
          </div>
        </div>

        <div className="flex-col flex-1   gap-2 mt-4">
          <div className="inline-flex flex-col ml-4 mb-4">
            <div className="font-medium text-xs font-montserrat">About</div>
            <div className="font-medium text-xs font-montserrat">Blog</div>
            <div className="font-medium text-xs font-montserrat">Careers</div>
            <div className="font-medium text-xs font-montserrat">
              Company Policy
            </div>
            <div className="font-medium text-xs font-montserrat">
              Help and support
            </div>
          </div>

          <div className="flex">
            <img className="" src={gplay} alt="" />
            <img className="" src={apple} alt="" />
          </div>
        </div>
      </div>
      <div className="w-20"></div>
      <div className="flex-col flex-1">
        <div className="w-screen  border border-black border-opacity-40 mt-1"></div>
        <div className="ml-8 mt-4 mb-4 mr-8 justify-start flex place-content-center items-center">
          <img
            className="object-center w-4 h-4 mr-2"
            src="./src/assets/ic_baseline-copyright.svg"
          />
          <div className="font-medium text-lg mr-2 font-montserrat">
            Fintra 2023
          </div>
          <div className="font-medium text-sm font-montserrat">
            Crafted with
          </div>
          <img className="object-center w-4 h-4 ml-2 mr-2" src={heart} />
          <div className="font-medium text-sm font-montserrat">in India</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
