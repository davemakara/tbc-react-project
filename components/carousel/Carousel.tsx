"use client";

import Image from "next/image";

// import TES from "../../public/tes.jpg";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import Link from "next/link";

const Carousel = ({ storeProducts }: any) => {
  const latestProducts = storeProducts.slice(0, 8);

  return (
    <>
      {/* <span className="w-full mb-10 text-5xl font-bold flex justify-center md:justify-start">
        <h1 className="bg-red py-4 px-8 rounded-full">Trending Albums!</h1>
      </span> */}
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
        {latestProducts.map((item: any, index: any) => (
          <SwiperSlide key={index}>
            <Link href={`store/${item.id}`}>
              <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative rounded-xl overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <Image src={item.photo} alt={item.title} fill />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {/* 
        <SwiperSlide>
          <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative overflow-hidden rounded-xl">
            <p className="absolute z-10 top-1/2 right-1/2 text-white">
              Slide 2
            </p>
            <Image src={TES} alt="image" fill />
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
            <Image src={TES} alt="image" fill />
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
            <Image src={TES} alt="image" fill />
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
            <Image src={TES} alt="image" fill />
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
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default Carousel;
