import React from "react";

const PropertyActivity = () => {
  return (
    <div className="flex gap-6 items-center mt-6">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Days on Market</span>
        <span className="font-semibold">65 Days</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Views</span>
        <span className="font-semibold">255</span>
      </div>
    </div>
  );
};

export default PropertyActivity;
