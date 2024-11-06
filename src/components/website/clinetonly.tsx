// components/ClientOnlySwiper.tsx
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules"; // Only import Mousewheel now
import "swiper/css";

const ClientOnlySwiper = ({ services }) => {
  return (
    <Swiper
      direction="vertical"
      spaceBetween={10}               // Space between slides
      slidesPerView={3}               // Show 3 slides at once
      mousewheel={{ forceToAxis: true }} // Enable mouse wheel scrolling
      modules={[Mousewheel]}          // Use only Mousewheel module
      className="h-[600px]"           // Set height to accommodate 3 slides
    >
      {services.map((service, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-start p-4 rounded-lg">
            <div className="text-3xl mr-4">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}

      {/* Hidden Swiper Scrollbar using Tailwind 'hidden' class */}
      <div className="swiper-scrollbar hidden"></div> {/* Hides scrollbar */}
    </Swiper>
  );
};

export default ClientOnlySwiper;
