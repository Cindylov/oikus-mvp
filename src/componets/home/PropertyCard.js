import React from "react";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { FaToilet } from "react-icons/fa";
import { FaEye, FaRegHeart } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

// Utility to extract first image from concatenated string
const getFirstImage = (images) => {
  if (!images) return "";
  return images.split("?")[0]; // simple cut at first `?`, as each URL ends in `?20%`
};

const PropertyCard = ({ property }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <Link to={`/property/${property.id}`}>
        <img
          src={getFirstImage(property.images)}
          alt={property.name}
          className="object-cover w-full h-48"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">₦{property.price.toLocaleString()}</h3>

        <div className="flex justify-between my-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <IoIosBed /> {property.no_beds} Beds
          </span>
          <span className="flex items-center gap-1">
            <MdBathtub /> {property.no_baths} Baths
          </span>
          <span className="flex items-center gap-1">
            <FaToilet /> {property.no_toilets} Toilets
          </span>
          <span className="flex items-center gap-1">
            <FaEye /> {/* Replace with actual view count if provided */}
            20 views
          </span>
        </div>

        <div className="flex items-center text-gray-700">
          {property.location?.trim()}
          <IoIosCheckmarkCircle className="text-[#12AF9B] ml-2" />
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          <span className="bg-[#12AF9B30] text-[#12AF9B] text-xs px-2 py-1 rounded-full">
            Available
          </span>
          <span className="bg-[#1273AF1A] text-[#1273AF] text-xs px-2 py-1 rounded-full">
            {property.name.includes("New") ? "Newly Built" : "For Sale"}
          </span>
          <FaRegHeart className="cursor-pointer ms-auto" />
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
