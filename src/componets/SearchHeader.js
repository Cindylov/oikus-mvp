import React from "react";

const SearchHeader = () => {
  return (
    <section className="bg-white p-4 shadow-md flex flex-col md:flex-row gap-4 items-center justify-between">
      <h2 className="text-lg font-medium">Showing 1024 active listings of "2 Bedroom flats in Surulere"</h2>
      <div className="flex items-center gap-2">
        <span className="text-gray-600 text-sm">Sort by</span>
        <select className="border p-2 rounded text-sm">
          <option>Relevant Listings</option>
          <option>Price (Low to High)</option>
          <option>Price (High to Low)</option>
        </select>
      </div>
    </section>
  );
};

export default SearchHeader;
