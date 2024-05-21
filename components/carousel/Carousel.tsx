"use client";

import Image from "next/image";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

const Carousel = () => {
  return (
    <>
      <h1 className="my-10 text-center">Explore best of our products</h1>
      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },

          780: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1070: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1250: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1700: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        grabCursor={true}
        loop={true}
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 1
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 2
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 3
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 4
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 5
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 6
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 7
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 8
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 9
            </p>
            <Image
              src="https://images.pexels.com/photos/1556704/pexels-photo-1556704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              fill
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;