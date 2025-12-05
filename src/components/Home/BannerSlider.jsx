import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router";

const BannerSlider = () => {
  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      modules={[Autoplay, Pagination]}
      className="mySwiperBanner"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="relative">
          <div className="relative w-full aspect-[2500/800]">
            <img
              src="https://i.ibb.co/xvNyNvx/Gemini-Generated-Image-hxeerohxeerohxee.png"
              className="absolute inset-0 w-full h-full"
              alt="banner-1"
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <div
            className="absolute inset-0 flex flex-col 
          justify-center items-start px-6 md:px-14 text-white"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Keep Your Community Clean
            </h2>
            <p className="max-w-md text-sm md:text-lg mb-5">
              Raise awareness about waste management and report garbage issues.
            </p>
            <Link
              to="/addIssues"
              className="bg-blue-500 px-5 py-2 rounded-lg cursor-pointer font-semibold
             hover:bg-blue-800 transition"
            >
              Report Issue
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="relative">
          <div className="relative w-full aspect-[2500/800]">
            <img
              src="https://i.ibb.co/TM0L1pB0/banner2.png"
              className="absolute inset-0 w-full h-full"
              alt="banner-2"
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <div
            className="absolute inset-0 flex 
          flex-col justify-center items-start px-6 md:px-14 text-white"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Community Cleaning Action
            </h2>
            <p className="max-w-md text-sm md:text-lg mb-5">
              Encourage citizens to participate in cleaning campaigns.
            </p>
            <Link
              to="/register"
              className="bg-blue-500 px-5 py-2 cursor-pointer  rounded-lg font-semibold
             hover:bg-blue-800 transition"
            >
              Join Now
            </Link>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 3 */}
      <SwiperSlide>
        <div className="relative">
          <div className="relative w-full aspect-[2500/800]">
            <img
              src="https://i.ibb.co/FLJBRdf4/banner3.png"
              className="absolute inset-0 w-full h-full object-cover"
              alt="banner-3"
            />
          </div>

          <div className="absolute inset-0 bg-black/50" />

          <div
            className="absolute inset-0
           flex flex-col justify-center items-start px-6 md:px-14 text-white"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-3">
              Build a Sustainable Future
            </h2>
            <p className="max-w-md text-sm md:text-lg mb-5">
              Report environmental issues and help build a greener society.
            </p>
            <Link
              to="/allIssue"
              className="bg-blue-500 px-5 
            py-2 rounded-lg font-semibold hover:bg-blue-800  cursor-pointer  transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
