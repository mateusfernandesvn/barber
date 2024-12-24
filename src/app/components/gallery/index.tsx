"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

export  function Gallery() {
  const images = [
    { src: "/img.png", alt: "Imagem 1" },
    { src: "/img2.png", alt: "Imagem 2" },
    { src: "/img3.png", alt: "Imagem 3" },
    { src: "/img4.png", alt: "Imagem 4" },
  ];

  return (
    <div className="w-full overflow-hidden"> 
      <Swiper
        modules={[Navigation, Keyboard]}
        spaceBetween={20} 
        keyboard={{ enabled: true }}
        navigation
        breakpoints={{
          768: {
            slidesPerView: 1, 
          },
          1024: {
            slidesPerView: 2, 
          },
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-96 my-4 group overflow-hidden max-md:h-64">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={1080}
                quality={100}
                className="brightness-75 w-full h-96 object-cover rounded-md group-hover:scale-110 transition-transform duration-300 hover:brightness-100 max-md:h-64"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
