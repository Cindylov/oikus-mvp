import React from "react";
import { Link } from "react-router-dom";
import { IoIosBed } from "react-icons/io";
import { MdBathtub } from "react-icons/md";
import { FaToilet } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";

const PropertyCard = () => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-md">
      <Link to="/property/:id">
        <img src="../images/Rectangle 5552.png" alt="House" className="object-cover w-full h-48" />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-bold">₦500,000</h3>
        <div className="flex justify-between my-6 text-sm text-gray-500">
          <span className="flex items-center">
            <IoIosBed />
            3 Beds
          </span>

          <span className="flex items-center">
            <MdBathtub />
            3 Baths
          </span>

          <span className="flex items-center">
            <FaToilet />
            5 Toilets
          </span>
          <span className="flex items-center">
            <FaEye />
            20 views
          </span>

        </div>
        <div className="flex items-center xt-gray-700">
          No 3 Ayoola close, Rejig GRA, Lagos 
          &nbsp;
          <IoIosCheckmarkCircle className="text-[#12AF9B]"/>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <Link to="/property/:id"><span className="bg-[#12AF9B30] text-[#12AF9B] text-xs px-2 py-1 rounded-full">Available</span></Link>
          <Link to="/property/:id"><span className="bg-[#1273AF1A] text-[#1273AF] text-xs px-2 py-1 rounded-full">Newly Built</span></Link>
          <FaRegHeart className="ms-auto"/>
        </div>
      </div>

    </div>
  );
};

export default PropertyCard;
