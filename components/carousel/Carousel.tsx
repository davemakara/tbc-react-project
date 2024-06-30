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
import Link from "next/link";

const Carousel = ({ storeProducts }: any) => {
  const latestProducts = storeProducts.slice(0, 8);

  return (
    <>
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
              <div className="w-[300px] sm:w-[260px] xxl:w-[280px] h-[240px] sm:h-[160px] xxl:h-[220px] relative rounded-xl overflow-hidden transition ease delay-150 hover:scale-110 duration-300">
                <Image src={item.photo} alt={item.title} fill />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
