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
          320: {
            slidesPerView: 1, // Exibe 1 imagem por vez
          },
          768: {
            slidesPerView: 1, // Exibe 1 imagem por vez
          },
          1024: {
            slidesPerView: 2, // Exibe 2 imagens por vez
          },
        }}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-80 mt-4 group overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={1080}
                quality={100}
                className="brightness-75 object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
