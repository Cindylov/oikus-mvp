import React from "react";
import PropertyCard from "./PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PropertyList = () => {
  return (
    <section className="px-6 py-12 bg-white">
      <div className="flex flex-wrap justify-between gap-4">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Browse Properties</h2>
          <div className="flex gap-4 mb-6">
            <button className="bg-[#12AF9B] text-white px-4 py-2 rounded-full">Sale</button>
            <button className="bg-white text-[#12AF9B] px-4 py-2 border-2 border-[#12AF9B] rounded-full">Rent</button>
            <button className="bg-white text-[#12AF9B] px-4 py-2 border-2 border-[#12AF9B] rounded-full">Shortlet</button>
          </div>
        </div>
        <div>
          <img src="../images/Frame 1618868784.png" alt="" />
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={16}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mt-10"
      >
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <SwiperSlide key={item}>
            <PropertyCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PropertyList;
