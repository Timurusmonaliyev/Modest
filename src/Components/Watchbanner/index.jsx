import React from "react";
import Image from "../../Assets/Images/5.jpg";
import Cardwatch from "./Cardwatch";

const Watchbanner = () => {
  return (
    <div className="bg-white p-6 pt-16 xl:p-20 lg:pt-24 lg:px-10">
      <div className="grid md:grid lg:flex xl:grid lg:gap-10 xl:grid-cols-2 items-center w-full">
        <div className="pb-10">
          <img className="xl:w-[320px] lg:w-[500px]" src={Image} alt="" />
        </div>
        <div className="text-center grid gap-8 bg-white xl:-ml-44 xl:-mt-16">
          <p className="text-[30px] lg:text-[33px] xl:text-[33px] xl:font-normal">
            WE MAKE CLEAN AND MINIMAL APPS
          </p>
          <p className="text-[#666666]">
            We are a small group of designers and developers from the small
            island. Feel free to talk to us about your projects. We are happy
            and ready to assist you.
          </p>
          <div className="flex justify-center">
            <button className="border-[#ddd] text-[#b1b7ba] font-semibold text-[12px] leading-4 border-2 uppercase underline hover:no-underline xl:w-32 xl:h-12 p-2 lg:w-32 lg:h-12">
              learn more
            </button>
          </div>
        </div>
      </div>
      <div className="grid md:grid lg:flex xl:flex pt-10 xl:pt-20 gap-8">
        <Cardwatch title='WEB DEVELOPMENT'/>
        <Cardwatch title='QUALITY PHOTOGRAPHY'/>
        <Cardwatch title='WORLDWIDE SUPPORT'/>
      </div>
    </div>
  );
};

export default Watchbanner;
