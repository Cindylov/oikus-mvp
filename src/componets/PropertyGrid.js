import React from "react";
import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  return (
    <section className="bg-gray-100 py-8 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 16 }).map((_, index) => (
          <PropertyCard key={index} />
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;
