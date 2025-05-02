import React from "react";
import PropertyImage from "../componets/PropertyImage";
import PropertyInfo from "../componets/PropertyInfo";
import PropertyActivity from "../componets/PropertyActivity";
import PropertyTabs from "../componets/PropertyTabs";

const PropertyDetails = () => {
  return (
    <div className="flex flex-col min-h-screen p-4 bg-gray-100 md:flex-row">
      <PropertyImage />
      <div className="flex flex-col w-full p-6 bg-white md:w-1/2 rounded-r-md">
        <PropertyInfo />
        <PropertyActivity />
        <PropertyTabs />
      </div>
    </div>
  );
};

export default PropertyDetails;
