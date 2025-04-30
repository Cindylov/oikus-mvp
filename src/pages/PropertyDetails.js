import React from "react";
import PropertyImage from "../componets/PropertyImage";
import PropertyInfo from "../componets/PropertyInfo";
import PropertyActivity from "../componets/PropertyActivity";
import PropertyTabs from "../componets/PropertyTabs";

const PropertyDetails = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-4 bg-gray-100">
      <PropertyImage />
      <div className="flex flex-col md:w-1/2 w-full bg-white rounded-r-md p-6">
        <PropertyInfo />
        <PropertyActivity />
        <PropertyTabs />
      </div>
    </div>
  );
};

export default PropertyDetails;
