import React from "react";

const FilterOptions = () => {
  return (
    <section className="flex flex-wrap gap-3 items-center px-6 py-4 bg-white shadow-sm">
      <select className="border rounded px-3 py-2 text-sm">
        <option>Rent</option>
      </select>
      <select className="border rounded px-3 py-2 text-sm">
        <option>Property Type</option>
      </select>
      <select className="border rounded px-3 py-2 text-sm">
        <option>Price Range</option>
      </select>
      <select className="border rounded px-3 py-2 text-sm">
        <option>No of Beds & Baths</option>
      </select>
    </section>
  );
};

export default FilterOptions;
