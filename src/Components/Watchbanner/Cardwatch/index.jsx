import { AiOutlineFileText } from "react-icons/ai";
import React from "react";

const Cardwatch = ({ title }) => {
  return (
    <div className="border flex justify-center">
      <div className="grid justify-center text-center pb-10">
        <div className="backgroundimage flex justify-center items-center h-[6vh] md:h-[8vh] lg:w-[270px] lg:h-[7vh] xl:w-[330px] text-white xl:h-[7.4vh]">
          <p className="text-[18px]">{title}</p>
        </div>
        <p className="flex justify-center py-10">
          <AiOutlineFileText className="text-[54px]" />
        </p>
        <p className="px-8 text-[#666666] font-sans">
          Modest is free responsive template, mobile ready layout, and animated
          contents. You can use this template for your website. Please tell your
          friends about it. Thank you.
        </p>
      </div>
    </div>
  );
};

export default Cardwatch;
