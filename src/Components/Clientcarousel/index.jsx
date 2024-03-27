import { FaQuoteLeft } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default function CarouselSecond() {
  return (
    <div className="bgimg3 pb-20">
      <div className="">
        <div className="flex justify-end">
          <div className="backgroundimage4 flex justify-center items-center w-[260px] h-[8vh] md:h-[8vh] lg:w-[270px] lg:h-[7vh] xl:w-[250px] text-white xl:h-[7.5vh]">
            <p className="text-[21px]"> WHAT CLIENTS SAY</p>
          </div>
        </div>
        <div className="justify-center flex items-center pt-10">
          <div className="rounded-full w-16 h-16 border-white border-[1px] text-white flex justify-center items-center">
            <p>
              <FaQuoteLeft />
            </p>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 90,
            },
            700: {
              slidesPerView: 1,
              spaceBetween: 90,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 1,
              spaceBetween: 90,
            },
            850: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            910: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            990: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1100: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1160: {
              slidesPerView: 1,
              spaceBetween: 60,
            },
            1200: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1240: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1300: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
          }}
          spaceBetween={30}
          freeMode={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="grid justify-center items-center px-10 text-white">
            <div className="grid justify-center items-center pt-2">
              <p className="pt-4 text-center text-sm px-12">
                Odit nesciunt, voluptates optio numquam error, aut quis eius
                nostrum. Impedit eaque corrupti quis facere nobis, quam commodi.
                Repellat vel suscipit ut. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
              <p className="text-[18px] text-white py-4 pb-10 text-center">
                CINDY THREE
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="grid justify-center items-center px-10 text-white">
            <div className="grid justify-center items-center pt-2">
              <p className="pt-4 text-center text-sm px-12">
                Odit nesciunt, voluptates optio numquam error, aut quis eius
                nostrum. Impedit eaque corrupti quis facere nobis, quam commodi.
                Repellat vel suscipit ut. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
              <p className="text-[18px] text-white py-4 text-center">
                LINDA TWO
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="grid justify-center items-center px-10 text-white">
            <div className="grid justify-center items-center pt-2">
              <p className="pt-4 text-center text-sm px-12">
                Odit nesciunt, voluptates optio numquam error, aut quis eius
                nostrum. Impedit eaque corrupti quis facere nobis, quam commodi.
                Repellat vel suscipit ut. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
              <p className="text-[18px] text-white py-4 text-center">
                MARRY ONE
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
