import { AiOutlineUp } from "react-icons/ai";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-white">
      <div className="flex justify-start">
        <div className="backgroundimage5 flex xl:px-4 text-[#262626] items-center w-[260px] h-[8vh] md:h-[8vh] lg:w-[270px] lg:h-[7vh] xl:w-[250px] xl:h-[7.5vh]">
          <p className="text-[20px]"> STAY IN TOUCH</p>
        </div>
      </div>
      <div className="grid md:grid lg:flex xl:flex p-6 xl:px-20 py-10 gap-10 items-end">
        <div className="xl:w-[40%] lg:w-[40%] grid gap-4">
          <div className="grid text-[#666666] gap-2">
            <label htmlFor=""> Name:</label>
            <input type="text" className="border-2 border-gray-400 py-1" />
          </div>
          <div className="grid text-[#666666] gap-2">
            <label htmlFor=""> email Address:</label>
            <input type="text" className="border-2 border-gray-400 py-1" />
          </div>
          <div className="grid text-[#666666] gap-2">
            <label htmlFor=""> Phone Number:</label>
            <input type="text" className="border-2 border-gray-400 py-1" />
          </div>
          <div className="grid text-[#666666] gap-2">
            <label htmlFor=""> Describe your project:</label>
            <textarea
              name=""
              className="border-2 border-gray-400 py-1"
              d=""
              cols="10"
              rows="4"
            ></textarea>
          </div>
          <buttom className="xl:px-4 xl:py-2.5 border-[2px] w-[50%] md:w-[18%] lg:w-[32%] p-2 xl:w-[34%] text-[14px] font-semibold border-gray-600">
            SEND MESSAGE
          </buttom>
        </div>
        <div className="xl:w-[25%] lg:w-[25%] pt-64 xl:pt-0 w-ful] xl:pb-10 lg:pb-14 items-start grid gap-4">
          <p className="font-semibold">
            Email:
            <span className="text-blue-400 font-normal"> info@company.com</span>
          </p>
          <p>
            <span className="font-semibold"> Phone:</span> 080-070-0120
          </p>
        </div>
        <div className="xl:w-[25%] lg:w-[25%] text-[#666666] lg:pb-8 xl:pb-10 items-start">
          <p>
            Qui laudantium dignissimos eaque maxime obcaecati animi, maiores
            delectus voluptatum possimu.
          </p>
        </div>
      </div>
      <div className="flex justify-center text-center">
        <a href="#">
          <div className="bg-[#262626] rounded-full absolute -mt-10 xl:-ml-10 lg:-ml-6 -ml-4 w-16 h-16 text-white flex justify-center items-center">
            <AiOutlineUp />
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
