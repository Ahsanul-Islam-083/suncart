"use client";

import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";

const images = [
  {
    imageId: 1,
    url: "/sliderImages/SummerSale.jpg",
  },
  {
    imageId: 2,
    url: "/sliderImages/SummerCollection.jpg",
  },
  {
    imageId: 3,
    url: "/sliderImages/hotdeals.jpg",
  },
//   {
//     imageId: 4,
//     url: "/sliderImages/1672175934296.jpg",
//   },
];

export default function Banner() {
  const swiperRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    intervalRef.current = setInterval(() => {
      const swiper = swiperRef.current;

      if (!swiper) return;

      if (swiper.isEnd) {
        swiper.slideTo(0);
      } else {
        swiper.slideNext();
      }
    }, 6000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        className="w-75 sm:w-150 md:w-3xl lg:w-full h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh]"
      >
        {images.map((image) => (
          <SwiperSlide key={image.imageId}>
            <div className="relative h-full w-full">
              <Image
                src={image.url}
                fill
                className="object-contain object-center"
                alt={`Slide ${image.imageId}`}
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}