import React from "react";

const MapSection = () => {
  return (
    <section className="p-4 md:w-1/2 bg-white">
      <img
        src="https://via.placeholder.com/600x400"
        alt="Map"
        className="w-full h-full object-cover rounded"
      />
      <div className="flex justify-between mt-2">
        <button className="bg-white border px-3 py-2 text-sm rounded shadow">Draw Boundary</button>
        <button className="bg-white border px-3 py-2 text-sm rounded shadow">Social Amenities</button>
      </div>
    </section>
  );
};

export default MapSection;
