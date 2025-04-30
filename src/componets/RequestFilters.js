import React from "react";

const RequestFilters = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <div className="relative w-full md:w-auto">
        <select className="w-full px-4 py-2 pr-10 border rounded appearance-none">
          <option>Area</option>
          <option>Rent</option>
          <option>Buy</option>
          <option>Shortlet</option>
        </select>
        <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="relative w-full md:w-auto">
        <select className="w-full px-4 py-2 pr-10 border rounded appearance-none">
          <option>Rent</option>
          <option>Rent</option>
          <option>Buy</option>
          <option>Shortlet</option>
        </select>
        <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="relative w-full md:w-auto">
        <select className="w-full px-4 py-2 pr-10 border rounded appearance-none">
          <option>Property Type</option>
          <option> Flats & Apartment</option>
          <option> Commercial</option>
          <option> Detached Bungalow</option>
          <option> Detached Duplex</option>
          <option> Semi Detached</option>
          <option> Houses</option>
          <option> Land</option>
          <option> Warehouses</option>
          <option> self-contain</option>
          <option> Terraced Duplex</option>
        </select>
        <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="relative w-full md:w-auto">
        <select className="w-full px-4 py-2 pr-10 border rounded appearance-none">
        <option>Price Range</option>
        <option>Min Price(₦)</option>
        <option> - </option>
        <option>Max Price(₦)</option>
        </select>
        <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      <div className="relative w-full md:w-auto">
        <select className="w-full px-4 py-2 pr-10 border rounded appearance-none">
        <option>No of Beds & Baths</option>
        <option>3 Beds, 2 Baths</option>
        <option>5 Beds, 4 Baths</option>
        </select>
        <div className="absolute inset-y-0 flex items-center pointer-events-none right-3">
          <svg
            className="w-4 h-4 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
    </div>
  );
};

export default RequestFilters;
