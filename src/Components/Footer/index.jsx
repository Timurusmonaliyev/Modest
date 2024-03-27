import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { CgFacebook } from "react-icons/cg";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#262626] relative text-white py-2">
      <div className="grid md:flex lg:flex gap-10 xl:flex justify-between items-center py-1 xl:px-8 px-6">
        <div>
          <p className="text-[16px]"> COPYRIGHT © 2084 COMPANY NAME | DESIGN: MODEST</p>
        </div>
        <div className="grid md:grid md:grid-cols-2 lg:flex lg:gap-10 md:gap-2 xl:flex justify-between xl:gap-4">
          <p className="flex justify-between gap-2 items-center">
            <CgFacebook className="w-8 h-8 rounded-full border-white border-2 p-2" size={20}/>
            <p> FACEBOOK</p>
          </p>
          <p className="flex justify-between gap-2 items-center">
            <AiOutlineTwitter className="w-8 h-8 rounded-full border-white border-2 p-2" />
           <p>  TWITTER</p>
          </p>
          <p className="flex justify-between gap-2 items-center">
            <AiOutlineYoutube className="w-8 h-8 rounded-full border-white border-2 p-2" />
           <p> YOUTUBE</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;