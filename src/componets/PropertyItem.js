import React from "react";
import { Link } from "react-router-dom";

const PropertyItem = () => {
  return (
    <div className="bg-white rounded shadow-sm flex gap-4 p-3">
      <Link to = "/property/:id">
      <img
        src="../images/Rectangle 5552.png"
        alt="Property"
        className="w-32 h-24 object-cover rounded"
      />
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">₦500,000</h2>
        <p className="text-gray-600 text-sm">3 Beds · 3 Baths · 5 Toilets · 20 views</p>
        <p className="text-gray-700 text-sm">No 3 Ayoola Coker, Ikeja GRA, Lagos</p>
        <div className="flex gap-2 mt-1">
          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Available</span>
          <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Newly Built</span>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default PropertyItem;
