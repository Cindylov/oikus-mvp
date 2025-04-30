import React from "react";

const PropertyInfo = () => {
  return (
    <div className="md:w-1/2 w-full bg-white p-6 rounded-r-md">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">₦750,000</h2>
          <p className="text-sm text-gray-600">No 3 Ayoola Coker, Ikeja GRA, Lagos</p>
          <div className="flex gap-3 mt-2 text-sm">
            <span>4 Beds</span>
            <span>4 Bath</span>
            <span>5 Toilets</span>
          </div>
        </div>
        <button className="text-gray-500 text-xl">×</button>
      </div>

      <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
        Schedule a Tour
      </button>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">About This Property</h3>
        <p className="text-sm text-gray-700">
          Welcome to this luxurious furnished apartment in the heart of Ikeja,
          available as of March 22, 2024. This exquisite property features 4
          spacious bedrooms, each complemented by its own en-suite bathroom.
          Additionally, the apartment offers 5 modern toilets to ensure
          convenience for all residents and guests.
        </p>
      </div>
    </div>
  );
};

export default PropertyInfo;
