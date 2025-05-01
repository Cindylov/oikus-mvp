import React, { useEffect, useState } from "react";
import PropertyCard from "./home/PropertyCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await fetch("https://search-feature-eight.vercel.app/list_properties/");
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        console.error("Failed to fetch properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
    
    
  }, []);
  console.log(properties, "properties");

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
      {loading ? (
        <p className="mt-10 text-center">Loading properties...</p>
      ) : (
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
          {properties.map((property) => (
            <SwiperSlide key={property.id}>
              <PropertyCard property={property} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
};

export default PropertyList;
