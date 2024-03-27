import React from "react";
import Image from "../../Assets/Images/1.jpg";
import Image2 from "../../Assets/Images/2.jpg";
import Image3 from "../../Assets/Images/3.jpg";
import Image4 from "../../Assets/Images/4.jpg";
import Image5 from "../../Assets/Images/5.jpg";
import Image6 from "../../Assets/Images/6.jpg";

const Portfolio = () => {
  return (
    <div className="bgimg2 pb-16">
      <div className="flex justify-start">
        <div className="backgroundimage3 flex justify-center items-center w-[260px] h-[8vh] md:h-[8vh] lg:w-[270px] lg:h-[7vh] xl:w-[250px] text-white xl:h-[7.5vh]">
          <p className="text-[21px]"> OUR LOVELY WORK</p>
        </div>
      </div>
      <div className="xl:px-20 lg:px-12 px-2 pt-16 grid md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 xl:grid xl:grid-cols-3">
        <div className="imgdiv relative bg-[#CF6FC1] border-2">
          <img
            src={Image}
            className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
            alt=""
          />
          <div className="divimg opacity-0 absolute top-40 left-24">
            <div className="w-full h-full text-[21px]"> DIGITAL PHOTO</div>
          </div>
        </div>
        <div className="imgdiv relative bg-[#6DB4C4] border-2 duration-700">
          <img
            src={Image2}
            className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
            alt=""
          />
          <div className="divimg opacity-0 absolute top-40 left-24">
            <div className="w-full h-full text-[21px]"> QUALITY IMAGING</div>
          </div>
        </div>
        <div className="imgdiv relative bg-[#C55050] border-2 duration-700">
          <img
            src={Image3}
            className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
            alt=""
          />
          <div className="divimg opacity-0 absolute top-40 left-24">
            <div className="w-full h-full text-[21px]"> ANIMATIONS</div>
          </div>
        </div>
        <div className="imgdiv relative bg-[#242424] border-2 duration-700">
          <img
            src={Image4}
            className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
            alt=""
          />
          <div className="divimg opacity-0 absolute top-40 left-24">
            <div className="w-full h-full text-[21px]"> HI FI SOUND</div>
          </div>
        </div>
        <div className="imgdiv relative bg-[#EB8626] border-2 duration-700">
          <img
            src={Image5}
            className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
            alt=""
          />
          <div className="divimg opacity-0 absolute top-40 left-24">
            <div className="w-full h-full text-[21px]"> BEST IN TIME</div>
          </div>
        </div>
        <div className="imgdiv relative bg-[#33EFAE] border-2 duration-700">
          <img
            src={Image6}
            className="w-[90%] md:w-[100%] m-auto lg:w-[100%] xl:w-[100%]"
            alt=""
          />
          <div className="divimg opacity-0 absolute top-40 left-24">
            <div className="w-full h-full text-[21px]"> DELICIOUS ONE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
