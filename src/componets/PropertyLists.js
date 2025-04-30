import React from "react";
import PropertyItem from "./PropertyItem";

const PropertyLists = () => {
  return (
    <section className="flex flex-col gap-4 p-6 bg-gray-100 overflow-y-auto h-screen md:h-auto md:max-h-[90vh]">
      {Array.from({ length: 5 }).map((_, index) => (
        <PropertyItem key={index} />
      ))}
    </section>
  );
};

export default PropertyLists;
