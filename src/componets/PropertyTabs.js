import React from "react";

const PropertyTabs = () => {
  return (
    <div className="mt-8">
      <div className="flex gap-4 border-b pb-2 text-sm">
        <button className="font-semibold border-b-2 border-green-600 pb-1">Interior</button>
        <button>Building Information</button>
        <button>Total Costs</button>
        <button>Commute</button>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <h4 className="font-semibold">Bedrooms</h4>
          <p>Bedrooms: 3</p>
        </div>
        <div>
          <h4 className="font-semibold">Bathrooms</h4>
          <p>Bathrooms: 5</p>
          <p>Total Bathrooms: 4</p>
          <p>1/2 Bathrooms: 1</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyTabs;
