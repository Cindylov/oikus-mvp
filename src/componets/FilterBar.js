import React from "react";

const FilterBar = () => {
  return (
    <section className="bg-white py-4 px-6 flex flex-wrap gap-4 items-center justify-center md:justify-start shadow">
      <input
        type="text"
        placeholder="Show me 2 Bedroom flats in Surulere"
        className="border p-2 rounded w-full md:w-1/3"
      />
      <select className="border p-2 rounded text-sm">
        <option>Rent</option>
        <option>Sale</option>
      </select>
      <select className="border p-2 rounded text-sm">
        <option>Property Type</option>
        <option>House</option>
        <option>Flat</option>
      </select>
      <select className="border p-2 rounded text-sm">
        <option>Price Range</option>
      </select>
      <select className="border p-2 rounded text-sm">
        <option>No of Beds & Baths</option>
      </select>
      <div className="flex gap-2">
        <button className="bg-green-100 text-green-800 px-4 py-2 rounded">Grid</button>
        <button className="border px-4 py-2 rounded">Map</button>
      </div>
    </section>
  );
};

export default FilterBar;
