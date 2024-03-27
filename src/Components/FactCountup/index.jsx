import React from "react";
import CountUp from "react-countup";

const Factcountup = () => {
  return (
    <div className="w-full bgimg">
      <div className="flex justify-end">
        <div className="backgroundimage2 flex justify-center items-center w-[260px] h-[8vh] md:h-[8vh] lg:w-[270px] lg:h-[7vh] xl:w-[260px] text-white xl:h-[8vh]">
          <p className="text-[20px]">SOME FUN FACTS</p>
        </div>
      </div>
      <div className="xl:px-20 grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 xl:grid xl:grid-cols-4 text-white py-10 pb-20">
        <div className="grid gap-2 justify-center">
          <div className="text-[30px] text-center pb-2">
            <CountUp end={1604} />
          </div>
          <hr className="w-20 text-center ml-[58px]" />
          <p className="text-[18px] font-semibold"> PROJECTS COMPLETED</p>
        </div>
        <div className="grid gap-2 justify-center">
          <div className="text-[30px] text-center pb-2">
            <CountUp end={21} />
          </div>
          <hr className="w-10 text-center ml-12" />
          <p className="text-[18px] font-semibold"> TEAM MEMBERS</p>
        </div>
        <div className="grid gap-2 justify-center">
          <div className="text-[30px] text-center pb-2">
            <CountUp end={302} />
          </div>
          <hr className="w-14 text-center ml-[50px]" />
          <p className="text-[18px] font-semibold"> SATISFIED CLIENTS</p>
        </div>
        <div className="grid gap-2 justify-center">
          <div className="text-[30px] text-center pb-2">
            <CountUp end={946} />
          </div>
          <hr className="w-10 text-center ml-10" />
          <p className="text-[18px] font-semibold"> CUP OF COFFEE</p>
        </div>
      </div>
    </div>
  );
};

export default Factcountup;
